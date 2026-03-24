import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/layout/Hero'
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <Hero />
              <ExploreYamaha />
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
                    <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
