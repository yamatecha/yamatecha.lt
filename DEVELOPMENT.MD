# DEVELOPMENT (Current State)
*Last updated: March 24, 2026*

## Stack
- **Framework**: React (Vite) 19.2.4
- **Router**: `react-router-dom` 7.13.1
- **Styling**:
- **Global CSS**: `src/index.css`, `src/App-global.css`, `src/components/shared-components.css`
- **Tailwind**: 4.2.1 enabled via `@tailwind` directives in `src/index.css`
- **CSS Modules**: used in several components (`*.module.css`)
- **State Management**: React Context (CartContext)
- **Forms**: `react-hook-form` 7.71.2
- **Animations**: `framer-motion` 12.37.0
- **Icons**: `lucide-react` 0.577.0
- **i18n**: `i18next` + `react-i18next` (`src/i18n/index.ts`, `src/locales/*.json`)
- **Shop data**: Shopify Storefront client wrapper in `src/lib/shopify.ts` (includes dev mock mode)
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint with React plugins

## App entry points
- **HTML**: `index.html`
- **React mount**: `src/main.tsx`
- Imports:
- `./index.css` (Tailwind + global CSS imports)
- `./App-global.css` (global app wrapper styles; also imports shared styles)
- `./i18n` (translation init)
- **App root**: `src/App.tsx`
- Wraps app with `BrowserRouter` and `CartProvider`
- Always renders:
- `Navbar` (`src/components/navbar.tsx`)
- `Footer` (`src/components/footer.tsx`)
- `ScrollToTop` (`src/components/ScrollToTop.tsx`)

## Routes (from `src/App.tsx`)
- **`/`**:
- `HeroSectionTailwind` (`src/components/layout/HeroSection-Tailwind.tsx`)
- `ExploreYamaha` (`src/components/layout/ExploreYamaha.tsx`)
- `TestDrive` (`src/components/layout/TestDrive.tsx`)
- **`/apie-mus`**: `src/pages/apie-mus/apie-mus.tsx`
- **`/servisas`**: `src/pages/servisas/servisas.tsx`
- **`/daliu-katalogas`**: `src/pages/daliu-katalogas/daliu-katalogas.tsx`
- **`/el-dviraciai`**: `src/pages/musu_modeliai/el-dviraciai/el-dviraciai.tsx`
- **`/kelias`**: `src/pages/kelias/kelias.tsx`
- **`/bekele`**: `src/pages/bekele/bekele.tsx`
- **`/priedai-aksesuarai`**: `src/pages/priedai-aksesuarai/priedai-aksesuarai.tsx`
- **`/vanduo`**: `src/pages/musu_modeliai/vandens_motociklai/vanduo.tsx`
- **`/kontaktai`**: `src/pages/kontaktai/kontaktai.tsx`
- **`/product/:handle`**: `src/pages/product/ProductDetail.tsx` (NEW)
- **`/cart`**: `src/pages/cart/CartPage.tsx` (NEW)

## Pages overview (what exists today)

### `src/pages/apie-mus/apie-mus.tsx`
- **Styles**: `./apie-mus.css`
- **Pattern**: page wrapper div + `<main className="main-content">`
- **Sections**:
- Hero section (uses global hero classes)
- About content, stats, navigation-links

### `src/pages/servisas/servisas.tsx`
- **Styles**: `./servisas.css`
- **Sections**:
- Hero
- Services overview (cards)
- Process steps
- Booking form (static HTML form)
- Contact info

### `src/pages/daliu-katalogas/daliu-katalogas.tsx`
- **Styles**: `./daliu-katalogas.css`
- **Data**: `shopifyAPI.getProducts({ query: 'product_type:Parts' })`
- **Components used**:
- `ProductGrid` (`src/components/layout/ProductGrid.tsx`) for featured products
- **UI**: includes search input that updates Shopify query

### `src/pages/priedai-aksesuarai/priedai-aksesuarai.tsx`
- **Styles**: `./priedai-aksesuarai.css`
- **Data**: `shopifyAPI.getProducts({ query: 'product_type:Accessories' })`
- **Components used**:
- `ProductGrid`

### `src/pages/kontaktai/kontaktai.tsx`
- **Styles**: `./kontaktai.css`
- **UI**: contact cards, contact form (static), Google maps iframe, social links

### `src/pages/kelias/kelias.tsx`
- **Styles**:
- `./kelias-specific.css`
- `../global-page-styles/page-styles.css`
- **Components used**:
- `Carousel3D` (`src/components/Carousel3D`) + Swiper
- `LazyImage`
- **Data**: featured products via `shopifyAPI.getProducts({ query: 'tag:road AND tag:featured', first: 3 })`
- **Layout**: multiple full-screen hero-like sections + featured models grid

### `src/pages/bekele/bekele.tsx`
- **Styles**:
- `./bekele-specific.css`
- `../global-page-styles/page-styles.css`
- **Components used**:
- `Carousel3D`
- `LazyVideo`
- **Data**: featured products via `shopifyAPI.getProducts({ query: 'tag:off-road AND tag:featured', first: 3 })`

### `src/pages/musu_modeliai/el-dviraciai/el-dviraciai.tsx` (Tailwind-focused)
- **Exports**: default is `ElDviraciaiFinalTailwind`
- **Styles**: no local css import here (mostly Tailwind classes)
- **Components used**:
- `HeroSectionTailwind` (`src/components/layout/HeroSection-Tailwind.tsx`)
- `ProductGrid`
- **Data**: `shopifyAPI.getProducts({ query: 'product_type:"Electric Bike"' })`
- **Cart**: Uses CartContext for cart operations

### `src/pages/musu_modeliai/vandens_motociklai/vanduo.tsx`
- **Styles**:
- `./vanduo-specific.css`
- `../../global-page-styles/page-styles.css`
- **Components used**:
- `Carousel3D`
- `ProductCard` directly (not `ProductGrid`)
- **Data**: `shopifyAPI.getProducts({ query: 'product_type:Watercraft' })`

### `src/pages/product/ProductDetail.tsx` (NEW)
- **Styles**: `./ProductDetail.module.css` (CSS Modules)
- **Data**: `shopifyAPI.getProduct(handle)` for single product
- **Features**:
- Image gallery with thumbnails
- Product information and pricing
- Add to cart functionality (uses CartContext)
- Breadcrumb navigation
- Badge system (NEW, FEATURED tags)
- **UI**: Responsive layout, loading/error states

### `src/pages/cart/CartPage.tsx` (NEW)
- **Styles**: `./CartPage.module.css` (CSS Modules)
- **Features**:
- Full cart management (view, update quantities, remove items)
- Order summary with subtotal calculation
- Checkout integration with Shopify
- Loading and error states
- Empty cart handling
- **Data**: Uses CartContext for cart state and operations

## Components inventory

### Layout components (`src/components/layout`)
- **`ExploreYamaha.tsx`**
- Uses global hero/promo-card classes from `shared-components.css`
- Uses `LazyImage`
- **`HeroSection-Tailwind.tsx`**
- Tailwind hero section (used by home page and Electric Bikes page)
- Supports video background
- **`TestDrive.tsx`**
- Uses global classes (expected in shared/global CSS): `test-drive-section`, `container`, etc.
- Uses `LazyImage`
- **`ProductGrid.tsx`**
- Tailwind-heavy (grid layout, spacing, typography)
- Renders `ProductCard` (CSS module component)
- **`Section.tsx`**
- Simple section wrapper (currently not referenced by routes)

### Navigation (`src/components`)
- **`navbar.tsx`**
- Uses CSS Module: `navbar.module.css`
- Uses `MegaMenu`, `LanguageSwitcher`, and `CartIcon`
- Contains large hardcoded menu data structure (categories + placeholder products)
- **`MegaMenu.tsx`**
- Uses CSS Modules: `MegaMenu.module.css` + `navbar.module.css`
- JS-driven open/close; also toggles `document.body.classList` (`mega-menu-open`)
- **`language-switcher.tsx`**
- Uses global CSS classes defined in `src/index.css` (`language-switcher`, dropdown classes)
- Uses `flag-icons`
- **`ScrollToTop.tsx`**
- Router utility

### Cart components (`src/components/cart`) (NEW)
- **`CartIcon.tsx`**
- Uses CSS Module: `CartIcon.module.css`
- Displays cart item count as badge
- Links to cart page
- Integrates with CartContext

### Media utils
- **`LazyImage.tsx`**
- Used by multiple pages/components
- **`LazyVideo.tsx`**
- Used by hero sections/pages

### Shop components (`src/components/shop`)
- **`ProductCard.tsx`**
- Uses CSS Module: `ProductCard.module.css`
- Also uses Tailwind utility classes in markup
- Supports optional `onQuickView`, optional `onAddToCart`
- Integrates with CartContext for add to cart functionality
- **Note**: `Vanduo` page renders this directly; other pages typically use `ProductGrid`

### Carousel (`src/components/Carousel3D`)
- **`Carousel3D.tsx`**
- Uses Swiper + modules; imports `swiper/swiper-bundle.css`
- Uses CSS Module: `Carousel3D.module.css`
- **Export path**: `src/components/Carousel3D/index.ts`
- Note: there is also `Carousel3D.css.backup` (not used)

## Context and State Management (NEW)

### CartContext (`src/contexts/CartContext.tsx`)
- **Provider**: Wraps entire app in `App.tsx`
- **Features**:
- Cart state management with localStorage persistence
- Shopify cart integration (create, update, remove items)
- Checkout URL generation
- Loading and error states
- **Hooks**: `useCart()` for accessing cart functionality
- **API Integration**: Full Shopify Storefront API cart operations

## Styling system (what styles are used and where)

### Global stylesheet load order (important)
- `src/main.tsx` imports:
- `src/index.css`
- `src/App-global.css`
- `src/index.css` imports:
- `flag-icons` stylesheet
- Google Fonts (Play)
- `src/components/shared-components.css`
- Tailwind layers (`@tailwind base/components/utilities`)
- `src/App-global.css` imports:
- `src/components/shared-components.css` (duplicated import)

### Global CSS files
- **`src/index.css`**
- reset + CSS variables + base typography
- language switcher dropdown styles
- includes Tailwind layers
- **`src/components/shared-components.css`**
- shared layout primitives: `.main-content`, `.hero-section`, hero content blocks, promo cards, `.container`, CTA buttons, etc.
- used by Home and most non-tailwind pages (via shared classNames)
- **`src/pages/global-page-styles/page-styles.css`**
- overrides shared hero/page layout for pages that need full-screen section stacking
- contains many `!important` overrides for `.page .main-content`, section resets, hero positioning

### Page-level CSS files
- `src/pages/apie-mus/apie-mus.css`
- `src/pages/servisas/servisas.css`
- `src/pages/daliu-katalogas/daliu-katalogas.css`
- `src/pages/kontaktai/kontaktai.css`
- `src/pages/priedai-aksesuarai/priedai-aksesuarai.css`
- `src/pages/kelias/kelias-specific.css` (+ imports global `page-styles.css`)
- `src/pages/bekele/bekele-specific.css` (+ imports global `page-styles.css`)
- `src/pages/musu_modeliai/vandens_motociklai/vanduo-specific.css` (+ imports global `page-styles.css`)
- `src/pages/musu_modeliai/el-dviraciai/el-dviraciai-specific.css` exists but is not imported by the current `el-dviraciai.tsx` (Tailwind page)

### CSS Modules (scoped)
- `src/components/shop/ProductCard.module.css`
- `src/components/Carousel3D/Carousel3D.module.css`
- `src/components/navbar.module.css`
- `src/components/MegaMenu.module.css`
- `src/components/cart/CartIcon.module.css` (NEW)
- `src/pages/cart/CartPage.module.css` (NEW)
- `src/pages/product/ProductDetail.module.css` (NEW)

### Tailwind usage
- Tailwind is enabled globally (see `src/index.css` + `tailwind.config.js`).
- Components currently using Tailwind heavily:
- `src/components/layout/ProductGrid.tsx`
- `src/pages/musu_modeliai/el-dviraciai/el-dviraciai.tsx`
- `src/components/shop/ProductCard.tsx` (mix of CSS modules + Tailwind)
- `src/pages/product/ProductDetail.tsx` (mix of CSS modules + Tailwind)
- `src/pages/cart/CartPage.tsx` (CSS modules only)
- `src/pages/shop/ShopPage.tsx` (Tailwind only) (NEW)

## Data / Shopify
- **File**: `src/lib/shopify.ts`
- Has a dev mode when `VITE_SHOPIFY_STORE_DOMAIN` is missing or is `your-store.myshopify.com`
- Contains mock products for local development
- **API Methods**:
- `getProducts()` - Product listing with filtering
- `getProduct()` - Single product by handle
- `createCart()` - Create new shopping cart
- `addToCart()` - Add items to existing cart
- `getCart()` - Retrieve cart by ID
- `createCheckout()` - Generate checkout URL
- Used by multiple pages and CartContext

## E-commerce Features (NEW)
- **Shopping Cart**: Full-featured cart with CartContext
- **Product Detail Pages**: Individual product pages with add to cart
- **Checkout Integration**: Shopify checkout URL generation
- **Cart Persistence**: localStorage for cart ID persistence
- **Product Variants**: Support for product variants and inventory
- **Product Tags**: Badge system for NEW/FEATURED products

## Known hotspots / "where we are at"
- **Mixed styling approaches**: global CSS + page CSS + CSS Modules + Tailwind all in use.
- **Potential duplication**: `shared-components.css` is imported by both `index.css` and `App-global.css`.
- **Global overrides**: `page-styles.css` overrides shared classes with `!important` and can create cross-page coupling.
- **Routed pages not using `.page` wrapper**: `page-styles.css` targets `.page ...` selectors, but current pages mostly use wrappers like `.kelias`, `.bekele`, `.vanduo`, etc. (so some overrides may not apply unless those pages also add `.page`).
- **Shop patterns**:
- Some pages use `ProductGrid` (Tailwind grid + ProductCard)
- `Vanduo` uses `ProductCard` directly
- New pages use CSS Modules consistently
- **Navigation**: navbar categories are hardcoded placeholder data; actual route coverage is partial.
- **Cart Implementation**: CartContext provides full cart functionality but some operations (cartLinesUpdate, cartLinesRemove) are implemented via cart recreation for simplicity.

## Next actions (suggested)
- **Decide styling direction**:
- keep Tailwind-first and migrate pages gradually, or
- move shared styles into CSS Modules to reduce conflicts
- **Normalize page wrapper conventions**:
- either add a consistent wrapper class (`page`) to pages that rely on `page-styles.css`, or
- refactor `page-styles.css` selectors to match actual wrappers (`.kelias`, `.bekele`, etc.)
- **Reduce global coupling**:
- remove duplicate import of `shared-components.css` (after verifying no order dependence)
- avoid `!important` where possible
- **E-commerce enhancements**:
- Implement proper Shopify cart mutations (cartLinesUpdate, cartLinesRemove)
- Add quick view modal functionality
- Implement order history and customer accounts
- Add product filtering and search improvements
- **Navigation improvements**:
- Update navbar hardcoded menu data to reflect actual routes
- Add cart icon to navbar (currently missing)
- Implement proper mobile navigation
