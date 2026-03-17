import { useTranslation } from 'react-i18next';
import LazyImage from './LazyImage';

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
    <section className="explore-yamaha-section">
      <div className="container">
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
                <button className="promo-button">{card.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreYamaha;
