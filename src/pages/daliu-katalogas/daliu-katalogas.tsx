import { useTranslation } from 'react-i18next'
import './daliu-katalogas.css'

const DaliuKatalogas = () => {
  const { t } = useTranslation()

  return (
    <div className="daliu-katalogas">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img src="/src/assets/hero.png" alt="Yamaha Parts Catalog" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{t('parts_catalog.title', 'DALIŲ KATALOGAS')}</h1>
            <p className="hero-subtitle">{t('parts_catalog.subtitle', 'Originalūs Yamaha dalys jūsų technikai')}</p>
          </div>
        </section>

        {/* Search Section */}
        <section className="search-section">
          <div className="container">
            <h2>{t('parts_catalog.search_title', 'Raskite reikiamą dalį')}</h2>
            <div className="search-container">
              <input 
                type="text" 
                placeholder={t('parts_catalog.search_placeholder', 'Įveskite dalies kodą arba pavadinimą')}
                className="search-input"
              />
              <button className="search-button">
                {t('parts_catalog.search_button', 'Ieškoti')}
              </button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="container">
            <h2>{t('parts_catalog.categories_title', 'Kategorijos')}</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon">🔧</div>
                <h3>{t('parts_catalog.engine', 'Variklis')}</h3>
                <p>{t('parts_catalog.engine_parts', 'Variklio dalys ir komponentai')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">⚙️</div>
                <h3>{t('parts_catalog.transmission', 'Pavarų dėžė')}</h3>
                <p>{t('parts_catalog.transmission_parts', 'Pavarų dėžės dalys')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🛞</div>
                <h3>{t('parts_catalog.brakes', 'Stabdžiai')}</h3>
                <p>{t('parts_catalog.brake_parts', 'Stabdžių sistemos dalys')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">💡</div>
                <h3>{t('parts_catalog.electrical', 'Elektrika')}</h3>
                <p>{t('parts_catalog.electrical_parts', 'Elektrinės sistemos komponentai')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🎨</div>
                <h3>{t('parts_catalog.body', 'Kėbulas')}</h3>
                <p>{t('parts_catalog.body_parts', 'Kėbulo ir apdailos dalys')}</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🔋</div>
                <h3>{t('parts_catalog.accessories', 'Priedai')}</h3>
                <p>{t('parts_catalog.accessory_parts', 'Aksesuarai ir papildomos dalys')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <div className="container">
            <h2>{t('parts_catalog.featured_title', 'Populiarios dalys')}</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/part-placeholder.jpg" alt="Oil Filter" />
                </div>
                <div className="product-info">
                  <h3>{t('parts_catalog.oil_filter', 'Alyvos filtras')}</h3>
                  <p className="part-number">5GH-13440-00</p>
                  <p className="price">€15.99</p>
                  <button className="add-to-cart">{t('parts_catalog.add_to_cart', 'Į krepšelį')}</button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/part-placeholder.jpg" alt="Air Filter" />
                </div>
                <div className="product-info">
                  <h3>{t('parts_catalog.air_filter', 'Oro filtras')}</h3>
                  <p className="part-number">4GV-14440-00</p>
                  <p className="price">€22.50</p>
                  <button className="add-to-cart">{t('parts_catalog.add_to_cart', 'Į krepšelį')}</button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/part-placeholder.jpg" alt="Brake Pads" />
                </div>
                <div className="product-info">
                  <h3>{t('parts_catalog.brake_pads', 'Stabdžių kaladėlės')}</h3>
                  <p className="part-number">2VY-2580U-00</p>
                  <p className="price">€35.99</p>
                  <button className="add-to-cart">{t('parts_catalog.add_to_cart', 'Į krepšelį')}</button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/part-placeholder.jpg" alt="Spark Plug" />
                </div>
                <div className="product-info">
                  <h3>{t('parts_catalog.spark_plug', 'Žvakė')}</h3>
                  <p className="part-number">LMAR8E-9</p>
                  <p className="price">€8.99</p>
                  <button className="add-to-cart">{t('parts_catalog.add_to_cart', 'Į krepšelį')}</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Information */}
        <section className="order-info">
          <div className="container">
            <h2>{t('parts_catalog.order_info_title', 'Kaip užsisakyti')}</h2>
            <div className="order-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>{t('parts_catalog.step1_title', 'Suraskite dalį')}</h3>
                <p>{t('parts_catalog.step1_desc', 'Naudokite paiešką arba naršykite kategorijose')}</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>{t('parts_catalog.step2_title', 'Patvirtinkite kodus')}</h3>
                <p>{t('parts_catalog.step2_desc', 'Įsitikinkite, kad dalies kodas atitinka jūsų techniką')}</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>{t('parts_catalog.step3_title', 'Užsisakykite')}</h3>
                <p>{t('parts_catalog.step3_desc', 'Atlikite užsakymą internetu arba susisiekite su mumis')}</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>{t('parts_catalog.step4_title', 'Gaukite prekę')}</h3>
                <p>{t('parts_catalog.step4_desc', 'Pristatysime į jūsų nurodytą adresą arba atsiimkite patys')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2>{t('parts_catalog.contact_title', 'Reikia pagalbos?')}</h2>
            <p>{t('parts_catalog.contact_desc', 'Mūsų specialistai padės surasti tinkamą dalį')}</p>
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

export default DaliuKatalogas