import React from 'react'

interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const HeroSectionTailwind: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  videoSrc,
  backgroundImage,
  ctaText,
  onCtaClick,
  className = ""
}) => (
  <section className={`hero-section main-hero ${className}`}>
    {/* Background */}
    {videoSrc ? (
      <div className="hero-video-background">
        <video 
          src={videoSrc} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        />
        <div className="hero-overlay"></div>
      </div>
    ) : backgroundImage ? (
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    ) : null}
    
    {/* Content - EXACT same structure as original */}
    <div className="hero-content">
      <h1><span style={{ color: '#dc2626' }}>{title}</span></h1>
      <p>{subtitle}</p>
      {ctaText && (
        <button className="cta-button" onClick={onCtaClick}>
          {ctaText}
        </button>
      )}
    </div>
  </section>
);
