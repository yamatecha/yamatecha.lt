import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../../../components/shop/ProductCard'
import Carousel3D from '../../../components/Carousel3D/Carousel3D'
import { shopifyAPI, type Product } from '../../../lib/shopify'
import './vanduo-specific.css'
import '../../global-page-styles/page-styles.css'

const Vanduo = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    },
    {
      id: 'sport-boats',
      title: t('watercraft.sport_boats_title', 'Sportinės valtys'),
      subtitle: t('watercraft.sport_boats_desc', 'Greitos ir jėguigos sportinės valtys'),
      image: '/src/assets/watercraft/sport-boat.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti modelius'),
      link: '/vandens-transportas/sportines-valtys'
    },
    {
      id: 'fishing-boats',
      title: t('watercraft.fishing_boats_title', 'Žvejybos valtys'),
      subtitle: t('watercraft.fishing_boats_desc', 'Specializuotos valtys žvejybai'),
      image: '/src/assets/watercraft/fishing-boat.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti modelius'),
      link: '/vandens-transportas/zvejybos-valtys'
    },
    {
      id: 'pontoon',
      title: t('watercraft.pontoon_title', 'Pontojonai'),
      subtitle: t('watercraft.pontoon_desc', 'Erdūs ir patogūs pontojonai poilsiui'),
      image: '/src/assets/watercraft/pontoon.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti modelius'),
      link: '/vandens-transportas/pontojonai'
    },
    {
      id: 'kayaks',
      title: t('watercraft.kayaks_title', 'Kajakai'),
      subtitle: t('watercraft.kayaks_desc', 'Lengvi ir manevringi kajakai'),
      image: '/src/assets/watercraft/kayak.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti modelius'),
      link: '/vandens-transportas/kajakai'
    },
    {
      id: 'accessories',
      title: t('watercraft.accessories_title', 'Priedai'),
      subtitle: t('watercraft.accessories_desc', 'Visi reikalingi priedai vandens sportui'),
      image: '/src/assets/watercraft/accessories.jpg',
      buttonText: t('watercraft.view_models', 'Žiūrėti priedus'),
      link: '/vandens-transportas/priedai'
    }
  ]

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
        <section className="hero-section main-hero">
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
            <h1 className="hero-title"><span style={{ color: '#dc2626' }}>{t('watercraft.title', 'VANDUO')}</span></h1>
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
            <div className="carousel-container-new">
              <Carousel3D
                items={watercraftCategories}
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
                className="watercraft-carousel"
              />
            </div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('watercraft.categories_title', 'Pasirinkite savo vandens transportą')}</span></h1>
            <p>{t('watercraft.categories_subtitle', 'Atraskite idealų vandens transportą savo nuotykiams')}</p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="hero-video-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-top">
            <h1><span style={{ color: '#dc2626' }}>{t('watercraft.featured_title', 'Populiarūs modeliai')}</span></h1>
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
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  )
}

export default Vanduo