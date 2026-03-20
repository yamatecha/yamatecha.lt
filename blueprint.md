# Yamatecha.lt Project Blueprint

## Project Overview
**Yamatecha.lt** is a modern, multilingual e-commerce website for Yamaha equipment sales and services in Lithuania. The platform showcases electric bikes, road vehicles, offroad equipment, water vehicles, and accessories with a focus on user experience and performance.

## Technology Stack

### Frontend Framework
- **React 19.2.4** - Main UI framework
- **TypeScript** - Type-safe development
- **Vite 8.0.0** - Build tool and dev server

### Styling & UI
- **TailwindCSS 4.2.1** - Utility-first CSS framework
- **Framer Motion 12.37.0** - Animation library
- **Lucide React 0.577.0** - Icon library
- **Headless UI 2.2.9** - Accessible UI components
- **Swiper 12.1.2** - Carousel/slider component
- **react-responsive-3d-carousel 2.1.5** - 3D carousel component

### Routing & State
- **React Router DOM 7.13.1** - Client-side routing
- **React Hook Form 7.71.2** - Form management

### E-commerce Integration
- **Shopify Storefront API Client 1.0.10** - E-commerce backend integration

### Internationalization
- **i18next 25.8.18** - Internationalization framework
- **react-i18next 16.5.8** - React bindings
- **Flag Icons 7.5.0** - Country flag display

### Development Tools
- **ESLint** - Code linting
- **Vitest 4.1.0** - Unit testing
- **Testing Library** - Component testing

## Project Structure

```
yamatecha.lt/
├── public/                     # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Carousel3D/         # 3D carousel component
│   │   │   ├── Carousel3D.tsx
│   │   │   └── Carousel3D.css
│   │   ├── shop/               # E-commerce components
│   │   │   └── ProductCard.tsx # Product display card
│   │   ├── LazyImage.tsx       # Optimized image loading
│   │   ├── LazyVideo.tsx       # Optimized video loading
│   │   ├── ScrollToTop.tsx     # Scroll to top utility
│   │   ├── Dropdown.tsx        # Dropdown component
│   │   ├── explore-yamaha.tsx  # Product showcase
│   │   ├── footer.tsx          # Site footer
│   │   ├── hero.tsx            # Landing hero section
│   │   ├── language-switcher.tsx # Language toggle
│   │   ├── navbar.tsx          # Navigation header
│   │   ├── section.tsx         # Section wrapper
│   │   ├── test-drive.tsx      # Test drive booking
│   │   ├── navbar.css          # Navigation styles
│   │   ├── Dropdown.css        # Dropdown styles
│   │   ├── shared-components.css # Common component styles
│   │   └── legacy-components.css # Remaining component styles
│   ├── pages/                  # Route-specific pages
│   │   ├── apie-mus/           # About us page
│   │   │   ├── apie-mus.tsx    # About us component
│   │   │   └── apie-mus.css    # About us styles
│   │   ├── bekele/             # Off-road page
│   │   │   ├── bekele.tsx
│   │   │   └── bekele-specific.css
│   │   ├── daliu-katalogas/    # Parts catalog page
│   │   │   ├── daliu-katalogas.tsx
│   │   │   └── daliu-katalogas.css
│   │   ├── el-dviraciai/       # Electric bikes page
│   │   │   ├── el-dviraciai.tsx
│   │   │   └── el-dviraciai-specific.css
│   │   ├── kelias/             # Road vehicles page
│   │   │   ├── kelias.tsx
│   │   │   └── kelias-specific.css
│   │   ├── kontaktai/          # Contact page
│   │   │   ├── kontaktai.tsx
│   │   │   └── kontaktai.css
│   │   ├── priedai-aksesuarai/  # Accessories page
│   │   │   ├── priedai-aksesuarai.tsx
│   │   │   └── priedai-aksesuarai.css
│   │   ├── servisas/           # Service page
│   │   │   ├── servisas.tsx    # Service component
│   │   │   └── servisas.css    # Service styles
│   │   ├── shop/               # E-commerce shop page
│   │   │   └── ShopPage.tsx
│   │   ├── vanduo/             # Water vehicles page
│   │   │   ├── vanduo.tsx
│   │   │   └── vanduo-specific.css
│   │   └── global-page-styles/ # Shared page styles
│   │       └── page-styles.css
│   ├── lib/                    # Utility libraries
│   │   └── shopify.ts          # Shopify API integration
│   ├── i18n/                   # Internationalization config
│   │   └── index.ts
│   ├── assets/                 # Static media assets
│   │   ├── dirt road.jpg
│   │   ├── ocean.jpg
│   │   ├── geras LOGO.JPG
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.tsx                 # Main application component
│   ├── App-global.css          # Global app styles (minimal)
│   ├── index.css               # Base styles, variables, Tailwind
│   └── main.tsx                # Application entry point
├── .gitignore                  # Git ignore rules
├── blueprint.md                # This project blueprint
├── README.md                   # Project documentation
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App-specific TypeScript config
├── tsconfig.node.json          # Node-specific TypeScript config
├── vite.config.ts              # Vite configuration
└── vitest.config.ts            # Vitest testing configuration
```

## Current Features

### Navigation & Layout
- **Responsive Navbar** with mobile menu toggle
- **Multi-language support** (Lithuanian, English, Russian)
- **Footer** with quick links and social media

### Content Sections
- **Hero Section** - Landing page introduction
- **Explore Yamaha** - Product showcase and discovery
- **Motorcycle Tabs** - Categorized product browsing
- **Test Drive Booking** - Service appointment system

### Pages
- **Home Page** (`/`) - Main landing page with hero, product showcase, and test drive sections
- **About Us** (`/apie-mus`) - Company information and history
- **Service** (`/servisas`) - Service booking and information
- **Parts Catalog** (`/daliu-katalogas`) - Parts and components catalog
- **Electric Bikes** (`/el-dviraciai`) - Electric bicycle products
- **Road Vehicles** (`/kelias`) - Road motorcycles and vehicles
- **Off-road** (`/bekele`) - Off-road and adventure vehicles
- **Water Vehicles** (`/vanduo`) - Watercraft and marine equipment
- **Accessories** (`/priedai-aksesuarai`) - Accessories and gear
- **Contact** (`/kontaktai`) - Contact information and form
- **Shop** (`/shop`) - E-commerce shopping interface

## Development Workflow

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI
```

### Development Server
- **URL**: `http://localhost:5173`
- **Hot Module Replacement**: Enabled
- **Type Checking**: Real-time

## Architecture Decisions

### CSS Architecture
- **Modular CSS Structure** - Separate CSS files for each component/page
- **CSS Variables** - Centralized in `index.css` for consistent theming
- **Component-Scoped Styles** - Each component imports its own CSS file
- **Shared Components** - Common styles in `shared-components.css`
- **Legacy Components** - Remaining component styles in `legacy-components.css`
- **Global Styles** - Minimal global styles in `App-global.css`
- **Page-Specific Styles** - Individual CSS files for each page route
- **Global Page Styles** - Shared page styles in `page-styles.css`

### Component Architecture
- **Functional Components** with React Hooks
- **Lazy Loading** for images and videos
- **Separation of Concerns** between UI and logic
- **Reusable Components** for consistent design
- **3D Carousel** for enhanced product presentation
- **Shop Components** for e-commerce functionality
- **Language Switcher** for internationalization

### Performance Optimizations
- **Code Splitting** with React.lazy
- **Image Optimization** with LazyImage component
- **Video Optimization** with LazyVideo component
- **Build Optimization** with Vite
- **Scroll Restoration** with ScrollToTop component

### E-commerce Integration
- **Shopify Storefront API** for product management
- **Mock Data System** for development without live store
- **Product Cards** with quick view and add to cart functionality
- **Product Filtering** by type, tags, and search
- **Price Display** with currency support
- **Inventory Tracking** with availability status

### Internationalization
- **Namespace-based** translations
- **Language Switcher** in navigation
- **Fallback Language**: English
- **RTL Support**: Ready for implementation

## Future Enhancements

### Planned Features
1. **E-commerce Integration**
   - Shopping cart functionality
   - Payment gateway integration
   - Product catalog management
   - User authentication

2. **Service Booking System**
   - Advanced scheduling
   - Service history tracking
   - Technician assignment
   - Automated notifications

3. **Content Management**
   - Blog/news section
   - Product reviews
   - Customer testimonials
   - FAQ system

4. **Performance & SEO**
   - Server-side rendering (SSR)
   - Search engine optimization
   - Analytics integration
   - Progressive Web App (PWA)

### Technical Improvements
1. **Testing**
   - Component unit tests
   - Integration tests
   - E2E testing with Playwright
   - Visual regression testing

2. **Accessibility**
   - WCAG 2.1 compliance
   - Screen reader optimization
   - Keyboard navigation
   - ARIA labels implementation

3. **Security**
   - Content Security Policy (CSP)
   - XSS protection
   - CSRF protection
   - Secure headers implementation

## Deployment & Infrastructure

### Build Process
- **TypeScript Compilation** with strict mode
- **CSS Optimization** with PostCSS
- **Asset Minification** and bundling
- **Source Maps** for debugging

### Environment Configuration
- **Development**: Local development server
- **Staging**: Pre-production testing
- **Production**: Optimized build for deployment

## Code Standards

### TypeScript
- **Strict Mode** enabled
- **Interface Definitions** for props
- **Type Safety** throughout application
- **ESLint Rules** for code quality

### React Best Practices
- **Functional Components** preferred
- **Custom Hooks** for reusable logic
- **Props Destructuring** for clarity
- **Consistent Naming** conventions

### CSS & Styling
- **Modular CSS Architecture** with component-scoped styles
- **CSS Variables** for consistent theming and design system
- **Responsive Design** mobile-first approach
- **TailwindCSS** utility classes for rapid development
- **Component-specific CSS files** for maintainability
- **Shared component styles** for reusable design patterns

## Maintenance & Updates

### Dependency Management
- **Regular Updates** for security patches
- **Semantic Versioning** for releases
- **Breaking Changes** documentation
- **Compatibility Testing**

### Code Quality
- **Automated Testing** on commits
- **Code Reviews** for PRs
- **Linting Rules** enforcement
- **Performance Monitoring**

## Recent Updates

### March 2026
- **Added Service Page** (`/servisas`) with comprehensive service booking system
- **CSS Architecture Refactoring** - Moved from monolithic App.css to modular structure
- **Component-specific CSS files** for better maintainability
- **Updated routing** to include service page navigation
- **Enhanced code organization** with co-located styles and components

### April 2026
- **Expanded Page Structure** - Added 8 new specialized pages for different product categories
- **E-commerce Integration** - Implemented Shopify Storefront API with mock data system
- **Shop Components** - Added ProductCard component and ShopPage for e-commerce functionality
- **3D Carousel** - Added Carousel3D component for enhanced product presentation
- **Language Switcher** - Implemented dedicated component for language switching
- **Scroll Restoration** - Added ScrollToTop utility for better navigation UX
- **Enhanced Component Library** - Added Dropdown, Section wrapper, and other UI components

### CSS Structure Improvements
- **Separated page styles** into individual CSS files for each route
- **Created shared component styles** for reusable design patterns
- **Consolidated CSS variables** in index.css
- **Removed duplicate styles** and cleaned up global styles
- **Added global page styles** for consistent page layouts
- **Maintained backward compatibility** with backup files

### Product Catalog Expansion
- **Electric Bikes Page** (`/el-dviraciai`) - Dedicated electric bicycle showcase
- **Road Vehicles Page** (`/kelias`) - Road motorcycles and vehicles
- **Off-road Page** (`/bekele`) - Off-road and adventure vehicles  
- **Water Vehicles Page** (`/vanduo`) - Watercraft and marine equipment
- **Accessories Page** (`/priedai-aksesuarai`) - Accessories and gear
- **Parts Catalog** (`/daliu-katalogas`) - Parts and components catalog
- **Contact Page** (`/kontaktai`) - Contact information and form
- **Shop Page** (`/shop`) - E-commerce shopping interface

### Technical Enhancements
- **Shopify Integration** - Complete API client with development mock data
- **Product Management** - Advanced filtering, search, and categorization
- **Responsive Design** - Mobile-first approach across all pages
- **Performance Optimizations** - Lazy loading, code splitting, and build optimization
- **Type Safety** - Comprehensive TypeScript interfaces for all components

