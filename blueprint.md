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

### Routing & State
- **React Router DOM 7.13.1** - Client-side routing
- **React Hook Form 7.71.2** - Form management

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
│   │   ├── LazyImage.tsx      # Optimized image loading
│   │   ├── LazyVideo.tsx      # Optimized video loading
│   │   ├── explore-yamaha.tsx # Product showcase
│   │   ├── footer.tsx         # Site footer
│   │   ├── hero.tsx           # Landing hero section
│   │   ├── motorcycle-tabs.tsx # Product categories
│   │   ├── navbar.tsx         # Navigation header
│   │   ├── test-drive.tsx     # Test drive booking
│   │   ├── navbar.css         # Navigation styles
│   │   ├── shared-components.css # Common component styles
│   │   └── legacy-components.css # Remaining component styles
│   ├── pages/                  # Route-specific pages
│   │   ├── apie-mus/          # About us page
│   │   │   ├── apie-mus.tsx   # About us component
│   │   │   └── apie-mus.css   # About us styles
│   │   └── servisas/          # Service page
│   │       ├── servisas.tsx   # Service component
│   │       └── servisas.css   # Service styles
│   ├── i18n/                   # Internationalization config
│   │   └── index.ts
│   ├── locales/                # Translation files
│   │   ├── en.json            # English translations
│   │   ├── lt.json            # Lithuanian translations
│   │   └── ru.json            # Russian translations
│   ├── assets/                 # Static media assets
│   │   ├── video/
│   │   ├── geras LOGO.JPG
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.tsx                 # Main application component
│   ├── App-global.css          # Global app styles (minimal)
│   ├── App.css.backup          # Backup of original styles
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
- **Home Page** (`/`) - Main landing page
- **About Us** (`/apie-mus`) - Company information and history
- **Service** (`/servisas`) - Service booking and information

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

### Component Architecture
- **Functional Components** with React Hooks
- **Lazy Loading** for images and videos
- **Separation of Concerns** between UI and logic
- **Reusable Components** for consistent design

### Performance Optimizations
- **Code Splitting** with React.lazy
- **Image Optimization** with LazyImage component
- **Video Optimization** with LazyVideo component
- **Build Optimization** with Vite

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

### CSS Structure Improvements
- **Separated page styles** into individual CSS files
- **Created shared component styles** for reusable patterns
- **Consolidated CSS variables** in index.css
- **Removed duplicate styles** and cleaned up global styles
- **Maintained backward compatibility** with backup files

