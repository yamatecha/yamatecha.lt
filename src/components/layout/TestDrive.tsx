import { useTranslation } from 'react-i18next';
import LazyImage from '../LazyImage';

const TestDrive = () => {
  const { t } = useTranslation();
  
  return (
    <section className="test-drive-section">
      <div className="container">
        <h2 className="test-drive-title"><span style={{ color: '#dc2626' }}>{t('testDrive.title')}</span></h2>
        <div className="test-drive-banner">
          <div className="test-drive-image">
            <LazyImage 
              src="/src/assets/test-drive-collage.jpg" 
              alt={t('testDrive.alt')} 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="test-drive-button">
            {t('testDrive.button')}
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestDrive