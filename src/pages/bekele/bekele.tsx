import { useTranslation } from 'react-i18next'
import './bekele.css'

const Bekele = () => {
  const { t } = useTranslation()

  return (
    <div className="bekele">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/src/assets/hero-offroad.png" alt="Yamaha Off-Road Motorcycles" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('offroad.title', 'BEKELĖ')}</h1>
            <p className="hero-subtitle">{t('offroad.subtitle', 'Nugalėkite bet kokią trasą su Yamaha bekelės motociklais')}</p>
          </div>
        </section>

        {/* Off-Road Categories */}
        <section className="offroad-categories">
          <div className="container">
            <h2>{t('offroad.categories_title', 'Pasirinkite savo nuotykį')}</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/enduro.jpg" alt="Enduro Motorcycles" />
                </div>
                <div className="category-content">
                  <h3>{t('offroad.enduro_title', 'Enduro')}</h3>
                  <p>{t('offroad.enduro_desc', 'Universalūs motociklai miestui ir gamtai')}</p>
                  <a href="/motociklai/enduro" className="category-link">
                    {t('offroad.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/motocross.jpg" alt="Motocross Motorcycles" />
                </div>
                <div className="category-content">
                  <h3>{t('offroad.motocross_title', 'Motokrosas')}</h3>
                  <p>{t('offroad.motocross_desc', 'Lenktyniniai motociklai trasoms ir bekelei')}</p>
                  <a href="/motociklai/motocross" className="category-link">
                    {t('offroad.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/adventure.jpg" alt="Adventure Motorcycles" />
                </div>
                <div className="category-content">
                  <h3>{t('offroad.adventure_title', 'Nuotykiai')}</h3>
                  <p>{t('offroad.adventure_desc', 'Tolimos kelionės ir nepažymėti keliai')}</p>
                  <a href="/motociklai/adventure" className="category-link">
                    {t('offroad.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/atv.jpg" alt="ATV Vehicles" />
                </div>
                <div className="category-content">
                  <h3>{t('offroad.atv_title', 'Keturračiai')}</h3>
                  <p>{t('offroad.atv_desc', 'Galia ir manevringumas sunkiai vietovei')}</p>
                  <a href="/keturaciai" className="category-link">
                    {t('offroad.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="container">
            <h2>{t('offroad.featured_title', 'Populiarūs modeliai')}</h2>
            <div className="models-grid">
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/models/wr450f.jpg" alt="WR450F" />
                </div>
                <div className="model-info">
                  <h3>WR450F</h3>
                  <p>{t('offroad.wr450f_desc', 'Legenda tarp enduro motociklų')}</p>
                  <div className="model-price">
                    <span className="price">€9,999</span>
                  </div>
                  <button className="model-btn">{t('offroad.learn_more', 'Sužinoti daugiau')}</button>
                </div>
              </div>
              
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/models/yz250f.jpg" alt="YZ250F" />
                </div>
                <div className="model-info">
                  <h3>YZ250F</h3>
                  <p>{t('offroad.yz250f_desc', 'Motokroso čempionas')}</p>
                  <div className="model-price">
                    <span className="price">€8,499</span>
                  </div>
                  <button className="model-btn">{t('offroad.learn_more', 'Sužinoti daugiau')}</button>
                </div>
              </div>
              
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/models/tenere-700.jpg" alt="Ténéré 700" />
                </div>
                <div className="model-info">
                  <h3>Ténéré 700</h3>
                  <p>{t('offroad.tenere700_desc', 'Nuotykių motociklas visoms sąlygoms')}</p>
                  <div className="model-price">
                    <span className="price">€11,299</span>
                  </div>
                  <button className="model-btn">{t('offroad.learn_more', 'Sužinoti daugiau')}</button>
                </div>
              </div>
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