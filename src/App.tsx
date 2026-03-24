import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.tsx'
import { HeroSectionTailwind } from './components/layout/HeroSection-Tailwind'
import ExploreYamaha from './components/layout/ExploreYamaha'
import Footer from './components/footer'
import ScrollToTop from './components/ScrollToTop'
import ApieMus from './pages/apie-mus/apie-mus'
import Servisas from './pages/servisas/servisas'
import DaliuKatalogas from './pages/daliu-katalogas/daliu-katalogas'
import Kontaktai from './pages/kontaktai/kontaktai'
import ElDviraciai from './pages/musu_modeliai/el-dviraciai/el-dviraciai'
import Kelias from './pages/kelias/kelias'
import Bekele from './pages/bekele/bekele'
import PriedaiAksesuarai from './pages/priedai-aksesuarai/priedai-aksesuarai'
import Vanduo from './pages/musu_modeliai/vandens_motociklai/vanduo'
import TestDrive from './components/layout/TestDrive'
import ProductDetail from './pages/product/ProductDetail'
import CartPage from './pages/cart/CartPage'
import { CartProvider } from './contexts/CartContext'
import YamahaLocationsMap from './components/Map/YamahaLocationsMap'
import styles from './components/Map/YamahaLocationsMap.module.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const yamahaVideo = 'https://github.com/yamatecha/yamatecha.lt/releases/download/videos/2026.Yamaha.Tricity.300.Make.the.right.move.webm'

  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="app">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          
          <Routes>
          <Route path="/" element={
            <main className="main-content">
              <HeroSectionTailwind 
                title="Yamaha"
                subtitle="Patirkite judėjimo laisvę"
                videoSrc={yamahaVideo}
                ctaText="Atrasti daugiau"
              />
              <ExploreYamaha />
              <TestDrive />
              <section className={styles.mapSection}>
                <div className="container mx-auto px-4">
                  <h2 className={styles.mapTitle}>MUS GALITE RASTI</h2>
                  <YamahaLocationsMap />
                </div>
              </section>
            </main>
          } />
          <Route path="/apie-mus" element={<ApieMus />} />
          <Route path="/servisas" element={<Servisas />} />
          <Route path="/daliu-katalogas" element={<DaliuKatalogas />} />
          <Route path="/el-dviraciai" element={<ElDviraciai />} />
          <Route path="/kelias" element={<Kelias />} />
          <Route path="/bekele" element={<Bekele />} />
          <Route path="/priedai-aksesuarai" element={<PriedaiAksesuarai />} />
          <Route path="/vanduo" element={<Vanduo />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
                    <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>
        
        <Footer />
      </div>
      </CartProvider>
    </Router>
  )
}

export default App
