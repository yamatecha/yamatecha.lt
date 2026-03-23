import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LazyImage from '../../components/LazyImage'
import LazyVideo from '../../components/LazyVideo'
import Carousel3D from '../../components/Carousel3D/Carousel3D'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './bekele-specific.css'
import '../global-page-styles/page-styles.css'

const tenereVideo = 'https://github.com/yamatecha/yamatecha.lt/releases/download/videos/2026.Yamaha.Tenere.700.World.Raid.Adventure.has.no.limits.webm'

const Bekele = () => {
  const { t } = useTranslation()
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const offroadCategories = [
    {
      id: 'enduro',
      title: t('offroad.enduro_title', 'Enduro'),
      subtitle: t('offroad.enduro_desc', 'Universalūs motociklai miestui ir gamtai'),
      image: '/src/assets/enduro.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/enduro'
    },
    {
      id: 'motocross',
      title: t('offroad.motocross_title', 'Motokrosas'),
      subtitle: t('offroad.motocross_desc', 'Lenktyniniai motociklai trasoms ir bekelei'),
      image: '/src/assets/motocross.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/motocross'
    },
    {
      id: 'adventure',
      title: t('offroad.adventure_title', 'Nuotykiai'),
      subtitle: t('offroad.adventure_desc', 'Tolimos kelionės ir nepažymėti keliai'),
      image: '/src/assets/adventure.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/adventure'
    },
    {
      id: 'atv',
      title: t('offroad.atv_title', 'Keturračiai'),
      subtitle: t('offroad.atv_desc', 'Galia ir manevringumas sunkiai vietovei'),
      image: '/src/assets/atv.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/keturaciai'
    },
    {
      id: 'enduro-2',
      title: t('offroad.enduro_title', 'Enduro'),
      subtitle: t('offroad.enduro_desc', 'Universalūs motociklai miestui ir gamtai'),
      image: '/src/assets/enduro.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/enduro'
    },
    {
      id: 'motocross-2',
      title: t('offroad.motocross_title', 'Motokrosas'),
      subtitle: t('offroad.motocross_desc', 'Lenktyniniai motociklai trasoms ir bekelei'),
      image: '/src/assets/motocross.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/motocross'
    },
    {
      id: 'adventure-2',
      title: t('offroad.adventure_title', 'Nuotykiai'),
      subtitle: t('offroad.adventure_desc', 'Tolimos kelionės ir nepažymėti keliai'),
      image: '/src/assets/adventure.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/adventure'
    },
    {
      id: 'atv-2',
      title: t('offroad.atv_title', 'Keturračiai'),
      subtitle: t('offroad.atv_desc', 'Galia ir manevringumas sunkiai vietovei'),
      image: '/src/assets/atv.jpg',
      buttonText: t('offroad.view_models', 'Žiūrėti modelius'),
      link: '/keturciai'
    }
  ]

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await shopifyAPI.getProducts({
          query: 'tag:off-road AND tag:featured',
          first: 3
        })
        
        if (response.errors) {
          console.error('Shopify API errors:', response.errors)
          setError('Failed to load products')
        } else if (response.data?.nodes) {
          setFeaturedProducts(response.data.nodes)
        }
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  return (
    <div className="bekele">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-video-background">
            <LazyVideo
              src={tenereVideo}
              type="video/webm"
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('offroad.title', 'BEKELĖ')}</span></h1>
            <p>{t('offroad.subtitle', 'Nugalėkite bet kokią trasą su Yamaha bekelės motociklais')}</p>
            <button className="cta-button">{t('hero.exploreButton', 'Tyrinėti produktus')}</button>
          </div>
        </section>

        {/* Off-Road Categories - 3D Carousel */}
        <section className="hero-section offroad-categories-3d-carousel">
          <div className="hero-video-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            {/* 3D Carousel */}
            <Carousel3D
              items={offroadCategories}
              autoplay={true}
              interval={5000}
              effect="coverflow"
              slidesPerView={3}
              centeredSlides={true}
              arrows={true}
              dots={false}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
              }}
              height="500px"
              className="bekele-carousel"
            />
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('offroad.categories_title', 'Pasirinkite savo nuotykį')}</span></h1>
            <p>{t('offroad.categories_subtitle', 'Atraskite idealų motociklą savo nuotykiams')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="hero-video-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-top">
            <h1><span style={{ color: '#dc2626' }}>{t('offroad.featured_title', 'Populiarūs modeliai')}</span></h1>
          </div>
          <div className="hero-content-wrapper">
            <div className="models-grid">
              {loading ? (
                // Loading skeleton
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="model-card">
                    <div className="model-image">
                      <div className="skeleton-loader" style={{ width: '100%', height: '200px' }}></div>
                    </div>
                    <div className="model-info">
                      <div className="skeleton-loader" style={{ width: '60%', height: '24px', marginBottom: '8px' }}></div>
                      <div className="skeleton-loader" style={{ width: '100%', height: '16px', marginBottom: '8px' }}></div>
                      <div className="skeleton-loader" style={{ width: '40%', height: '20px', marginBottom: '12px' }}></div>
                      <div className="skeleton-loader" style={{ width: '80%', height: '36px' }}></div>
                    </div>
                  </div>
                ))
              ) : error ? (
                <div className="error-message" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                  <p>{error}</p>
                  <button onClick={() => window.location.reload()} className="model-btn" style={{ marginTop: '20px' }}>
                        {t('common.retry', 'Bandyti dar kartą')}
                      </button>
                </div>
              ) : featuredProducts.length > 0 ? (
                featuredProducts.map((product) => (
                  <div key={product.id} className="model-card">
                    <div className="model-image">
                      <LazyImage
                        src={product.images.nodes[0]?.url || '/src/assets/hero.png'}
                        alt={product.images.nodes[0]?.altText || product.title}
                        fallbackSrc="/src/assets/hero.png"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="model-info">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <div className="model-price">
                        <span className="price">
                          €{parseFloat(product.priceRange.minVariantPrice.amount).toLocaleString('lt-LT')}
                        </span>
                      </div>
                      <button 
                        className="model-btn"
                        onClick={() => window.location.href = `/product/${product.handle}`}
                      >
                        {t('offroad.learn_more', 'Sužinoti daugiau')}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                  <p>{t('offroad.no_products', 'Nerasta produktų')}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Bekele