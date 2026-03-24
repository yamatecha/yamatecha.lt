import { useTranslation } from 'react-i18next';
import LazyImage from '../LazyImage';

const ExploreYamaha = () => {
  const { t } = useTranslation();

  const promoCards = [
    {
      id: 'promo1',
      title: t('exploreYamaha.promo1.title'),
      subtitle: t('exploreYamaha.promo1.subtitle'),
      image: '/src/assets/promo-yamaha-1.jpg',
      buttonText: t('exploreYamaha.promo1.button')
    },
    {
      id: 'promo2',
      title: t('exploreYamaha.promo2.title'),
      subtitle: t('exploreYamaha.promo2.subtitle'),
      image: '/src/assets/promo-yamaha-2.jpg',
      buttonText: t('exploreYamaha.promo2.button')
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-video-background">
        <LazyImage 
          src="/src/assets/hero.png"
          alt="Yamaha Background"
          fallbackSrc="/src/assets/hero.png"
          className="hero-video"
        />
      </div>
      <div className="hero-content-wrapper">
        <div className="hero-content-top">
          <h1><span style={{ color: '#dc2626' }}>{t('exploreYamaha.title')}</span></h1>
          <div className="hero-logo-text">
            <h2>Rev's Your Heart</h2>
          </div>
        </div>
        
        {/* Two Large Promotional Cards */}
        <div className="promo-cards">
          {promoCards.map((card) => (
            <div key={card.id} className="promo-card">
              <div className="promo-card-image">
                <LazyImage 
                  src={card.image} 
                  alt={card.title}
                  fallbackSrc="/src/assets/hero.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="promo-card-content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
                <button className="cta-button promo-button">{card.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreYamaha;
