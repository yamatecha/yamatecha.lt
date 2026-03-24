import { useTranslation } from 'react-i18next';
import LazyVideo from '../LazyVideo';
const yamahaVideo = 'https://github.com/yamatecha/yamatecha.lt/releases/download/videos/2026.Yamaha.Tricity.300.Make.the.right.move.webm';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="electric-bikes" className="hero-section">
      <div className="hero-video-background">
        <LazyVideo
          src={yamahaVideo}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        />
      </div>
      <div className="hero-content">
        <h1><span style={{ color: '#dc2626' }}>{t('hero.title')}</span></h1>
        <p>{t('hero.subtitle')}</p>
        <button className="cta-button">{t('hero.exploreButton')}</button>
      </div>
    </section>
  )
}

export default Hero
