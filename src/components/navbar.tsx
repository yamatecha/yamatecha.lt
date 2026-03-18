import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './language-switcher';
import './navbar.css';

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className="header">
      {/* Top Bar - Contact Info */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <a href="mailto:yamaha@yamatecha.lt" className="contact-item play-regular" data-tooltip="yamaha@yamatecha.lt">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="email-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>yamaha@yamatecha.lt</span>
            </a>
            <a href="tel:+37068622211" className="contact-item play-regular" data-tooltip="+370 686 22211">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="phone-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+370 686 22211</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-item play-regular" data-tooltip="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-item play-regular" data-tooltip="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-item play-regular" data-tooltip="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
            <a href="https://www.tiktok.com/@yamatecha" target="_blank" rel="noopener noreferrer" className="contact-item play-regular" data-tooltip="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
          <div className="top-menu desktop-menu">
            <Link to="/servisas" className="top-menu-item play-bold">{t('navbar.topMenu.service')}</Link>
            <Link to="/daliu-katalogas" className="top-menu-item play-bold">{t('navbar.topMenu.partsCatalog')}</Link>
            <Link to="/apie-mus" className="top-menu-item play-bold">{t('navbar.topMenu.aboutUs')}</Link>
            <Link to="/kontaktai" className="top-menu-item play-bold">{t('navbar.topMenu.contacts')}</Link>
                        <LanguageSwitcher />
          </div>
          <div className="top-menu mobile-only">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src="/src/assets/geras LOGO.JPG" alt="YAMATECHA" className="logo-image" style={{ maxHeight: '50px', width: 'auto', marginLeft: '20%' }} />
            </Link>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="menu-header">
              <span className="menu-title">Menu</span>
              <button className="menu-close" onClick={() => setIsMenuOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <li className="nav-item mobile-only">
              <Link to="/servisas" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.topMenu.service')}</Link>
            </li>
            <li className="nav-item mobile-only">
              <Link to="/daliu-katalogas" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.topMenu.partsCatalog')}</Link>
            </li>
            <li className="nav-item mobile-only">
              <Link to="/apie-mus" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.topMenu.aboutUs')}</Link>
            </li>
            <li className="nav-item mobile-only">
              <Link to="/kontaktai" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.topMenu.contacts')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/el-dviraciai" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.mainNav.electricBikes')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/kelias" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.mainNav.road')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/bekele" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.mainNav.offroad')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/vanduo" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.mainNav.water')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/priedai-aksesuarai" className="nav-link play-regular" onClick={() => setIsMenuOpen(false)}>{t('navbar.mainNav.accessories')}</Link>
            </li>
          </ul>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar