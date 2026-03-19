import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LazyImage from '../../components/LazyImage'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './kelias.css'

const Kelias = () => {
  const { t } = useTranslation()
  const [currentCategory, setCurrentCategory] = useState(0)
  const [totalRotations, setTotalRotations] = useState(0)
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const roadCategories = [
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
    }
  ]

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % roadCategories.length)
    setTotalRotations((prev) => prev + 1)
  }

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + roadCategories.length) % roadCategories.length)
    setTotalRotations((prev) => prev - 1)
  }

  useEffect(() => {
    const interval = setInterval(nextCategory, 5000)
    return () => clearInterval(interval)
  }, [])

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

  // Calculate actual rotation for infinite effect
  const actualRotation = -(totalRotations * 360) / roadCategories.length

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
            <div className="carousel-3d-container">
              <div className="carousel-3d" style={{
                transform: `rotateY(${actualRotation}deg)`
              }}>
                {roadCategories.map((category, index) => {
                  const angle = (360 / roadCategories.length) * index
                  const isActive = index === currentCategory
                  const offset = index - currentCategory
                  const normalizedOffset = offset < 0 ? offset + roadCategories.length : offset
                  
                  return (
                    <div
                      key={category.id}
                      className={`carousel-card-3d ${isActive ? 'active' : ''}`}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${isActive ? '350px' : '300px'}) ${isActive ? 'scale(1.1)' : ''}`,
                        opacity: normalizedOffset === 0 ? 1 : normalizedOffset === 1 || normalizedOffset === roadCategories.length - 1 ? 0.7 : 0.3,
                        pointerEvents: normalizedOffset === 0 ? 'auto' : 'none',
                        zIndex: roadCategories.length - Math.abs(offset)
                      }}
                      onClick={() => {
                        const diff = index - currentCategory
                        setTotalRotations((prev) => prev + diff)
                        setCurrentCategory(index)
                      }}
                    >
                      <div className="promo-card-image">
                        <LazyImage 
                          src={category.image} 
                          alt={category.title}
                          fallbackSrc="/src/assets/hero.png"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="promo-card-content">
                        <h3>{category.title}</h3>
                        <p>{category.subtitle}</p>
                        <a href={category.link} className="cta-button promo-button">
                          {category.buttonText}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 3D Carousel Controls */}
            <div className="carousel-controls-3d">
              <button className="carousel-btn-3d prev-btn-3d" onClick={prevCategory}>
                ‹
              </button>
              <div className="carousel-dots-3d">
                {roadCategories.map((_, index) => (
                  <button
                    key={index}
                    className={`dot-3d ${index === currentCategory ? 'active' : ''}`}
                    onClick={() => setCurrentCategory(index)}
                  />
                ))}
              </div>
              <button className="carousel-btn-3d next-btn-3d" onClick={nextCategory}>
                ›
              </button>
            </div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('road.categories_title', 'Pasirinkite savo kelią')}</span></h1>
            <p>{t('road.categories_subtitle', 'Atraskite idealų motociklą savo kelionei')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="hero-content-wrapper">
            <div className="hero-content-top">
              <h1><span style={{ color: '#dc2626' }}>{t('road.featured_title', 'Populiarūs modeliai')}</span></h1>
            </div>
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

        {/* Road Features */}
        <section className="road-features">
          <div className="container">
            <h2>{t('road.features_title', 'Kodėl pasirinkti Yamaha keliui?')}</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/engine.svg" alt="Engine" />
                </div>
                <h3>{t('road.feature1_title', 'Inovatyvūs varikliai')}</h3>
                <p>{t('road.feature1_desc', 'CP3 ir CP4 varikliai su užtikrinamu galios ir kuro efektyvumo balansu')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/electronics.svg" alt="Electronics" />
                </div>
                <h3>{t('road.feature2_title', 'Išmanios elektronikos')}</h3>
                <p>{t('road.feature2_desc', 'ABS, traction control, quick shifter ir daugiau saugumui')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/chassis.svg" alt="Chassis" />
                </div>
                <h3>{t('road.feature3_title', 'Lengvi rėmai')}</h3>
                <p>{t('road.feature3_desc', 'Aliumininiai ir plieniniai rėmai užtikrinants puikų valdymą')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/design.svg" alt="Design" />
                </div>
                <h3>{t('road.feature4_title', 'Išskirtinis dizainas')}</h3>
                <p>{t('road.feature4_desc', 'Japoniškai estetika ir moderni detalės')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>{t('road.cta_title', 'Paruošti keliauti?')}</h2>
              <p>{t('road.cta_desc', 'Apsilankykite mūsų salonuose ir išbandykite Yamaha motociklą')}</p>
              <div className="cta-buttons">
                <button className="primary-btn">{t('road.test_drive', 'Test drive')}</button>
                <button className="secondary-btn">{t('road.contact_dealer', 'Susisiekti su prekybininku')}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Kelias