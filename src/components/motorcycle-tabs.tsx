import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyImage from './LazyImage';

const MotorcycleTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'sport',
      title: 'Sportiniai',
      description: 'Greiti ir sportiški motociklai',
      image: '/src/assets/motorcycles/sport.jpg',
      features: ['Aukštas greitis', 'Sportiškas dizainas', 'Galingas variklis']
    },
    {
      id: 'cruiser',
      title: 'Kruizeriai',
      description: 'Komfortiški keliaujant ilgas distancijas',
      image: '/src/assets/motorcycles/cruiser.jpg',
      features: ['Komfortas', 'Stilius', 'Patvarumas']
    },
    {
      id: 'offroad',
      title: 'Bekelė',
      description: 'Motociklai sunkiai vietovei',
      image: '/src/assets/motorcycles/offroad.jpg',
      features: ['Atsparumas', 'Manevringumas', 'Stipri konstrukcija']
    }
  ];

  return (
    <section className="motorcycle-tabs-section">
      <div className="container">
        <h2>{t('motorcycles.title')}</h2>
        <p className="section-subtitle">{t('motorcycles.subtitle')}</p>
        
        <div className="tabs-container">
          <div className="tabs-header">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            <div className="tab-image">
              <LazyImage 
                src={tabs[activeTab].image} 
                alt={tabs[activeTab].title}
                fallbackSrc="/src/assets/hero.png"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="tab-info">
              <h3>{tabs[activeTab].title}</h3>
              <p>{tabs[activeTab].description}</p>
              
              <ul className="features-list">
                {tabs[activeTab].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <button className="cta-button secondary">
                {t('motorcycles.viewMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorcycleTabs;
