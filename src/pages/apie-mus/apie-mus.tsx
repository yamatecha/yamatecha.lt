import { useTranslation } from 'react-i18next'
import './apie-mus.css'

const ApieMus = () => {
  const { t } = useTranslation()

  return (
    <div className="apie-mus">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-video-background">
            <img src="/src/assets/hero.png" alt="Yamaha Motorcycle" className="hero-video" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1><span style={{ color: '#dc2626' }}>{t('about_us.title', 'APIE MUS')}</span></h1>
            <p>{t('about_us.subtitle', 'Jau daugiau nei dešimtmetį auginome Yamaha kultūrą Lietuvoje')}</p>
            <button className="cta-button">{t('hero.exploreButton', 'Tyrinėti produktus')}</button>
          </div>
        </section>

        {/* About Content */}
        <section className="about-content">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2>{t('about_us.mission_title', 'Mūsų misija')}</h2>
                <p>{t('about_us.mission_text', 'Mes ne tik parduodame Yamaha techniką – mes auginome bendruomenę, kuriai svarbi kokybė, patikimumas ir išskirtinė patirtis. Kiekvienas Yamaha savininkas tampa mūsų šeimos dalimi.')}</p>
                
                <h3>{t('about_us.values_title', 'Mūsų vertybės')}</h3>
                <ul className="values-list">
                  <li>{t('about_us.value1', 'Inovacijos ir technologijų lyderystė')}</li>
                  <li>{t('about_us.value2', 'Nepriekštinga kokybė ir patikimumas')}</li>
                  <li>{t('about_us.value3', 'Klientų lojalumas ir pasitikėjimas')}</li>
                  <li>{t('about_us.value4', 'Aplinka apsauga ir tvarumas')}</li>
                </ul>
              </div>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">{t('about_us.years_experience', 'Metų patirtis')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">{t('about_us.satisfied_customers', 'Patenkintų klientų')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{t('about_us.models', 'Modelių asortimentas')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="navigation-links">
          <div className="container">
            <h2>{t('about_us.explore_more', 'Sužinokite daugiau')}</h2>
            <div className="links-grid">
              <a href="/mūsų-istorija" className="link-card">
                <h3>{t('about_us.our_history', 'Mūsų istorija')}</h3>
                <p>{t('about_us.history_desc', 'Išsami kelionė nuo pradžios iki šių dienų')}</p>
              </a>
              <a href="/karjera" className="link-card">
                <h3>{t('about_us.working_at_yamaha', 'Darbas Yamaha')}</h3>
                <p>{t('about_us.career_desc', 'Karjeros galimybės mūsų komandoje')}</p>
              </a>
              <a href="/akademija" className="link-card">
                <h3>{t('about_us.academy', 'Yamaha Motor Akademija')}</h3>
                <p>{t('about_us.academy_desc', 'Mokymai ir kvalifikacijos kėlimas')}</p>
              </a>
              <a href="/tapti-prekybininku" className="link-card">
                <h3>{t('about_us.become_dealer', 'Tapti prekybininku')}</h3>
                <p>{t('about_us.dealer_desc', 'Partnerystės galimybės')}</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ApieMus