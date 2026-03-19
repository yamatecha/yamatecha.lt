import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LazyImage from '../../components/LazyImage'
import ProductCard from '../../components/shop/ProductCard'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './el-dviraciai.css'

const ElDviraciai = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentCategory, setCurrentCategory] = useState(0)
  const [totalRotations, setTotalRotations] = useState(0)

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
    }
  ]

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % electricBikeCategories.length)
    setTotalRotations((prev) => prev + 1)
  }

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + electricBikeCategories.length) % electricBikeCategories.length)
    setTotalRotations((prev) => prev - 1)
  }

  useEffect(() => {
    const interval = setInterval(nextCategory, 5000)
    return () => clearInterval(interval)
  }, [])

  // Calculate actual rotation for infinite effect
  const actualRotation = -(totalRotations * 360) / electricBikeCategories.length

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const { data, errors } = await shopifyAPI.getProducts({
          first: 12,
          query: 'product_type:"Electric Bike"',
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
            <div className="carousel-3d-container">
              <div className="carousel-3d" style={{
                transform: `rotateY(${actualRotation}deg)`
              }}>
                {electricBikeCategories.map((category, index) => {
                  const angle = (360 / electricBikeCategories.length) * index
                  const isActive = index === currentCategory
                  const offset = index - currentCategory
                  const normalizedOffset = offset < 0 ? offset + electricBikeCategories.length : offset
                  
                  return (
                    <div
                      key={category.id}
                      className={`carousel-card-3d ${isActive ? 'active' : ''}`}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${isActive ? '350px' : '300px'}) ${isActive ? 'scale(1.1)' : ''}`,
                        opacity: normalizedOffset === 0 ? 1 : normalizedOffset === 1 || normalizedOffset === electricBikeCategories.length - 1 ? 0.7 : 0.3,
                        pointerEvents: normalizedOffset === 0 ? 'auto' : 'none',
                        zIndex: electricBikeCategories.length - Math.abs(offset)
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
                {electricBikeCategories.map((_, index) => (
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
            <h1><span style={{ color: '#dc2626' }}>{t('electric_bikes.categories_title', 'Pasirinkite savo kelią')}</span></h1>
            <p>{t('electric_bikes.categories_subtitle', 'Atraskite idealų elektrinį dviratį savo poreikiams')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="container">
            <h2>{t('electric_bikes.featured_title', 'Populiariausi modeliai')}</h2>
            {loading && (
              <div style={{ padding: '24px 0' }}>{t('shop.loading', 'Loading products...')}</div>
            )}
            {error && (
              <div style={{ padding: '24px 0' }}>{error}</div>
            )}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Technology Section */}
        <section className="technology-section">
          <div className="container">
            <h2>{t('electric_bikes.technology_title', 'Yamaha technologijos')}</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">🔋</div>
                <h3>{t('electric_bikes.battery_tech', 'Baterijų technologija')}</h3>
                <p>{t('electric_bikes.battery_tech_desc', 'Ilgai veikiančios, saugios ir patikimos Yamaha baterijos')}</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">⚙️</div>
                <h3>{t('electric_bikes.motor_tech', 'Variklių sistema')}</h3>
                <p>{t('electric_bikes.motor_tech_desc', 'Patikimas galingumas ir sklandus pagreitis kiekvienu atveju')}</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">📱</div>
                <h3>{t('electric_bikes.display_tech', 'Valdymo skydelis')}</h3>
                <p>{t('electric_bikes.display_tech_desc', 'Intelektualūs skydeliai su visais reikalingais duomenimis')}</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">🔧</div>
                <h3>{t('electric_bikes.service_tech', 'Servisas ir priežiūra')}</h3>
                <p>{t('electric_bikes.service_tech_desc', 'Profesionalus servisas ir originalios atsarginės dalys')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Test Drive Section */}
        <section className="test-drive-section">
          <div className="container">
            <h2>{t('electric_bikes.test_drive_title', 'Išbandykite dabar')}</h2>
            <p>{t('electric_bikes.test_drive_desc', 'Atvykite ir išbandykite Yamaha elektrinį dviratį')}</p>
            <div className="test-drive-form">
              <input 
                type="text" 
                placeholder={t('electric_bikes.name_placeholder', 'Jūsų vardas')}
                className="form-input"
              />
              <input 
                type="tel" 
                placeholder={t('electric_bikes.phone_placeholder', 'Telefonas')}
                className="form-input"
              />
              <input 
                type="email" 
                placeholder={t('electric_bikes.email_placeholder', 'El. paštas')}
                className="form-input"
              />
              <button className="submit-button">
                {t('electric_bikes.submit_button', 'Registruotis testavimui')}
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2>{t('electric_bikes.contact_title', 'Turite klausimų?')}</h2>
            <p>{t('electric_bikes.contact_desc', 'Mūsų specialistai padės išsirinkti tinkamą modelį')}</p>
            <div className="contact-buttons">
              <button className="contact-button phone">
                📞 +370 5 123 4567
              </button>
              <button className="contact-button email">
                ✉️ info@yamatecha.lt
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ElDviraciai