import { useTranslation } from 'react-i18next'
import './kelias.css'

const Kelias = () => {
  const { t } = useTranslation()

  return (
    <div className="kelias">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/src/assets/hero.png" alt="Yamaha Road Motorcycles" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('road.title', 'KELIAS')}</h1>
            <p className="hero-subtitle">{t('road.subtitle', 'Keliaukite stiliai su Yamaha keliaujančiais motociklais')}</p>
          </div>
        </section>

        {/* Road Categories */}
        <section className="road-categories">
          <div className="container">
            <h2>{t('road.categories_title', 'Pasirinkite savo kelią')}</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/sport.jpg" alt="Sport Motorcycles" />
                </div>
                <div className="category-content">
                  <h3>{t('road.sport_title', 'Sportiniai')}</h3>
                  <p>{t('road.sport_desc', 'Maksimali galia ir greitis lenktynių trasoms')}</p>
                  <a href="/motociklai/sport" className="category-link">
                    {t('road.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/touring.jpg" alt="Touring Motorcycles" />
                </div>
                <div className="category-content">
                  <h3>{t('road.touring_title', 'Turistiniai')}</h3>
                  <p>{t('road.touring_desc', 'Komfortas ir patikimumas ilgiems kelionėms')}</p>
                  <a href="/motociklai/touring" className="category-link">
                    {t('road.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/naked.jpg" alt="Naked Motorcycles" />
                </div>
                <div className="category-content">
                  <h3>{t('road.naked_title', 'Naked')}</h3>
                  <p>{t('road.naked_desc', 'Laisvė ir kontrolė kasdieniam važiavimui')}</p>
                  <a href="/motociklai/naked" className="category-link">
                    {t('road.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
              
              <div className="category-card">
                <div className="category-image">
                  <img src="/src/assets/cruiser.jpg" alt="Cruiser Motorcycles" />
                </div>
                <div className="category-content">
                  <h3>{t('road.cruiser_title', 'Kruizeriai')}</h3>
                  <p>{t('road.cruiser_desc', 'Klasikinis stilius ir atsipalaidavimas kelyje')}</p>
                  <a href="/motociklai/cruiser" className="category-link">
                    {t('road.view_models', 'Žiūrėti modelius')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="container">
            <h2>{t('road.featured_title', 'Populiarūs modeliai')}</h2>
            <div className="models-grid">
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/models/yzf-r1.jpg" alt="YZF-R1" />
                </div>
                <div className="model-info">
                  <h3>YZF-R1</h3>
                  <p>{t('road.r1_desc', 'Lenktyninis motociklas su MotoGP technologija')}</p>
                  <div className="model-price">
                    <span className="price">€25,999</span>
                  </div>
                  <button className="model-btn">{t('road.learn_more', 'Sužinoti daugiau')}</button>
                </div>
              </div>
              
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/models/mt-07.jpg" alt="MT-07" />
                </div>
                <div className="model-info">
                  <h3>MT-07</h3>
                  <p>{t('road.mt07_desc', 'Universalus naked motociklas kasdieniam naudojimui')}</p>
                  <div className="model-price">
                    <span className="price">€7,499</span>
                  </div>
                  <button className="model-btn">{t('road.learn_more', 'Sužinoti daugiau')}</button>
                </div>
              </div>
              
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/models/tracer-9.jpg" alt="Tracer 9" />
                </div>
                <div className="model-info">
                  <h3>Tracer 9</h3>
                  <p>{t('road.tracer9_desc', 'Sportinis turistinis motociklas visoms sąlygoms')}</p>
                  <div className="model-price">
                    <span className="price">€12,999</span>
                  </div>
                  <button className="model-btn">{t('road.learn_more', 'Sužinoti daugiau')}</button>
                </div>
              </div>
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