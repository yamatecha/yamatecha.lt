import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import MotorcycleTabs from './components/motorcycle-tabs'
import ExploreYamaha from './components/explore-yamaha'
import Footer from './components/footer'
import ApieMus from './pages/apie-mus/apie-mus'
import Servisas from './pages/servisas/servisas'
import DaliuKatalogas from './pages/daliu-katalogas/daliu-katalogas'
import Kontaktai from './pages/kontaktai/kontaktai'
import ElDviraciai from './pages/el-dviraciai/el-dviraciai'
import Kelias from './pages/kelias/kelias'
import Bekele from './pages/bekele/bekele'
import PriedaiAksesuarai from './pages/priedai-aksesuarai/priedai-aksesuarai'
import Vanduo from './pages/vanduo/vanduo'
import TestDrive from './components/test-drive'
import ShopPage from './pages/shop/ShopPage'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="app">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <Hero />
              <ExploreYamaha />
              <MotorcycleTabs />
              <TestDrive />
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
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
