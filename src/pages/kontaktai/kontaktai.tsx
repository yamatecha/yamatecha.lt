import { useTranslation } from 'react-i18next'
import './kontaktai.css'

const Kontaktai = () => {
  const { t } = useTranslation()

  return (
    <div className="kontaktai">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/src/assets/hero.png" alt="Yamaha Motorcycle" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('contacts.title', 'KONTAKTAI')}</h1>
            <p className="hero-subtitle">{t('contacts.subtitle', 'Susisiekite su mumis ir atraskite Yamaha pasaulį')}</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3>{t('contacts.address', 'Adresas')}</h3>
                <p>{t('contacts.address_text', 'Ozo g. 25, Vilnius, LT-07150')}</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3>{t('contacts.phone', 'Telefonas')}</h3>
                <p><a href="tel:+37068622211">+370 686 22211</a></p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>{t('contacts.email', 'El. paštas')}</h3>
                <p><a href="mailto:yamaha@yamatecha.lt">yamaha@yamatecha.lt</a></p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3>{t('contacts.working_hours', 'Darbo laikas')}</h3>
                <p>{t('contacts.working_hours_text', 'I-V: 9:00 - 18:00<br>VI-VII: 10:00 - 15:00')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="container">
            <div className="form-container">
              <h2>{t('contacts.form_title', 'Parašykite mums')}</h2>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contacts.form_name', 'Vardas')}</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('contacts.form_email', 'El. paštas')}</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('contacts.form_phone', 'Telefonas')}</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t('contacts.form_subject', 'Tema')}</label>
                  <select id="subject" name="subject">
                    <option value="">{t('contacts.select_subject', 'Pasirinkite temą')}</option>
                    <option value="sales">{t('contacts.subject_sales', 'Pardavimai')}</option>
                    <option value="service">{t('contacts.subject_service', 'Servisas')}</option>
                    <option value="parts">{t('contacts.subject_parts', 'Dalys')}</option>
                    <option value="other">{t('contacts.subject_other', 'Kita')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('contacts.form_message', 'Žinutė')}</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  {t('contacts.form_submit', 'Siųsti žinutę')}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2>{t('contacts.map_title', 'Raskite mus žemėlapyje')}</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.123456789!2d25.123456789!3d54.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA3JzI0LjAiTiAyNcKwMDcnMjcuOCJF!5e0!3m2!1sen!2slt!4v1234567890"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Yamatecha Location"
              />
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="social-section">
          <div className="container">
            <h2>{t('contacts.follow_us', 'Sekite mus')}</h2>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Kontaktai