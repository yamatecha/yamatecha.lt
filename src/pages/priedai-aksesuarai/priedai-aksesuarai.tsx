import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductGrid } from '../../components/layout/ProductGrid'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './priedai-aksesuarai.css'

const PriedaiAksesuarai = () => {
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
          query: 'product_type:Accessories',
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
    <div className="priedai-aksesuarai">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-video-background">
            <img src="/src/assets/hero-accessories.jpg" alt="Yamaha Accessories" className="hero-video" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('accessories.title', 'PRIEDAI IR AKSESUARAI')}</span></h1>
            <p>{t('accessories.subtitle', 'Papildykite savo Yamaha motociklą aukštos kokybės priedais ir aksesuarais')}</p>
            <button className="cta-button">{t('hero.exploreButton', 'Tyrinėti produktus')}</button>
          </div>
        </section>

        {/* Accessories Categories */}
        <section className="accessories-categories">
          <div className="container">
            <h2>{t('accessories.categories_title', 'Pasirinkite kategoriją')}</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/accessories/protective-gear.jpg" alt="Protective Gear" />
                </div>
                <div className="category-content">
                  <h3>{t('accessories.protective_title', 'Apsaugos įranga')}</h3>
                  <p>{t('accessories.protective_desc', 'Šalmai, šarvai ir apsauginiai')}</p>
                  <a href="/priedai/apsaugos-iranga" className="category-link">
                    {t('accessories.view_products', 'Žiūrėti produktus')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/accessories/clothing.jpg" alt="Clothing" />
                </div>
                <div className="category-content">
                  <h3>{t('accessories.clothing_title', 'Apranga')}</h3>
                  <p>{t('accessories.clothing_desc', 'Kombinezonai, striukės, kelnės')}</p>
                  <a href="/priedai/apranga" className="category-link">
                    {t('accessories.view_products', 'Žiūrėti produktus')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/accessories/parts.jpg" alt="Performance Parts" />
                </div>
                <div className="category-content">
                  <h3>{t('accessories.performance_title', 'Galingumo detalės')}</h3>
                  <p>{t('accessories.performance_desc', 'Išmetimo sistemos, filtrai, padidinimai')}</p>
                  <a href="/priedai/galingumo-detales" className="category-link">
                    {t('accessories.view_products', 'Žiūrėti produktus')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/accessories/luggage.jpg" alt="Luggage" />
                </div>
                <div className="category-content">
                  <h3>{t('accessories.luggage_title', 'Bagažo sistemos')}</h3>
                  <p>{t('accessories.luggage_desc', 'Krepšiai, dėžės, lagaminai')}</p>
                  <a href="/priedai/bagozo-sistemos" className="category-link">
                    {t('accessories.view_products', 'Žiūrėti produktus')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <ProductGrid 
          products={products}
          title={t('accessories.featured_title', 'Populiarūs produktai')}
          loading={loading}
          error={error}
        />

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <h2>{t('accessories.benefits_title', 'Kodėl rinktis Yamaha originalius priedus?')}</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src="/src/assets/icons/quality.svg" alt="Quality" />
                </div>
                <h3>{t('accessories.benefit1_title', 'Aukšta kokybė')}</h3>
                <p>{t('accessories.benefit1_desc', 'Tik originali Yamaha kokybė ir patikimumas')}</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src="/src/assets/icons/fit.svg" alt="Perfect Fit" />
                </div>
                <h3>{t('accessories.benefit2_title', 'Tobulas tinkamumas')}</h3>
                <p>{t('accessories.benefit2_desc', 'Priedai skirti specifiškai jūsų modeliui')}</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src="/src/assets/icons/warranty.svg" alt="Warranty" />
                </div>
                <h3>{t('accessories.benefit3_title', 'Garantija')}</h3>
                <p>{t('accessories.benefit3_desc', 'Oficiali Yamaha garantija visiems priedams')}</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src="/src/assets/icons/performance.svg" alt="Performance" />
                </div>
                <h3>{t('accessories.benefit4_title', 'Optimalus veikimas')}</h3>
                <p>{t('accessories.benefit4_desc', 'Priedai pagerina motociklo charakteristikas')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>{t('accessories.cta_title', 'Suraskite savo idealų priedą')}</h2>
              <p>{t('accessories.cta_desc', 'Apsilankykite mūsų salonuose ir profesionalai padės išsirinkti tinkamus priedus')}</p>
              <div className="cta-buttons">
                <button className="primary-btn">{t('accessories.view_catalog', 'Žiūrėti katalogą')}</button>
                <button className="secondary-btn">{t('accessories.contact_us', 'Susisiekti')}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PriedaiAksesuarai