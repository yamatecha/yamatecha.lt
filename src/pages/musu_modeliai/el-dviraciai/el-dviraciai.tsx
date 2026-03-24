import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductGrid } from '../../../components/layout/ProductGrid'
import { HeroSectionTailwind } from '../../../components/layout/HeroSection-Tailwind'
import { shopifyAPI, type Product } from '../../../lib/shopify'
import { useCart } from '../../../contexts/CartContext'

const ElDviraciaiFinalTailwind = () => {
  const { t } = useTranslation()
  const { addItem } = useCart()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('🚀 Starting to fetch electric bike products...')
        const { data, errors } = await shopifyAPI.getProducts({
          first: 12,
          query: 'product_type:"Electric Bike"',
        })

        console.log('📊 Fetch results:', { data, errors })

        if (errors?.length) {
          console.error('❌ API errors:', errors)
        } else {
          const products = data?.nodes || []
          console.log('🛒 Products loaded:', products.length)
          setProducts(products)
        }
      } catch (error) {
        console.error('❌ Fetch error:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="el-dviraciai">
      <main className="main-content">
        {/* Hero Section */}
        <HeroSectionTailwind 
          title={t('electric_bikes.title', 'ELEKTRINIAI DVIRAČIAI')}
          subtitle={t('electric_bikes.subtitle', 'Inovatyvūs Yamaha elektriniai dviračiai jūsų judrumui')}
          videoSrc="https://github.com/yamatecha/yamatecha.lt/releases/download/videos/Yamaha.Bicycles.YDX-MORO.07.Introduction.webm"
          ctaText={t('hero.exploreButton', 'Tyrinėti produktus')}
        />

        {/* Featured Models - Pure Tailwind */}
        <ProductGrid 
          products={products}
          title={t('electric_bikes.featured_title', 'Populiariausi modeliai')}
          subtitle={t('electric_bikes.featured_subtitle', 'Geriausi pasirinkimai jūsų patogumui')}
          onAddToCart={addItem}
        />
      </main>
    </div>
  )
}

export default ElDviraciaiFinalTailwind
