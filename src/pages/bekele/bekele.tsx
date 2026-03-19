import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LazyImage from '../../components/LazyImage'
import LazyVideo from '../../components/LazyVideo'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './bekele.css'

const tenereVideo = 'https://github.com/yamatecha/yamatecha.lt/releases/download/videos/2026.Yamaha.Tenere.700.World.Raid.Adventure.has.no.limits.webm'

const Bekele = () => {
  const { t } = useTranslation()
  const [currentCategory, setCurrentCategory] = useState(0)
  const [totalRotations, setTotalRotations] = useState(0)
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
    }
  ]

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % offroadCategories.length)
    setTotalRotations((prev) => prev + 1)
  }

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + offroadCategories.length) % offroadCategories.length)
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

  // Calculate actual rotation for infinite effect
  const actualRotation = -(totalRotations * 360) / offroadCategories.length

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
            <div className="carousel-background-pattern"></div>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            {/* 3D Carousel */}
            <div className="carousel-3d-container">
              <div className="carousel-3d" style={{
                transform: `rotateY(${actualRotation}deg)`
              }}>
                {offroadCategories.map((category, index) => {
                  const angle = (360 / offroadCategories.length) * index
                  const isActive = index === currentCategory
                  const offset = index - currentCategory
                  const normalizedOffset = offset < 0 ? offset + offroadCategories.length : offset

                  return (
                    <div
                      key={category.id}
                      className={`carousel-card-3d ${isActive ? 'active' : ''}`}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${isActive ? '350px' : '300px'}) ${isActive ? 'scale(1.1)' : ''}`,
                        opacity: normalizedOffset === 0 ? 1 : normalizedOffset === 1 || normalizedOffset === offroadCategories.length - 1 ? 0.7 : 0.3,
                        pointerEvents: normalizedOffset === 0 ? 'auto' : 'none',
                        zIndex: offroadCategories.length - Math.abs(offset)
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
                {offroadCategories.map((_, index) => (
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
            <h1><span style={{ color: '#dc2626' }}>{t('offroad.categories_title', 'Pasirinkite savo nuotykį')}</span></h1>
            <p>{t('offroad.categories_subtitle', 'Atraskite idealų motociklą savo nuotykiams')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="hero-content-wrapper">
            <div className="hero-content-top">
              <h1><span style={{ color: '#dc2626' }}>{t('offroad.featured_title', 'Populiarūs modeliai')}</span></h1>
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

        {/* Off-Road Features */}
        <section className="offroad-features">
          <div className="container">
            <h2>{t('offroad.features_title', 'Kodėl pasirinkti Yamaha bekelei?')}</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/suspension.svg" alt="Suspension" />
                </div>
                <h3>{t('offroad.feature1_title', 'Patobulinta pakaba')}</h3>
                <p>{t('offroad.feature1_desc', 'KYB ir WP amortizatoriai užtikrina puikią kontrolę')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/durability.svg" alt="Durability" />
                </div>
                <h3>{t('offroad.feature2_title', 'Ilgalaikis patikimumas')}</h3>
                <p>{t('offroad.feature2_desc', 'Prabangių medžiagų ir technologijų derinys')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/power.svg" alt="Power" />
                </div>
                <h3>{t('offroad.feature3_title', 'Efektyvi galia')}</h3>
                <p>{t('offroad.feature3_desc', 'Šiuolaikiški varikliai su optimaliu sukimo momentu')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/versatility.svg" alt="Versatility" />
                </div>
                <h3>{t('offroad.feature4_title', 'Universalumas')}</h3>
                <p>{t('offroad.feature4_desc', 'Motociklai, tinkantys įvairioms sąlygoms ir stiliams')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>{t('offroad.cta_title', 'Paruošti nuotykiams?')}</h2>
              <p>{t('offroad.cta_desc', 'Apsilankykite mūsų salonuose ir išbandykite Yamaha bekelės motociklą')}</p>
              <div className="cta-buttons">
                <button className="primary-btn">{t('offroad.test_drive', 'Test drive')}</button>
                <button className="secondary-btn">{t('offroad.contact_dealer', 'Susisiekti su prekybininku')}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Bekele