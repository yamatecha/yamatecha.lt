import { useTranslation } from 'react-i18next'
import './servisas.css'

const Servisas = () => {
  const { t } = useTranslation()

  return (
    <div className="servisas">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/src/assets/hero.png" alt="Yamaha Service" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('service.title', 'SERVISAS')}</h1>
            <p className="hero-subtitle">{t('service.subtitle', 'Profesionalus Yamaha technikos servisas ir priežiūra')}</p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services-overview">
          <div className="container">
            <h2>{t('service.our_services', 'Mūsų paslaugos')}</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src="/src/assets/icons/wrench.svg" alt="Maintenance" />
                </div>
                <h3>{t('service.maintenance', 'Techninė priežiūra')}</h3>
                <p>{t('service.maintenance_desc', 'Reguliarus technikos patikrinimas ir priežiūra užtikrina ilgą ir patikimą eksploataciją')}</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="/src/assets/icons/repair.svg" alt="Repair" />
                </div>
                <h3>{t('service.repair', 'Remontas')}</h3>
                <p>{t('service.repair_desc', 'Greitas ir kokybiškas Yamaha technikos remontas naudojant originalias dalis')}</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="/src/assets/icons/diagnostics.svg" alt="Diagnostics" />
                </div>
                <h3>{t('service.diagnostics', 'Diagnostika')}</h3>
                <p>{t('service.diagnostics_desc', 'Modernia įranga atliekama kompiuterinė diagnostika ir gedų paieška')}</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <img src="/src/assets/icons/parts.svg" alt="Parts" />
                </div>
                <h3>{t('service.parts', 'Originalios dalys')}</h3>
                <p>{t('service.parts_desc', 'Tik originalios Yamaha dalys ir aksesuarai užtikriną kokybę')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="service-process">
          <div className="container">
            <h2>{t('service.process_title', 'Kaip veikiame')}</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>{t('service.step1_title', 'Užsakymas')}</h3>
                <p>{t('service.step1_desc', 'Susisiekite su mumis telefonu arba užpildykite užklausos formą')}</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>{t('service.step2_title', 'Diagnostika')}</h3>
                <p>{t('service.step2_desc', 'Atliksime nemokamą techninės būklės įvertinimą')}</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>{t('service.step3_title', 'Įvertinimas')}</h3>
                <p>{t('service.step3_desc', 'Pateiksime išsamų darbų ir kainos įvertinimą')}</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>{t('service.step4_title', 'Vykdymas')}</h3>
                <p>{t('service.step4_desc', 'Atliksime visus būtinus darbus kokybiškai ir laiku')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="booking-section">
          <div className="container">
            <div className="booking-content">
              <div className="booking-text">
                <h2>{t('service.booking_title', 'Užsiregistruokite serviso vizitui')}</h2>
                <p>{t('service.booking_desc', 'Užpildykite formą ir mes su jumis susisieksime per 24 valandas')}</p>
              </div>
              <div className="booking-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">{t('service.form_name', 'Vardas')}</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t('service.form_phone', 'Telefonas')}</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('service.form_email', 'El. paštas')}</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicle">{t('service.form_vehicle', 'Transporto rūšis')}</label>
                    <select id="vehicle" name="vehicle" required>
                      <option value="">{t('service.form_select', 'Pasirinkite')}</option>
                      <option value="motorcycle">{t('service.form_motorcycle', 'Motociklas')}</option>
                      <option value="atv">{t('service.form_atv', 'Keturračis')}</option>
                      <option value="snowmobile">{t('service.form_snowmobile', 'Sniegputis')}</option>
                      <option value="boat">{t('service.form_boat', 'Valtis')}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">{t('service.form_description', 'Aprašymas')}</label>
                    <textarea id="description" name="description" rows={4}></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    {t('service.form_submit', 'Siųsti užklausą')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="contact-info">
          <div className="container">
            <h2>{t('service.contact_title', 'Kontaktai')}</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <h3>{t('service.phone', 'Telefonas')}</h3>
                <p>+370 123 45678</p>
              </div>
              <div className="contact-item">
                <h3>{t('service.email', 'El. paštas')}</h3>
                <p>servisas@yamatecha.lt</p>
              </div>
              <div className="contact-item">
                <h3>{t('service.address', 'Adresas')}</h3>
                <p>Vilniaus g. 123, Vilnius</p>
              </div>
              <div className="contact-item">
                <h3>{t('service.hours', 'Darbo laikas')}</h3>
                <p>I-V 8:00-18:00<br />VI 9:00-14:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Servisas