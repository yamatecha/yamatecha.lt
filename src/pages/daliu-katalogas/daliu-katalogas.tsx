import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductGrid } from '../../components/layout/ProductGrid'
import { shopifyAPI, type Product } from '../../lib/shopify'
import './daliu-katalogas.css'

const DaliuKatalogas = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        let query = 'product_type:Parts'
        if (searchTerm) {
          query += ` AND title:*${searchTerm}*`
        }

        const { data, errors } = await shopifyAPI.getProducts({
          first: 12,
          query,
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
  }, [searchTerm])

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
            <h1><span style={{ color: '#dc2626' }}>{t('parts_catalog.title', 'DALIŲ KATALOGAS')}</span></h1>
            <p>{t('parts_catalog.subtitle', 'Originalūs Yamaha dalys jūsų technikai')}</p>
            <button className="cta-button">{t('hero.exploreButton', 'Tyrinėti produktus')}</button>
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="search-button" onClick={() => setSearchTerm(searchInput)}>
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
        <ProductGrid 
          products={products}
          title={t('parts_catalog.featured_title', 'Populiarios dalys')}
          loading={loading}
          error={error}
        />

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