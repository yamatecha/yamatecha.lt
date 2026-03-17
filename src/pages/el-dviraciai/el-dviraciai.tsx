import { useTranslation } from 'react-i18next'
import './el-dviraciai.css'

const ElDviraciai = () => {
  const { t } = useTranslation()

  return (
    <div className="el-dviraciai">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/src/assets/hero.png" alt="Yamaha Electric Bikes" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('electric_bikes.title', 'ELEKTRINIAI DVIRAČIAI')}</h1>
            <p className="hero-subtitle">{t('electric_bikes.subtitle', 'Inovatyvūs Yamaha elektriniai dviračiai jūsų judrumui')}</p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="container">
            <h2>{t('electric_bikes.categories_title', 'Pasirinkite savo kelią')}</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon">🏙️</div>
                <h3>{t('electric_bikes.urban', 'Miesto')}</h3>
                <p>{t('electric_bikes.urban_desc', 'Tobuli miesto judrumui ir kasdienėms kelionėms')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🏔️</div>
                <h3>{t('electric_bikes.mountain', 'Kalnų')}</h3>
                <p>{t('electric_bikes.mountain_desc', 'Galia ir kontrolė bekelės maršrutams')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🚴</div>
                <h3>{t('electric_bikes.trekking', 'Trekingo')}</h3>
                <p>{t('electric_bikes.trekking_desc', 'Universalūs dviračiai ilgoms kelionėms')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">⚡</div>
                <h3>{t('electric_bikes.performance', 'Sportiniai')}</h3>
                <p>{t('electric_bikes.performance_desc', 'Maksimali galima jėga ir greitis')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="featured-models">
          <div className="container">
            <h2>{t('electric_bikes.featured_title', 'Populiariausi modeliai')}</h2>
            <div className="models-grid">
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/bike-placeholder.jpg" alt="Yamaha CrossCore RC" />
                </div>
                <div className="model-info">
                  <h3>Yamaha CrossCore RC</h3>
                  <p className="model-type">{t('electric_bikes.urban', 'Miesto')}</p>
                  <p className="price">€2,499</p>
                  <ul className="features">
                    <li>{t('electric_bikes.range', 'Veikimo nuotolis')}: 120km</li>
                    <li>{t('electric_bikes.motor', 'Variklis')}: PWseries3</li>
                    <li>{t('electric_bikes.battery', 'Baterija')}: 500Wh</li>
                  </ul>
                  <button className="view-details">{t('electric_bikes.view_details', 'Plačiau')}</button>
                </div>
              </div>
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/bike-placeholder.jpg" alt="Yamaha YDX-Moro" />
                </div>
                <div className="model-info">
                  <h3>Yamaha YDX-Moro</h3>
                  <p className="model-type">{t('electric_bikes.mountain', 'Kalnų')}</p>
                  <p className="price">€3,799</p>
                  <ul className="features">
                    <li>{t('electric_bikes.range', 'Veikimo nuotolis')}: 150km</li>
                    <li>{t('electric_bikes.motor', 'Variklis')}: PW-X3</li>
                    <li>{t('electric_bikes.battery', 'Baterija')}: 600Wh</li>
                  </ul>
                  <button className="view-details">{t('electric_bikes.view_details', 'Plačiau')}</button>
                </div>
              </div>
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/bike-placeholder.jpg" alt="Yamaha CrossConnect" />
                </div>
                <div className="model-info">
                  <h3>Yamaha CrossConnect</h3>
                  <p className="model-type">{t('electric_bikes.trekking', 'Trekingo')}</p>
                  <p className="price">€2,899</p>
                  <ul className="features">
                    <li>{t('electric_bikes.range', 'Veikimo nuotolis')}: 140km</li>
                    <li>{t('electric_bikes.motor', 'Variklis')}: PWseries3</li>
                    <li>{t('electric_bikes.battery', 'Baterija')}: 500Wh</li>
                  </ul>
                  <button className="view-details">{t('electric_bikes.view_details', 'Plačiau')}</button>
                </div>
              </div>
              <div className="model-card">
                <div className="model-image">
                  <img src="/src/assets/bike-placeholder.jpg" alt="Yamaha YDX-Toro" />
                </div>
                <div className="model-info">
                  <h3>Yamaha YDX-Toro</h3>
                  <p className="model-type">{t('electric_bikes.mountain', 'Kalnų')}</p>
                  <p className="price">€4,299</p>
                  <ul className="features">
                    <li>{t('electric_bikes.range', 'Veikimo nuotolis')}: 160km</li>
                    <li>{t('electric_bikes.motor', 'Variklis')}: PW-X3</li>
                    <li>{t('electric_bikes.battery', 'Baterija')}: 800Wh</li>
                  </ul>
                  <button className="view-details">{t('electric_bikes.view_details', 'Plačiau')}</button>
                </div>
              </div>
            </div>
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