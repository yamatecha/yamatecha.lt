import { useState, useRef, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  type?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyVideo = ({
  src,
  type = 'video/mp4',
  className = '',
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = false,
  poster,
  onLoad,
  onError
}: LazyVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current && autoPlay && isLoaded) {
      videoRef.current.play().catch(err => {
        console.log('Auto-play failed:', err);
      });
    }
  }, [isInView, autoPlay, isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
    if (autoPlay && videoRef.current && isInView) {
      videoRef.current.play().catch(err => {
        console.log('Auto-play failed on canPlay:', err);
      });
    }
    onLoad?.();
  };

  return (
    <div ref={containerRef} className={`lazy-video-container ${className}`}>
      {isInView && !hasError ? (
        <video
          ref={videoRef}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          onLoadedData={handleLoad}
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className={`lazy-video-placeholder ${className}`}>
          {poster ? (
            <img 
              src={poster} 
              alt="Video placeholder" 
              className={`w-full h-full object-cover ${className}`}
            />
          ) : (
            <div className="animate-pulse bg-gray-300 w-full h-full" />
          )}
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
