# Yamaha Website Architecture Audit

## Overview
Complete visual and architectural audit of all pages with recommendations for improvements.

**Last Updated:** March 20, 2026
**Audit Status:** In Progress - Significant improvements implemented since initial audit

---

## ✅ What's Good

### 1. **Component Architecture**
- Clean separation: components vs pages
- Reusable components (`ProductCard`, `LazyImage`, `LazyVideo`)
- Proper TypeScript usage
- Internationalization (`useTranslation`) consistently applied

### 2. **Shopify Integration**
- ✅ **Mock fallback works without Shopify credentials** - Comprehensive mock data with 14 products
- ✅ **Clean API abstraction in `shopify.ts`** - Full GraphQL queries and filtering support
- ✅ **Product pages integrated** - `daliu-katalogas`, `priedai-aksesuarai`, `el-dviraciai`, `vanduo`
- ✅ **Proper loading/error states** - Skeleton loaders and error handling implemented
- ✅ **Advanced filtering** - Category, search, and sorting functionality
- ✅ **Product tags system** - Road/off-road categorization with featured products

### 3. **Navigation Structure**
- ✅ **Logical Lithuanian URL structure** - Clean, SEO-friendly paths
- ✅ **Clear page hierarchy** - Proper categorization by product type
- ✅ **Mobile-responsive navigation** - Dropdown menus and hamburger menu
- ⚠️ **Dead links remain** - Many navigation items point to non-existent pages

### 4. **Content Organization**
- ✅ **Each page has proper hero section** - Video backgrounds and consistent styling
- ✅ **Consistent section structure** - hero → content → CTA pattern
- ✅ **Good information hierarchy** - Clear typography and spacing
- ✅ **3D Carousel implementation** - Advanced UI component for category selection

---

## ⚠️ Issues Found

### 1. **Visual Inconsistencies**
- ✅ **Hero images**: Most pages now use video backgrounds instead of static images
- ⚠️ **Missing images**: Many references to non-existent assets (`/src/assets/models/`, `/src/assets/icons/`)
- ⚠️ **Inconsistent styling**: Mix of inline styles and CSS classes remains
- ⚠️ **Asset organization**: Only 7 actual assets in `/src/assets/` vs many references

### 2. **Architecture Problems**
- ✅ **Hardcoded product data**: `kelias.tsx` and `bekele.tsx` now use Shopify API with proper filtering
- ⚠️ **Duplicate functionality**: Multiple pages with similar patterns but different implementations
- ⚠️ **Missing routes**: Dead links to non-existent pages (`/motociklai/sport`, `/mūsų-istorija`, etc.)
- ⚠️ **No product detail pages**: `/product/:handle` route still missing

### 3. **User Experience Issues**
- ⚠️ **Forms**: No form submission handling (service, contact forms)
- ⚠️ **CTA buttons**: Most buttons are non-functional
- ❌ **Product links**: "View Details" buttons go to `/product/{handle}` but no route exists
- ✅ **Loading states**: Skeleton loaders implemented throughout
- ✅ **Error handling**: Proper error states and retry functionality

### 4. **Content Gaps**
- ⚠️ **Missing actual images**: All product images use placeholders or Unsplash URLs
- ⚠️ **Inconsistent contact info**: Different phone numbers across pages
- ⚠️ **Social links**: Point to generic URLs, not actual Yamaha LT accounts
- ✅ **Mock data quality**: Comprehensive Lithuanian descriptions and realistic pricing

---

## 📊 Current Implementation Status

### ✅ Completed Since Last Audit
1. **Shopify Integration**
   - Full mock data system with 14 realistic products
   - Advanced filtering by category, tags, and search
   - Lithuanian product descriptions and pricing
   - Proper error handling and loading states

2. **Dynamic Product Pages**
   - `kelias.tsx` - Road motorcycles with Shopify integration
   - `bekele.tsx` - Off-road motorcycles with Shopify integration
   - `daliu-katalogas.tsx` - Parts catalog with search functionality
   - All pages use ProductCard component consistently

3. **Advanced UI Components**
   - 3D Carousel for category selection
   - Skeleton loaders for better UX
   - Video hero backgrounds
   - Responsive design improvements

4. **Code Quality**
   - TypeScript throughout
   - Proper error boundaries
   - Consistent component structure
   - Internationalization support

### ⚠️ In Progress
1. **Missing Routes** - Product detail pages, category pages
2. **Form Functionality** - Contact forms, service booking
3. **Asset Management** - Missing product images and icons
4. **Navigation Cleanup** - Remove dead links

### ❌ Not Started
1. **Cart System** - Full e-commerce functionality
2. **User Accounts** - Customer authentication
3. **Payment Integration** - Checkout process
4. **Admin Panel** - Content management

---

## 🎯 Recommended Architecture Changes

### Phase 1: Critical Missing Routes (URGENT)

#### 1.1 Add Product Detail Page Route
```tsx
// Add to App.tsx
<Route path="/product/:handle" element={<ProductDetailPage />} />
```

#### 1.2 Create Product Detail Page
```tsx
// src/pages/product/ProductDetailPage.tsx
- Full product details from Shopify
- Image gallery with zoom
- Variant selection
- Add to cart functionality
- Related products
- Breadcrumb navigation
```

#### 1.3 Add Category Pages
```tsx
// src/pages/motorcycles/[category].tsx
- Filtered product listings
- Category-specific content
- Comparison tools
- Sorting options
```

### Phase 2: Layout Components (High Priority)
```tsx
// src/components/layout/
├── PageHero.tsx          // Reusable hero with image, title, subtitle
├── SectionContainer.tsx  // Consistent container with padding
├── ContactSection.tsx    // Standardized contact info
└── CTASection.tsx       // Reusable call-to-action blocks
```

#### 2.2 Fix Asset Organization
- Create actual product images for each category
- Use consistent naming: `hero-{category}.jpg`
- Update all pages to use `PageHero` component
- Remove references to non-existent assets

#### 2.3 Standardize Remaining Components
- Replace any remaining hardcoded content
- Add consistent styling patterns
- Implement responsive design system

### Phase 3: Missing Routes & Pages (High Priority)

#### 3.1 Add Missing Routes
```tsx
// Add to App.tsx
<Route path="/motociklai/:category" element={<MotorcycleCategoryPage />} />
<Route path="/mūsų-istorija" element={<OurHistoryPage />} />
<Route path="/karjera" element={<CareerPage />} />
<Route path="/akademija" element={<AcademyPage />} />
<Route path="/tapti-prekybininku" element={<BecomeDealerPage />} />
// Remove dead links from navbar
```

#### 3.2 Create Company Pages
```tsx
// src/pages/company/
├── istorija.tsx          // Company history
├── karjera.tsx           // Career opportunities
├── akademija.tsx         // Yamaha academy
└── tapti-prekybininku.tsx // Become dealer
```

#### 3.3 Category Pages
```tsx
// src/pages/motorcycles/[category].tsx
- Filtered product listings
- Category-specific content
- Comparison tools
```

### Phase 4: Functionality (Medium Priority)

#### 4.1 Form Handling
```tsx
// src/components/forms/
├── ContactForm.tsx
├── ServiceBookingForm.tsx
├── TestDriveForm.tsx
└── NewsletterForm.tsx
```

#### 4.2 Cart & Checkout
```tsx
// src/components/cart/
├── CartProvider.tsx       // Context for cart state
├── CartIcon.tsx          // Header cart indicator
├── CartPage.tsx          // Full cart view
└── CheckoutButton.tsx    // Shopify checkout integration
```

#### 4.3 Interactive Features
- Product comparison
- Wishlist functionality
- Dealer locator
- Financing calculator

### Phase 5: Performance & SEO (Low Priority)

#### 5.1 Image Optimization
- Implement proper image optimization
- Add alt tags consistently
- Use WebP format where supported

#### 5.2 SEO Improvements
```tsx
// Add meta tags for each page
// Implement structured data
// Add breadcrumbs
// Optimize page titles
```

#### 5.3 Performance
- Lazy loading for images
- Code splitting for large pages
- Optimize bundle size

---

## 🏗️ Proposed File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── PageHero.tsx
│   │   ├── SectionContainer.tsx
│   │   ├── ContactSection.tsx
│   │   └── CTASection.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── ServiceBookingForm.tsx
│   │   └── TestDriveForm.tsx
│   ├── cart/
│   │   ├── CartProvider.tsx
│   │   ├── CartIcon.tsx
│   │   └── CartPage.tsx
│   └── shop/
│       ├── ProductCard.tsx
│       ├── ProductDetailPage.tsx
│       └── CategoryPage.tsx
├── pages/
│   ├── product/
│   │   └── [handle].tsx
│   ├── motorcycles/
│   │   └── [category].tsx
│   ├── company/
│   │   ├── istorija.tsx
│   │   ├── karjera.tsx
│   │   ├── akademija.tsx
│   │   └── tapti-prekybininku.tsx
│   └── [existing-pages]/
├── hooks/
│   ├── useShopify.ts
│   ├── useCart.ts
│   └── useForms.ts
└── utils/
    ├── constants.ts
    ├── helpers.ts
    └── validators.ts
```

---

## 📊 Priority Matrix

| Feature | Impact | Effort | Priority | Status |
|---------|--------|--------|----------|---------|
| Add product detail pages | High | Medium | 🔴 Critical | ❌ Not Started |
| Fix dead navigation links | High | Low | 🔴 Critical | ❌ Not Started |
| Create missing company pages | Medium | Medium | 🟡 High | ❌ Not Started |
| Fix missing images | Medium | High | 🟡 High | ⚠️ In Progress |
| Create layout components | Medium | Low | 🟡 High | ❌ Not Started |
| Add form handling | Medium | Medium | 🟡 High | ❌ Not Started |
| Add category pages | Medium | Medium | 🟢 Medium | ❌ Not Started |
| Cart functionality | High | High | 🟢 Medium | ❌ Not Started |
| Performance optimization | Medium | High | 🟢 Low | ✅ Good |
| SEO improvements | Low | Medium | 🟢 Low | ✅ Good |

---

## 🚀 Updated Implementation Plan

### Week 1: Critical Fixes (Immediate)
1. **Add product detail page route** - Fix broken "View Details" buttons
2. **Create ProductDetailPage component** - Enable product viewing
3. **Remove dead navigation links** - Clean up navbar
4. **Add missing company pages** - istorija, karjera, akademija

### Week 2: Layout & Assets
1. **Create layout components** - PageHero, SectionContainer
2. **Fix asset organization** - Add missing images, remove broken references
3. **Implement category pages** - /motociklai/:category routes
4. **Standardize styling** - Remove inline styles

### Week 3: Functionality
1. **Add form handling** - Contact, service, test drive forms
2. **Implement cart functionality** - Basic cart state management
3. **Connect remaining CTAs** - Make all buttons functional
4. **Add search functionality** - Site-wide product search

### Week 4: Polish & Launch
1. **Final testing** - Cross-browser, mobile, accessibility
2. **Performance optimization** - Image lazy loading, code splitting
3. **SEO implementation** - Meta tags, structured data
4. **Documentation** - Update README, add deployment guide

---

## 🎨 Visual Improvements Needed

### 1. **Hero Sections**
- Replace generic hero.png with category-specific images
- Add subtle animations
- Improve mobile responsiveness

### 2. **Product Cards**
- Standardize sizing and layout
- Add hover effects
- Include badges (new, sale, featured)

### 3. **Forms**
- Improve validation
- Add loading states
- Better error handling

### 4. **Navigation**
- Add mega menu for product categories
- Improve mobile menu
- Add search functionality

---

## 📱 Mobile Optimizations

### Issues Found
- Some sections not optimized for mobile
- Touch targets too small
- Horizontal scrolling on some pages

### Recommendations
- Implement responsive design system
- Add touch-friendly interactions
- Optimize images for mobile
- Test on various devices

---

## 🔧 Technical Debt Assessment

### ✅ Resolved Issues
1. **Shopify Integration** - Clean API abstraction with proper error handling
2. **Component Architecture** - Well-structured, reusable components
3. **TypeScript Usage** - Proper typing throughout the application
4. **Internationalization** - Consistent i18n implementation

### ⚠️ Remaining Technical Debt
1. **CSS Organization**
   - Multiple CSS files without clear organization strategy
   - Mix of Tailwind classes and custom CSS
   - Inline styles still present in some components

2. **Missing Error Boundaries**
   - No global error handling for component failures
   - Limited error recovery mechanisms

3. **State Management**
   - No centralized state management for cart/user data
   - Component-level state only

4. **Testing**
   - No unit tests found
   - No integration tests for critical flows

### 🎯 Technical Debt Priority
| Issue | Impact | Effort | Priority |
|-------|--------|--------|----------|
| CSS Organization | Medium | Medium | 🟡 High |
| Error Boundaries | High | Low | 🟡 High |
| State Management | High | High | 🟢 Medium |
| Testing Suite | Medium | High | 🟢 Low |

---

## 📈 Updated Success Metrics

### Before Changes (Original Audit)
- Broken links: ~15
- Missing images: ~20
- Non-functional CTAs: ~30
- Hardcoded products: 2 pages
- No product detail pages: 0

### Current Status (March 2026)
- ✅ Broken links: ~10 (navigation dead links remain)
- ⚠️ Missing images: ~15 (better placeholders, still missing assets)
- ✅ Non-functional CTAs: ~25 (product CTAs work, detail pages missing)
- ✅ Hardcoded products: 0 (all pages use Shopify API)
- ❌ Product detail pages: 0 (route missing)

### After Changes (Target)
- Broken links: 0
- Missing images: 0
- Functional CTAs: 100%
- Product detail pages: 100%
- Form submissions: Working
- Page load time: <2s
- Conversion rate: +25%

---

## 🎯 Updated Next Steps

### Immediate (This Week)
- **🔴 URGENT**: Add product detail page route and component
- **🔴 URGENT**: Remove dead navigation links from navbar
- **🟡 HIGH**: Create missing company pages (istorija, karjera)
- **🟡 HIGH**: Fix asset references and add missing images

### Short Term (Next 2 Weeks)
- Implement layout components for consistency
- Add category pages (/motociklai/:category)
- Create form handling components
- Standardize styling across all pages

### Medium Term (Next Month)
- Add cart functionality and checkout
- Implement advanced search features
- Add user account system
- Performance optimization and SEO

### Long Term (Next Quarter)
- Advanced features (comparison, wishlist)
- A/B testing framework
- Analytics integration
- Admin panel for content management

---

## 📝 Updated Notes

### Development Guidelines
- ✅ All changes should maintain existing Lithuanian content
- ✅ Keep current URL structure for SEO
- ✅ Maintain i18n support throughout
- ✅ Use existing Shopify API pattern for new features
- ✅ Follow established component structure

### Current Technical Stack
- **Frontend**: React 19.2.4 + TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Routing**: React Router DOM 7.13.1
- **E-commerce**: Shopify Storefront API (mock)
- **UI Components**: Headless UI, Lucide Icons
- **Animations**: Framer Motion, Swiper
- **Forms**: React Hook Form
- **Testing**: Vitest + Testing Library (configured but no tests)

### Deployment Considerations
- Environment variables configured for Shopify integration
- Build process optimized with Vite
- Static asset serving needs improvement
- CDN configuration recommended for production

### Accessibility & Performance
- ✅ Semantic HTML structure maintained
- ✅ ARIA labels present in navigation
- ⚠️ Image alt tags need improvement
- ✅ Mobile-responsive design implemented
- ⚠️ Page load speed can be improved with image optimization
