# Carousel3D Component

A reusable 3D carousel component built with `react-responsive-3d-carousel` library, optimized for mobile and desktop use.

## Features

- ✅ True 3D coverflow effect
- ✅ Mobile responsive with touch support
- ✅ Autoplay with pause on hover
- ✅ Customizable styling
- ✅ TypeScript support
- ✅ Multiple effects (slide, fade, coverflow, cube)
- ✅ Flexible breakpoints

## Usage

```tsx
import Carousel3D, { type CarouselItem } from '../../components/Carousel3D'

const items: CarouselItem[] = [
  {
    id: '1',
    title: 'Item 1',
    subtitle: 'Description for item 1',
    image: '/path/to/image1.jpg',
    buttonText: 'Learn More',
    link: '/item/1'
  },
  {
    id: '2',
    title: 'Item 2',
    subtitle: 'Description for item 2',
    image: '/path/to/image2.jpg',
    buttonText: 'Learn More',
    link: '/item/2'
  }
]

function MyComponent() {
  return (
    <Carousel3D 
      items={items}
      autoplay={true}
      interval={5000}
      effect="coverflow"
      height="400px"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `CarouselItem[]` | **Required** | Array of carousel items |
| `startIndex` | `number` | `0` | Initial slide index |
| `onChange` | `(index: number) => void` | - | Callback when slide changes |
| `autoplay` | `boolean` | `true` | Enable autoplay |
| `interval` | `number` | `5000` | Autoplay interval in ms |
| `pauseOnHover` | `boolean` | `true` | Pause on hover |
| `infinite` | `boolean` | `true` | Infinite loop |
| `arrows` | `boolean` | `true` | Show navigation arrows |
| `dots` | `boolean` | `true` | Show pagination dots |
| `slidesPerView` | `number` | `1` | Slides per view |
| `spaceBetween` | `number` | `30` | Space between slides |
| `centeredSlides` | `boolean` | `true` | Center active slide |
| `effect` | `string` | `'coverflow'` | Animation effect |
| `height` | `string` | `'500px'` | Carousel height |
| `className` | `string` | `''` | Additional CSS classes |

## CarouselItem Interface

```tsx
interface CarouselItem {
  id: string
  title: string
  subtitle?: string
  image: string
  buttonText?: string
  link?: string
  content?: React.ReactNode  // For custom content
}
```

## Custom Content

You can provide custom React nodes instead of the default card layout:

```tsx
const items: CarouselItem[] = [
  {
    id: '1',
    content: (
      <div className="custom-card">
        <h3>Custom Content</h3>
        <p>Anything you want!</p>
      </div>
    )
  }
]
```

## Styling

The component uses CSS modules and can be customized by overriding the CSS classes:

- `.carousel-3d-wrapper` - Main container
- `.carousel-card-content` - Individual cards
- `.promo-card-image` - Image container
- `.promo-card-content` - Text content
- `.promo-button` - Action button

## Mobile Optimization

The carousel automatically adapts to different screen sizes:

- **Desktop**: Full 3D effect with larger cards
- **Tablet (768px)**: Medium cards with adjusted spacing
- **Mobile (480px)**: Smaller cards optimized for touch
- **Small Mobile (320px)**: Compact layout for small screens
