import { Link } from 'react-router-dom';
import LanguageSwitcher from './language-switcher';
import Dropdown from './Dropdown';
import './navbar.css';

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  // rest of the code remains the same
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const modeliaiItems = [
    { label: 'KELIAS', to: '/kelias' },
    { label: 'BEKELE', to: '/bekele' },
    { label: 'VANDUO', to: '/vanduo' },
    { label: 'EL-DVIRACIAI', to: '/el-dviraciai' }
  ];

  const aksesuaraiItems = [
    { label: 'HELMETS', to: '/helmets' },
    { label: 'GLOVES', to: '/gloves' },
    { label: 'JACKETS', to: '/jackets' }
  ];

  const aprangaItems = [
    { label: 'MARŠKINIAI', to: '/marskiniai' },
    { label: 'KELNĖS', to: '/kelnes' },
    { label: 'STRIUKĖS', to: '/striukes' },
    { label: 'AVALYNĖ', to: '/avalynė' }
  ];

  const servisoPaslaugosItems = [
    { label: 'TECHINĖ APŽIŪRA', to: '/technine-apsziura' },
    { label: 'REMONTAS', to: '/remontas' },
    { label: 'DIAKSTIKA', to: '/diagnostika' },
    { label: 'PRIEŽIŪRA', to: '/prieziura' }
  ];

  const testDriveItems = [
    { label: 'UŽSIREGISTRUOTI', to: '/test-drive-registration' },
    { label: 'TERMINAI', to: '/test-drive-terminai' },
    { label: 'TAISYKLĖS', to: '/test-drive-taisykles' },
    { label: 'KONTAKTAI', to: '/test-drive-kontaktai' }
  ];

  return (
    <header className="header">
      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src="/src/assets/geras LOGO.JPG" alt="YAMATECHA" className="logo-image" style={{ maxHeight: '35px', width: 'auto', marginLeft: '20%' }} />
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
            <Dropdown 
              title="MŪSŲ MODELIAI" 
              items={modeliaiItems}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <Dropdown 
              title="AKSESUARAI" 
              items={aksesuaraiItems}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <Dropdown 
              title="APRANGA" 
              items={aprangaItems}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <Dropdown 
              title="SERVISO PASLAUGOS" 
              items={servisoPaslaugosItems}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <Dropdown 
              title="TEST DRIVE" 
              items={testDriveItems}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <li className="nav-item language-nav-item desktop-only">
              <LanguageSwitcher />
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