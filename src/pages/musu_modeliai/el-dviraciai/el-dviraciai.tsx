import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductGrid } from '../../../components/layout/ProductGrid'
import { HeroSectionTailwind } from '../../../components/layout/HeroSection-Tailwind'
import { shopifyAPI, type Product } from '../../../lib/shopify'

const ElDviraciaiFinalTailwind = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])

  const handleAddToCart = async (variantId: string) => {
    const key = 'cart'
    const raw = localStorage.getItem(key)
    const items: Array<{ variantId: string; qty: number }> = raw ? JSON.parse(raw) : []
    const idx = items.findIndex(i => i.variantId === variantId)

    if (idx >= 0) {
      items[idx] = { ...items[idx], qty: items[idx].qty + 1 }
    } else {
      items.push({ variantId, qty: 1 })
    }

    localStorage.setItem(key, JSON.stringify(items))
  }

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
          onAddToCart={handleAddToCart}
        />
      </main>
    </div>
  )
}

export default ElDviraciaiFinalTailwind
