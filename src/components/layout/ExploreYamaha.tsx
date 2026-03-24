import LazyImage from '../LazyImage';

const ExploreYamaha = () => {
  const promoCards = [
    {
      id: 'promo1',
      title: 'Atraskite 2026 metų naujienas',
      subtitle: 'Waverunners',
      image: '/src/assets/ocean.jpg',
      buttonText: 'Atrask daugiau',
      href: '/waverunners'
    },
    {
      id: 'promo2',
      title: 'Atrask Yamaha pasaulį',
      subtitle: 'Yamaha naujienos',
      image: '/src/assets/forest.jpg',
      buttonText: 'Sužinok daugiau',
      href: '/news'
    }
  ];

  const categories = [
    {
      id: 'motorcycles',
      name: 'Motorcycles',
      image: '/src/assets/road-1882020.jpg'
    },
    {
      id: 'scooters',
      name: 'Scooters',
      image: '/src/assets/dirt road.jpg'
    },
    {
      id: 'outboard',
      name: 'Outboard engines',
      image: '/src/assets/ocean.jpg'
    },
    {
      id: 'waverunners',
      name: 'WaveRunners',
      image: '/src/assets/ocean.jpg'
    },
    {
      id: 'boats',
      name: 'Boats',
      image: '/src/assets/ocean.jpg'
    },
    {
      id: 'atv',
      name: 'ATV & Side by Side',
      image: '/src/assets/forest.jpg'
    }
  ];

  return (
    <section className="explore-yamaha-section">
      {/* Two Large Promotional Cards */}
      <div className="promo-cards-container">
        {promoCards.map((card) => (
          <a key={card.id} href={card.href} className="promo-card-link">
            <div className="promo-card-large">
              <div className="promo-card-image">
                <LazyImage 
                  src={card.image} 
                  alt={card.title}
                  fallbackSrc="/src/assets/hero.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="promo-card-overlay"></div>
              <div className="promo-card-content">
                <div className="promo-content-wrapper">
                  <div className="promo-text-block">
                    <h4 className="promo-title-small">{card.title}</h4>
                    <h2 className="promo-title-large">{card.subtitle}</h2>
                  </div>
                  <div className="promo-button-wrapper">
                    <button className="promo-button">
                      <span className="button-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.16732 12.8342H15.4757L11.409 16.9009C11.084 17.2259 11.084 17.7592 11.409 18.0842C11.734 18.4092 12.259 18.4092 12.584 18.0842L18.0757 12.5926C18.4007 12.2676 18.4007 11.7426 18.0757 11.4176L12.5923 5.91758C12.2673 5.59258 11.7423 5.59258 11.4173 5.91758C11.0923 6.24258 11.0923 6.76758 11.4173 7.09258L15.4757 11.1676H6.16732C5.70898 11.1676 5.33398 11.5426 5.33398 12.0009C5.33398 12.4592 5.70898 12.8342 6.16732 12.8342Z" fill="#121212"></path>
                        </svg>
                      </span>
                      <span className="button-text">{card.buttonText}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Explore Yamaha Section */}
      <div className="explore-categories-section">
        <h2 className="explore-title">EXPLORE YAMAHA</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <LazyImage 
                  src={category.image} 
                  alt={category.name}
                  fallbackSrc="/src/assets/hero.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="category-overlay">
                <span className="category-name">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreYamaha;
