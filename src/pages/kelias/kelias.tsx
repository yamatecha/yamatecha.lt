import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LazyImage from '../../components/LazyImage'
import { shopifyAPI, type Product } from '../../lib/shopify'
import Carousel3D, { type CarouselItem } from '../../components/Carousel3D'
import './kelias-specific.css'
import '../global-page-styles/page-styles.css'

const Kelias = () => {
  const { t } = useTranslation()
  const [currentCategory, setCurrentCategory] = useState(0)
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const roadCategories: CarouselItem[] = [
    {
      id: 'sport',
      title: t('road.sport_title', 'Sportiniai'),
      subtitle: t('road.sport_desc', 'Maksimali galia ir greitis lenktynių trasoms'),
      image: '/src/assets/sport.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/sport'
    },
    {
      id: 'touring',
      title: t('road.touring_title', 'Turistiniai'),
      subtitle: t('road.touring_desc', 'Komfortas ir patikimumas ilgiems kelionėms'),
      image: '/src/assets/touring.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/touring'
    },
    {
      id: 'naked',
      title: t('road.naked_title', 'Naked'),
      subtitle: t('road.naked_desc', 'Laisvė ir kontrolė kasdieniam važiavimui'),
      image: '/src/assets/naked.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/naked'
    },
    {
      id: 'cruiser',
      title: t('road.cruiser_title', 'Kruizeriai'),
      subtitle: t('road.cruiser_desc', 'Klasikinis stilius ir atsipalaidavimas kelyje'),
      image: '/src/assets/cruiser.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/cruiser'
    },
    {
      id: 'sport-2',
      title: t('road.sport_title', 'Sportiniai'),
      subtitle: t('road.sport_desc', 'Maksimali galia ir greitis lenktynių trasoms'),
      image: '/src/assets/sport.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/sport'
    },
    {
      id: 'touring-2',
      title: t('road.touring_title', 'Turistiniai'),
      subtitle: t('road.touring_desc', 'Komfortas ir patikimumas ilgiems kelionėms'),
      image: '/src/assets/touring.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/touring'
    },
    {
      id: 'naked-2',
      title: t('road.naked_title', 'Naked'),
      subtitle: t('road.naked_desc', 'Laisvė ir kontrolė kasdieniam važiavimui'),
      image: '/src/assets/naked.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/naked'
    },
    {
      id: 'cruiser-2',
      title: t('road.cruiser_title', 'Kruizeriai'),
      subtitle: t('road.cruiser_desc', 'Klasikinis stilius ir atsipalaidavimas kelyje'),
      image: '/src/assets/cruiser.jpg',
      buttonText: t('road.view_models', 'Žiūrėti modelius'),
      link: '/motociklai/cruiser'
    }
  ]

  const handleCarouselChange = (index: number) => {
    setCurrentCategory(index)
  }

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await shopifyAPI.getProducts({
          query: 'tag:road AND tag:featured',
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
    <div className="kelias">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section main-hero">
          <div className="hero-video-background">
            <video 
              src="https://github.com/yamatecha/yamatecha.lt/releases/download/videos/videoplayback.webm"
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-video" 
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('road.title', 'KELIAS')}</span></h1>
            <p>{t('road.subtitle', 'Keliaukite stiliai su Yamaha keliaujančiais motociklais')}</p>
            <button className="cta-button">{t('hero.exploreButton', 'Tyrinėti produktus')}</button>
          </div>
        </section>

        {/* Road Categories - 3D Carousel */}
        <section className="hero-section road-categories-3d-carousel">
          <div className="hero-video-background">
            <div className="carousel-background-pattern"></div>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            {/* 3D Carousel */}
            <div className="carousel-container-new">
              <Carousel3D 
                items={roadCategories}
                startIndex={currentCategory}
                onChange={handleCarouselChange}
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
              />
            </div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('road.categories_title', 'Pasirinkite savo kelią')}</span></h1>
            <p>{t('road.categories_subtitle', 'Atraskite idealų motociklą savo kelionei')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="hero-video-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-top">
            <h1><span style={{ color: '#dc2626' }}>{t('road.featured_title', 'Populiarūs modeliai')}</span></h1>
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
                        {t('road.learn_more', 'Sužinoti daugiau')}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                  <p>{t('road.no_products', 'Nerasta produktų')}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Kelias