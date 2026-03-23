import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import styles from './Carousel3D.module.css'

export interface CarouselItem {
  id: string
  title: string
  subtitle?: string
  image: string
  buttonText?: string
  link?: string
  content?: React.ReactNode
}

export interface Carousel3DProps {
  items: CarouselItem[]
  startIndex?: number
  onChange?: (index: number) => void
  autoplay?: boolean
  interval?: number
  pauseOnHover?: boolean
  infinite?: boolean
  arrows?: boolean
  dots?: boolean
  slidesPerView?: number
  spaceBetween?: number
  centeredSlides?: boolean
  effect?: 'slide' | 'fade' | 'coverflow' | 'cube'
  coverflowEffect?: {
    rotate?: number
    stretch?: number
    depth?: number
    modifier?: number
    slideShadows?: boolean
  }
  breakpoints?: {
    [key: number]: {
      slidesPerView?: number
      spaceBetween?: number
    }
  }
  className?: string
  height?: string
}

const Carousel3D: React.FC<Carousel3DProps> = ({
  items,
  startIndex = 0,
  onChange,
  autoplay = true,
  interval = 5000,
  pauseOnHover = true,
  infinite = true,
  arrows = true,
  dots = true,
  slidesPerView = 1,
  spaceBetween = 30,
  centeredSlides = true,
  effect = 'coverflow',
  coverflowEffect = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false
  },
  breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  },
  className = '',
  height = '500px'
}) => {
  // Convert items to carousel elements
  const carouselItems = items.map((item) => (
    <SwiperSlide key={item.id}>
      <div className={`carousel-card-content ${styles.cardContent}`}>
        {item.content ? (
          item.content
        ) : (
          <>
            <div className={`promo-card-image ${styles.cardImage}`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/src/assets/hero.png'
                }}
              />
            </div>
            <div className={`promo-card-content ${styles.cardOverlay}`}>
              <h3>{item.title}</h3>
              {item.subtitle && <p>{item.subtitle}</p>}
              {item.buttonText && item.link && (
                <a href={item.link} className={`promo-button ${styles.promoButton}`}>
                  {item.buttonText}
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </SwiperSlide>
  ))

  return (
    <div 
      className={`carousel-3d-wrapper ${className} ${styles.wrapper}`}
      style={{ height }}
    >
      <Swiper
        effect={effect}
        grabCursor={true}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        coverflowEffect={coverflowEffect}
        pagination={dots ? { 
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        } : false}
        navigation={arrows ? {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        } : false}
        autoplay={autoplay ? {
          delay: interval,
          pauseOnMouseEnter: pauseOnHover,
          disableOnInteraction: false
        } : false}
        loop={infinite}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        breakpoints={breakpoints}
        onSlideChange={(swiper) => onChange?.(swiper.activeIndex)}
        initialSlide={startIndex}
        className={`carousel-3d-swiper ${styles.swiper}`}
      >
        {carouselItems}
      </Swiper>
    </div>
  )
}

export default Carousel3D
