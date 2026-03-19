import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../../components/shop/ProductCard'
import LazyImage from '../../components/LazyImage'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './vanduo.css'

const Vanduo = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentCategory, setCurrentCategory] = useState(0)
  const [totalRotations, setTotalRotations] = useState(0)

  const watercraftCategories = [
    {
      id: 'jet-ski',
      title: t('watercraft.jet_ski_title', 'Vandens motociklai'),
      subtitle: t('watercraft.jet_ski_desc', 'Greičiausi ir manevringiausi vandens motociklai'),
      image: '/src/assets/watercraft/jet-ski.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti modelius'),
      link: '/vandens-transportas/vandens-motociklai'
    },
    {
      id: 'boats',
      title: t('watercraft.boats_title', 'Valtys'),
      subtitle: t('watercraft.boats_desc', 'Patikimos valtys poilsiui ir žvejybai'),
      image: '/src/assets/watercraft/boat.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti modelius'),
      link: '/vandens-transportas/valtys'
    },
    {
      id: 'outboard',
      title: t('watercraft.outboard_title', 'Išoriniai varikliai'),
      subtitle: t('watercraft.outboard_desc', 'Galingi ir ekonomiški išoriniai varikliai'),
      image: '/src/assets/watercraft/outboard.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti modelius'),
      link: '/vandens-transportas/isoriniai-varikliai'
    }
  ]

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % watercraftCategories.length)
    setTotalRotations((prev) => prev + 1)
  }

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + watercraftCategories.length) % watercraftCategories.length)
    setTotalRotations((prev) => prev - 1)
  }

  useEffect(() => {
    const interval = setInterval(nextCategory, 5000)
    return () => clearInterval(interval)
  }, [])

  // Calculate actual rotation for infinite effect
  const actualRotation = -(totalRotations * 360) / watercraftCategories.length

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const { data, errors } = await shopifyAPI.getProducts({
          first: 12,
          query: 'product_type:Watercraft',
        })

        if (errors?.length) {
          setError('Failed to load products')
        } else {
          setProducts(data?.nodes || [])
        }
      } catch {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="vanduo">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-video-background">
            <video 
              src="https://github.com/yamatecha/yamatecha.lt/releases/download/videos/videoplayback.mp4"
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-video" 
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('watercraft.title', 'VANDENS TRANSPORTAS')}</h1>
            <p>{t('watercraft.subtitle', 'Patirkti laisvę vandenyje su Yamaha vandens transporto priemonėmis')}</p>
            <button className="cta-button">{t('hero.exploreButton', 'Tyrinėti produktus')}</button>
          </div>
        </section>

        {/* Watercraft Categories - 3D Carousel */}
        <section className="hero-section watercraft-categories-3d-carousel">
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
                {watercraftCategories.map((category, index) => {
                  const angle = (360 / watercraftCategories.length) * index
                  const isActive = index === currentCategory
                  const offset = index - currentCategory
                  const normalizedOffset = offset < 0 ? offset + watercraftCategories.length : offset
                  
                  return (
                    <div
                      key={category.id}
                      className={`carousel-card-3d ${isActive ? 'active' : ''}`}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${isActive ? '350px' : '300px'}) ${isActive ? 'scale(1.1)' : ''}`,
                        opacity: normalizedOffset === 0 ? 1 : normalizedOffset === 1 || normalizedOffset === watercraftCategories.length - 1 ? 0.7 : 0.3,
                        pointerEvents: normalizedOffset === 0 ? 'auto' : 'none',
                        zIndex: watercraftCategories.length - Math.abs(offset)
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
                {watercraftCategories.map((_, index) => (
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
            <h1><span style={{ color: '#dc2626' }}>{t('watercraft.categories_title', 'Pasirinkite savo vandens transportą')}</span></h1>
            <p>{t('watercraft.categories_subtitle', 'Atraskite idealų vandens transportą savo nuotykiams')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="hero-content-wrapper">
            <div className="hero-content-top">
              <h1><span style={{ color: '#dc2626' }}>{t('watercraft.featured_title', 'Populiarūs modeliai')}</span></h1>
            </div>
            {loading && (
              <div style={{ padding: '24px 0' }}>{t('shop.loading', 'Loading products...')}</div>
            )}
            {error && (
              <div style={{ padding: '24px 0' }}>{error}</div>
            )}
            {!loading && !error && (
              <div className="models-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2>{t('watercraft.features_title', 'Kodėl pasirinkti Yamaha vandens transportą?')}</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/reliability.svg" alt="Reliability" />
                </div>
                <h3>{t('watercraft.feature1_title', 'Patikimumas')}</h3>
                <p>{t('watercraft.feature1_desc', 'Išbandyta technologija ir ilgaamžiškumas')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/eco-friendly.svg" alt="Eco-Friendly" />
                </div>
                <h3>{t('watercraft.feature2_title', 'Ekologiškumas')}</h3>
                <p>{t('watercraft.feature2_desc', 'Mažesnės išmetamos medžiagos ir degalų sąnaudos')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/innovation.svg" alt="Innovation" />
                </div>
                <h3>{t('watercraft.feature3_title', 'Inovacijos')}</h3>
                <p>{t('watercraft.feature3_desc', 'Moderni technologija ir patogumas')}</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <img src="/src/assets/icons/safety.svg" alt="Safety" />
                </div>
                <h3>{t('watercraft.feature4_title', 'Saugumas')}</h3>
                <p>{t('watercraft.feature4_desc', 'Aukščiausi saugumo standartai ir apsaugos sistemos')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>{t('watercraft.cta_title', 'Pasiruošę vandens nuotykiams?')}</h2>
              <p>{t('watercraft.cta_desc', 'Apsilankykite mūsų salonuose ir išbandykite Yamaha vandens transportą')}</p>
              <div className="cta-buttons">
                <button className="primary-btn">{t('watercraft.test_ride', 'Test ride')}</button>
                <button className="secondary-btn">{t('watercraft.contact_dealer', 'Susisiekti su prekybininku')}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Vanduo