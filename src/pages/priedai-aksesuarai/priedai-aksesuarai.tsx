import { useTranslation } from 'react-i18next'
import './priedai-aksesuarai.css'

const PriedaiAksesuarai = () => {
  const { t } = useTranslation()

  return (
    <div className="priedai-aksesuarai">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/src/assets/hero-accessories.jpg" alt="Yamaha Accessories" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('accessories.title', 'PRIEDAI IR AKSESUARAI')}</h1>
            <p className="hero-subtitle">{t('accessories.subtitle', 'Papildykite savo Yamaha motociklą aukštos kokybės priedais ir aksesuarais')}</p>
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
        <section className="featured-products">
          <div className="container">
            <h2>{t('accessories.featured_title', 'Populiarūs produktai')}</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/products/yamaha-helmet.jpg" alt="Yamaha Helmet" />
                </div>
                <div className="product-info">
                  <h3>Yamaha YZF-R1 Šalmas</h3>
                  <p>{t('accessories.helmet_desc', 'Profesionalus lenktyninis šalmas su Yamaha dizainu')}</p>
                  <div className="product-price">
                    <span className="price">€299</span>
                  </div>
                  <button className="product-btn">{t('accessories.add_to_cart', 'Į krepšelį')}</button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/products/exhaust-system.jpg" alt="Exhaust System" />
                </div>
                <div className="product-info">
                  <h3>Yamaha Akrapovič Išmetimo Sistema</h3>
                  <p>{t('accessories.exhaust_desc', 'Sportiška išmetimo sistema padidintam galingumui')}</p>
                  <div className="product-price">
                    <span className="price">€1,299</span>
                  </div>
                  <button className="product-btn">{t('accessories.add_to_cart', 'Į krepšelį')}</button>
                </div>
              </div>
              
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/products/side-bags.jpg" alt="Side Bags" />
                </div>
                <div className="product-info">
                  <h3>Yamaha Šoniniai Krepšiai</h3>
                  <p>{t('accessories.bags_desc', 'Tvirti ir vandeniui atspari šoniniai krepšiai')}</p>
                  <div className="product-price">
                    <span className="price">€449</span>
                  </div>
                  <button className="product-btn">{t('accessories.add_to_cart', 'Į krepšelį')}</button>
                </div>
              </div>
            </div>
          </div>
        </section>

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