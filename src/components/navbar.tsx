import { Link } from 'react-router-dom';
import LanguageSwitcher from './language-switcher';
import MegaMenu from './MegaMenu';
import './navbar.css';

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  // rest of the code remains the same
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const motorcycleCategories = [
    {
      id: 'motociklai',
      label: 'MOTOCIKLAI',
      subCategories: [
        {
          id: 'musu-motociklai',
          label: 'Mūsų Motociklai',
          hasArrow: true,
          products: [
            { id: 'r1-race', name: 'R1 RACE', image: '/src/assets/motorcycle-placeholder.jpg', badge: 'A' },
            { id: 'r9', name: 'R9', image: '/src/assets/motorcycle-placeholder.jpg' },
            { id: 'r7', name: 'R7', image: '/src/assets/motorcycle-placeholder.jpg' },
            { id: 'r3', name: 'R3', image: '/src/assets/motorcycle-placeholder.jpg' },
            { id: 'r125', name: 'R125', image: '/src/assets/motorcycle-placeholder.jpg' },
            { id: 'r6-race', name: 'R6 RACE', image: '/src/assets/motorcycle-placeholder.jpg', badge: 'A' }
          ]
        },
        {
          id: 'compare-motorcycles',
          label: 'Compare Motorcycles',
          hasArrow: true
        },
        {
          id: 'yard-built',
          label: 'Yard Built',
          hasArrow: true
        }
      ]
    },
    {
      id: 'motoroleriai',
      label: 'MOTOROLERIAI',
      subCategories: [
        {
          id: 'musu-motoroleriai',
          label: 'Mūsų Motoroleriai',
          hasArrow: true
        }
      ]
    },
    {
      id: 'ebike-systems',
      label: 'EBIKE SYSTEMS',
      subCategories: [
        {
          id: 'musu-ebike',
          label: 'Mūsų E-Bike',
          hasArrow: true
        }
      ]
    }
  ];

  const aksesuaraiCategories = [
    {
      id: 'helmets',
      label: 'HELMETS',
      subCategories: [
        {
          id: 'full-face',
          label: 'Full Face',
          hasArrow: true
        },
        {
          id: 'open-face',
          label: 'Open Face',
          hasArrow: true
        }
      ]
    }
  ];

  const aprangaCategories = [
    {
      id: 'marskiniai',
      label: 'MARŠKINIAI',
      subCategories: [
        {
          id: 't-shirts',
          label: 'T-Shirts',
          hasArrow: true
        }
      ]
    }
  ];

  const servisoCategories = [
    {
      id: 'technine-apsziura',
      label: 'TECHINĖ APŽIŪRA',
      subCategories: [
        {
          id: 'prieziura',
          label: 'Priežiūra',
          hasArrow: true
        },
        {
          id: 'kiti',
          label: 'Kiti',
          hasArrow: true
        }
      ]
    }
  ];

  const testDriveCategories = [
    {
      id: 'registration',
      label: 'UŽSIREGISTRUOTI',
      subCategories: [
        {
          id: 'test-drive-form',
          label: 'Registracijos forma',
          hasArrow: true
        },
        {
          id: 'requirements',
          label: 'Reikalavimai',
          hasArrow: true
        }
      ]
    },
    {
      id: 'schedule',
      label: 'TERMINAI',
      subCategories: [
        {
          id: 'available-slots',
          label: 'Laisvi terminai',
          hasArrow: true
        },
        {
          id: 'calendar',
          label: 'Kalendorius',
          hasArrow: true
        }
      ]
    },
    {
      id: 'guidelines',
      label: 'TAISYKLĖS',
      subCategories: [
        {
          id: 'safety-rules',
          label: 'Saugos taisyklės',
          hasArrow: true
        },
        {
          id: 'preparation',
          label: 'Paruošimas',
          hasArrow: true
        }
      ]
    },
    {
      id: 'contacts',
      label: 'KONTAKTAI',
      subCategories: [
        {
          id: 'location',
          label: 'Vieta',
          hasArrow: true
        },
        {
          id: 'phone-email',
          label: 'Telefonas / El. paštas',
          hasArrow: true
        }
      ]
    }
  ];

  return (
    <header className="header">
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
            <MegaMenu 
              title="MŪSŲ MODELIAI" 
              categories={motorcycleCategories}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <MegaMenu 
              title="AKSESUARAI" 
              categories={aksesuaraiCategories}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <MegaMenu 
              title="APRANGA" 
              categories={aprangaCategories}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <MegaMenu 
              title="SERVISO PASLAUGOS" 
              categories={servisoCategories}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <MegaMenu 
              title="TEST DRIVE" 
              categories={testDriveCategories}
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