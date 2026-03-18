# Yamaha Website Architecture Audit

## Overview
Complete visual and architectural audit of all pages with recommendations for improvements.

---

## ✅ What's Good

### 1. **Component Architecture**
- Clean separation: components vs pages
- Reusable components (`ProductCard`, `LazyImage`, `LazyVideo`)
- Proper TypeScript usage
- Internationalization (`useTranslation`) consistently applied

### 2. **Shopify Integration**
- Mock fallback works without Shopify credentials
- Clean API abstraction in `shopify.ts`
- Product pages already integrated (`daliu-katalogas`, `priedai-aksesuarai`, `el-dviraciai`, `vanduo`)
- Proper loading/error states

### 3. **Navigation Structure**
- Logical Lithuanian URL structure
- Clear page hierarchy
- Mobile-responsive navigation

### 4. **Content Organization**
- Each page has proper hero section
- Consistent section structure (hero → content → CTA)
- Good information hierarchy

---

## ⚠️ Issues Found

### 1. **Visual Inconsistencies**
- **Hero images**: Most pages use generic `/src/assets/hero.png`
- **Missing images**: Many references to non-existent assets (`/src/assets/models/`, `/src/assets/icons/`)
- **Inconsistent styling**: Mix of inline styles and CSS classes

### 2. **Architecture Problems**
- **Hardcoded product data**: `kelias.tsx` and `bekele.tsx` still have hardcoded model cards
- **Duplicate functionality**: Multiple pages with similar patterns but different implementations
- **Missing routes**: Dead links to non-existent pages (`/motociklai/sport`, `/mūsų-istorija`, etc.)

### 3. **User Experience Issues**
- **Forms**: No form submission handling (service, contact forms)
- **CTA buttons**: Most buttons are non-functional
- **Product links**: "View Details" buttons go to `/product/{handle}` but no route exists

### 4. **Content Gaps**
- **Missing actual images**: All product images are placeholders
- **Inconsistent contact info**: Different phone numbers across pages
- **Social links**: Point to generic URLs, not actual Yamaha LT accounts

---

## 🎯 Recommended Architecture Changes

### Phase 1: Visual Consistency (High Priority)

#### 1.1 Create Shared Layout Components
```tsx
// src/components/layout/
├── PageHero.tsx          // Reusable hero with image, title, subtitle
├── SectionContainer.tsx  // Consistent container with padding
├── ContactSection.tsx    // Standardized contact info
└── CTASection.tsx       // Reusable call-to-action blocks
```

#### 1.2 Fix Hero Images
- Create actual hero images for each category
- Use consistent naming: `hero-{category}.jpg`
- Update all pages to use `PageHero` component

#### 1.3 Standardize Product Cards
- Replace hardcoded model cards with `ProductCard` everywhere
- Add Shopify integration to `kelias.tsx` and `bekele.tsx`
- Create category-specific product fetching

### Phase 2: Missing Routes & Pages (High Priority)

#### 2.1 Add Missing Routes
```tsx
// Add to App.tsx
<Route path="/product/:handle" element={<ProductDetailPage />} />
<Route path="/motociklai/:category" element={<MotorcycleCategoryPage />} />
<Route path="/mūsų-istorija" element={<OurHistoryPage />} />
<Route path="/karjera" element={<CareerPage />} />
<Route path="/akademija" element={<AcademyPage />} />
<Route path="/tapti-prekybininku" element={<BecomeDealerPage />} />
```

#### 2.2 Create Product Detail Page
```tsx
// src/pages/product/ProductDetailPage.tsx
- Full product details from Shopify
- Image gallery
- Variant selection
- Add to cart functionality
- Related products
```

#### 2.3 Category Pages
```tsx
// src/pages/motorcycles/[category].tsx
- Filtered product listings
- Category-specific content
- Comparison tools
```

### Phase 3: Functionality (Medium Priority)

#### 3.1 Form Handling
```tsx
// src/components/forms/
├── ContactForm.tsx
├── ServiceBookingForm.tsx
├── TestDriveForm.tsx
└── NewsletterForm.tsx
```

#### 3.2 Cart & Checkout
```tsx
// src/components/cart/
├── CartProvider.tsx       // Context for cart state
├── CartIcon.tsx          // Header cart indicator
├── CartPage.tsx          // Full cart view
└── CheckoutButton.tsx    // Shopify checkout integration
```

#### 3.3 Interactive Features
- Product comparison
- Wishlist functionality
- Dealer locator
- Financing calculator

### Phase 4: Performance & SEO (Medium Priority)

#### 4.1 Image Optimization
- Implement proper image optimization
- Add alt tags consistently
- Use WebP format where supported

#### 4.2 SEO Improvements
```tsx
// Add meta tags for each page
// Implement structured data
// Add breadcrumbs
// Optimize page titles
```

#### 4.3 Performance
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

| Feature | Impact | Effort | Priority |
|---------|--------|--------|----------|
| Fix missing images | High | Low | 🔴 Critical |
| Add product detail pages | High | Medium | 🔴 Critical |
| Create layout components | Medium | Low | 🟡 High |
| Add missing routes | High | Medium | 🟡 High |
| Form handling | Medium | Medium | 🟡 High |
| Cart functionality | High | High | 🟢 Medium |
| Category pages | Medium | Medium | 🟢 Medium |
| Performance optimization | Medium | High | 🟢 Low |
| SEO improvements | Low | Medium | 🟢 Low |

---

## 🚀 Implementation Plan

### Week 1: Critical Fixes
1. Fix all missing/broken images
2. Create `PageHero` component
3. Add product detail page route
4. Replace hardcoded product cards with Shopify

### Week 2: Layout & Navigation
1. Create layout components
2. Add missing routes
3. Implement category pages
4. Fix navigation links

### Week 3: Functionality
1. Add form handling
2. Implement cart functionality
3. Add product detail page
4. Connect all CTA buttons

### Week 4: Polish & Performance
1. SEO improvements
2. Performance optimization
3. Testing & bug fixes
4. Documentation updates

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

## 🔧 Technical Debt

### 1. **CSS Organization**
- Consolidate scattered CSS files
- Implement CSS-in-JS or styled components
- Create design system

### 2. **State Management**
- Implement proper state management for cart
- Add loading/error states globally
- Optimize re-renders

### 3. **Type Safety**
- Add more strict TypeScript types
- Remove any types where possible
- Add proper error handling

---

## 📈 Success Metrics

### Before Changes
- Broken links: ~15
- Missing images: ~20
- Non-functional CTAs: ~30
- Page load time: ~3s

### After Changes (Target)
- Broken links: 0
- Missing images: 0
- Functional CTAs: 100%
- Page load time: <2s
- Conversion rate: +25%

---

## 🎯 Next Steps

1. **Immediate (This Week)**
   - Fix all missing images
   - Create PageHero component
   - Add product detail page

2. **Short Term (Next 2 Weeks)**
   - Implement layout components
   - Add missing routes
   - Replace hardcoded products

3. **Medium Term (Next Month)**
   - Add cart functionality
   - Implement forms
   - Performance optimization

4. **Long Term (Next Quarter)**
   - Advanced features
   - A/B testing
   - Analytics integration

---

## 📝 Notes

- All changes should maintain existing Lithuanian content
- Keep current URL structure for SEO
- Maintain i18n support throughout
- Test thoroughly on mobile devices
- Consider accessibility in all changes
