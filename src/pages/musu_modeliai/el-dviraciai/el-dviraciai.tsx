import { useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../../../components/shop/ProductCard'
import Carousel3D from '../../../components/Carousel3D/Carousel3D'
import { shopifyAPI, type Product } from '../../../lib/shopify'
import './el-dviraciai-specific.css'
import '../../global-page-styles/page-styles.css'

const ElDviraciai = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleQuickView = useCallback((product: Product) => {
    // TODO: Implement quick view modal
    console.log('Quick view:', product.title)
  }, [])

  const handleAddToCart = useCallback((variantId: string) => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', variantId)
  }, [])

  const electricBikeCategories = [
    {
      id: 'urban',
      title: t('electric_bikes.urban', 'Miesto'),
      subtitle: t('electric_bikes.urban_desc', 'Tobuli miesto judrumui ir kasdienėms kelionėms'),
      image: '/src/assets/urban-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/urban'
    },
    {
      id: 'mountain',
      title: t('electric_bikes.mountain', 'Kalnų'),
      subtitle: t('electric_bikes.mountain_desc', 'Galia ir kontrolė bekelės maršrutams'),
      image: '/src/assets/mountain-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/mountain'
    },
    {
      id: 'trekking',
      title: t('electric_bikes.trekking', 'Trekingo'),
      subtitle: t('electric_bikes.trekking_desc', 'Universalūs dviračiai ilgoms kelionėms'),
      image: '/src/assets/trekking-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/trekking'
    },
    {
      id: 'performance',
      title: t('electric_bikes.performance', 'Sportiniai'),
      subtitle: t('electric_bikes.performance_desc', 'Maksimali galima jėga ir greitis'),
      image: '/src/assets/performance-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/performance'
    },
    {
      id: 'folding',
      title: t('electric_bikes.folding', 'Sulankstomi'),
      subtitle: t('electric_bikes.folding_desc', 'Praktiški sulankstomi dviračiai miestui'),
      image: '/src/assets/folding-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/folding'
    },
    {
      id: 'cargo',
      title: t('electric_bikes.cargo', 'Krovininiai'),
      subtitle: t('electric_bikes.cargo_desc', 'Stiprūs dviračiai kroviniams vežti'),
      image: '/src/assets/cargo-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/cargo'
    },
    {
      id: 'hybrid',
      title: t('electric_bikes.hybrid', 'Hibridiniai'),
      subtitle: t('electric_bikes.hybrid_desc', 'Universalūs dviračiai visoms sąlygoms'),
      image: '/src/assets/hybrid-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/hybrid'
    },
    {
      id: 'commuter',
      title: t('electric_bikes.commuter', 'Komuteriniai'),
      subtitle: t('electric_bikes.commuter_desc', 'Patogūs dviračiai kasdienėms kelionėms'),
      image: '/src/assets/commuter-bike.jpg',
      buttonText: t('electric_bikes.view_models', 'Žiūrėti modelius'),
      link: '/elektriniai-dviraciai/commuter'
    }
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        console.log('🚀 Starting to fetch electric bike products...')
        const { data, errors } = await shopifyAPI.getProducts({
          first: 12,
          query: 'product_type:"Electric Bike"',
        })

        console.log('📊 Fetch results:', { data, errors })

        if (errors?.length) {
          console.error('❌ API errors:', errors)
          setError('Failed to load products')
        } else {
          const products = data?.nodes || []
          console.log('🛒 Products loaded:', products.length)
          console.log('📝 Product list:', products)
          setProducts(products)
        }
      } catch (error) {
        console.error('❌ Fetch error:', error)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="el-dviraciai">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section main-hero">
          <div className="hero-video-background">
            <video 
              src="https://github.com/yamatecha/yamatecha.lt/releases/download/videos/Yamaha.Bicycles.YDX-MORO.07.Introduction.webm" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-video" 
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('electric_bikes.title', 'ELEKTRINIAI DVIRAČIAI')}</span></h1>
            <p>{t('electric_bikes.subtitle', 'Inovatyvūs Yamaha elektriniai dviračiai jūsų judrumui')}</p>
            <button className="cta-button">{t('hero.exploreButton', 'Tyrinėti produktus')}</button>
          </div>
        </section>

        {/* Electric Bike Categories - 3D Carousel */}
        <section className="hero-section electric-bike-categories-3d-carousel">
          <div className="hero-video-background">
            <div className="carousel-background-pattern"></div>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            {/* 3D Carousel */}
            <div className="carousel-container-new">
              <Carousel3D
                items={electricBikeCategories}
                autoplay={true}
                interval={5000}
                pauseOnHover={true}
                infinite={true}
                arrows={true}
                dots={false}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }}
                className="electric-bike-carousel"
              />
            </div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('electric_bikes.categories_title', 'Pasirinkite savo kelią')}</span></h1>
            <p>{t('electric_bikes.categories_subtitle', 'Atraskite idealų elektrinį dviratį savo poreikiams')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="hero-content-top">
            <h1><span style={{ color: '#dc2626' }}>{t('electric_bikes.featured_title', 'Populiariausi modeliai')}</span></h1>
          </div>
          <div className="hero-content-wrapper">
            {loading && (
              <div style={{ padding: '24px 0' }}>{t('shop.loading', 'Loading products...')}</div>
            )}
            {error && (
              <div style={{ padding: '24px 0' }}>{error}</div>
            )}
            {!loading && !error && (
              <div className="models-grid">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onQuickView={handleQuickView}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default ElDviraciai