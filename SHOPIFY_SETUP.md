# Shopify Integration Setup Guide

## Overview
This guide will help you set up Shopify e-commerce integration for your Yamaha website, enabling sales of motorcycles, parts, and accessories.

## Prerequisites
- Shopify store account
- Admin access to Shopify store
- Node.js and npm installed

## Step 1: Install Dependencies

```bash
npm install @shopify/storefront-api-client
```

## Step 2: Create Shopify App

1. Go to **Shopify Admin** → **Settings** → **Apps and sales channels** → **Develop apps**
2. Click **Create an app**
3. Enter app name (e.g., "Yamaha Website Storefront")
4. Select app developer (your email)
5. Configure **Storefront API permissions**:
   - ✅ read_products
   - ✅ read_product_listings
   - ✅ read_product_inventory
   - ✅ read_product_tags
   - ✅ read_product_publishing

## Step 3: Get API Credentials

1. In your app settings, go to **API credentials**
2. Copy the **Storefront API public access token**
3. Note your **Store domain** (format: your-store-name.myshopify.com)

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in your actual values:
```
VITE_SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN=your-public-storefront-api-token
```

## Step 5: Product Organization in Shopify

### Product Types (use exactly these):
- `Motorcycle` - Complete motorcycles
- `Parts` - Spare parts and components
- `Accessories` - Gear, equipment, accessories
- `Electric Bike` - Electric bicycles

### Tags for better filtering:
- `new`, `used`, `sale`, `featured`
- `sport`, `cruiser`, `off-road`, `touring`
- `oem`, `aftermarket`
- `helmet`, `jacket`, `gloves`, `boots`

### Collections to create:
- **Motorcycles** - All complete bikes
- **Parts & Spares** - Components and replacement parts
- **Riding Gear** - Helmets, jackets, gloves, boots
- **Accessories** - Luggage, electronics, maintenance
- **Electric Bikes** - E-bicycle category

## Step 6: Product Data Requirements

For each product, ensure you have:
- **Title**: Clear, descriptive name
- **Description**: Detailed specifications
- **Product Type**: One of the types above
- **Images**: High-quality photos (multiple angles)
- **Price**: Competitive pricing
- **Inventory**: Accurate stock levels
- **Weight**: For shipping calculations
- **Tags**: Relevant categories and features

## Step 7: Testing the Integration

1. Start your development server:
```bash
npm run dev
```

2. Navigate to `/shop` to see the product catalog
3. Test search, filtering, and product display

## Step 8: Cart and Checkout (Next Phase)

The current implementation includes product browsing. For full e-commerce functionality, you'll need to implement:

1. **Shopping Cart** - Local storage or state management
2. **Checkout Integration** - Shopify Checkout API or web URLs
3. **Order Management** - Order status and history
4. **Customer Accounts** - User authentication

## File Structure Created

```
src/
├── lib/
│   └── shopify.ts              # Shopify API client and queries
├── components/shop/
│   └── ProductCard.tsx         # Product display component
├── pages/shop/
│   └── ShopPage.tsx           # Main shop page with filtering
.env.example                    # Environment variables template
```

## Integration Points with Existing Pages

- **`/daliu-katalogas`** → Can embed Shopify parts catalog
- **`/priedai-aksesuarai`** → Can show accessories from Shopify
- **Motorcycle detail pages** → Add "Buy Now" buttons
- **Navigation** → Add "Shop" link to main menu

## Next Steps

1. Complete Shopify store setup and product migration
2. Install dependencies and configure environment
3. Test the basic product catalog functionality
4. Implement shopping cart and checkout flow
5. Add product detail pages
6. Integrate with existing pages for seamless experience

## Support Resources

- [Shopify Storefront API Documentation](https://shopify.dev/docs/api/storefront)
- [Storefront API Client GitHub](https://github.com/Shopify/shopify-app-js/tree/main/packages/api-clients/storefront-api-client)
- [React Integration Examples](https://github.com/Shopify/storefront-api-examples)
