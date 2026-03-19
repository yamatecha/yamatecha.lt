import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../../components/shop/ProductCard'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './vanduo.css'

const Vanduo = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

        {/* Watercraft Categories */}
        <section className="watercraft-categories">
          <div className="container">
            <h2 className="play-bold">{t('watercraft.categories_title', 'Pasirinkite savo vandens transportą')}</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/watercraft/jet-ski.jpg" alt="Jet Ski" />
                </div>
                <div className="category-content">
                  <h3 className="play-bold">{t('watercraft.jet_ski_title', 'Vandens motociklai')}</h3>
                  <p className="play-regular">{t('watercraft.jet_ski_desc', 'Greičiausi ir manevringiausi vandens motociklai')}</p>
                  <a href="/vandens-transportas/vandens-motociklai" className="category-link">
                    {t('watercraft.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/watercraft/boat.jpg" alt="Boat" />
                </div>
                <div className="category-content">
                  <h3 className="play-bold">{t('watercraft.boats_title', 'Valtys')}</h3>
                  <p className="play-regular">{t('watercraft.boats_desc', 'Patikimos valtys poilsiui ir žvejybai')}</p>
                  <a href="/vandens-transportas/valtys" className="category-link">
                    {t('watercraft.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/watercraft/outboard.jpg" alt="Outboard Motors" />
                </div>
                <div className="category-content">
                  <h3 className="play-bold">{t('watercraft.outboard_title', 'Išoriniai varikliai')}</h3>
                  <p className="play-regular">{t('watercraft.outboard_desc', 'Galingi ir ekonomiški išoriniai varikliai')}</p>
                  <a href="/vandens-transportas/isoriniai-varikliai" className="category-link">
                    {t('watercraft.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="container">
            <h2>{t('watercraft.featured_title', 'Populiarūs modeliai')}</h2>
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