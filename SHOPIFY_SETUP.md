# Shopify Integration Setup Guide

## Overview
This guide will help you set up Shopify e-commerce integration for your Yamaha website, enabling sales of motorcycles, parts, and accessories.

This project already contains a working Storefront API integration with a mock fallback (so the shop pages work before a Shopify store is created).

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
- `Watercraft` - Jet skis / WaveRunners / outboard motors

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

Additional pages now pulling products from Shopify (or mock data when Shopify is not configured):

src/pages/
├── daliu-katalogas/            # Parts page (product_type:Parts)
├── priedai-aksesuarai/         # Accessories page (product_type:Accessories)
├── el-dviraciai/               # E-bikes page (product_type:"Electric Bike")
└── vanduo/                     # Watercraft/jetski page (product_type:Watercraft)
```

## Integration Points with Existing Pages

- **`/daliu-katalogas`** → Can embed Shopify parts catalog
- **`/priedai-aksesuarai`** → Can show accessories from Shopify
- **`/el-dviraciai`** → Can show e-bikes from Shopify
- **`/vanduo`** → Can show jetski/watercraft products from Shopify
- **Motorcycle detail pages** → Add "Buy Now" buttons
- **Navigation** → Add "Shop" link to main menu

## Current Status (What you already have)

1. Product browsing via Storefront API (`src/lib/shopify.ts`)
2. Mock data fallback when Shopify credentials are missing
3. Product listing UI (`ProductCard`)
4. Shop page with filtering/sorting/search (`/shop`)
5. Product sections on:
   - `/daliu-katalogas` (Parts)
   - `/priedai-aksesuarai` (Accessories)
   - `/el-dviraciai` (Electric Bike)
   - `/vanduo` (Watercraft)

## Missing (Next Phase)

1. Product detail page route and UI
   - Current ProductCard links to `/product/{handle}` but no route/page exists yet
2. Cart functionality
   - Add/remove items, quantity, persistence (localStorage)
3. Checkout
   - Create cart in Shopify + redirect to Shopify checkout URL
4. Optional: customer accounts, order history

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



###### real deal  not scam 

1. The Right Shopify Plan
Basic or Shopify Plan: Both support headless commerce. The "Shopify" plan is better for "growth" as it offers lower transaction fees and better reporting, but the Storefront API (which connects your React app to Shopify) is included in all plans at no extra cost.
Shopify Plus: Only needed if you require massive scale, 10x higher API rate limits, or a fully customized checkout page. 
Sleepless Media
Sleepless Media
 +4
2. Mandatory Setup Steps
To connect your Vite + React frontend to Shopify, follow these steps:
Install the "Headless" Channel: In your Shopify Admin, go to Settings > Apps and sales channels and install the official Shopify Headless channel.
Generate API Tokens:
Public Access Token: Use this in your React frontend to fetch products and collections.
Private Access Token: Use this only if you have a server-side component (like a Node.js backend or SSR).
Configure API Scopes: Ensure you check the permissions for "unauthenticated" access to products, collections, and checkouts so your frontend can read this data. 
Shopify Dev Docs
Shopify Dev Docs
 +4
3. Technical Requirements for Your React/Vite App
GraphQL Client: Shopify's Storefront API uses GraphQL. You will need a library like Apollo Client or urql to fetch your data.
The Checkout Flow: On standard plans, your React app will handle the cart, but when the user clicks "Checkout," you must redirect them to the Shopify-hosted checkout URL generated by the API.
Hosting: Since you aren't using Shopify's themes, you must host your Vite app elsewhere. Popular choices include Vercel, Netlify, or Shopify's own Oxygen hosting (though Oxygen is primarily for their "Hydrogen" framework). 
Shopify Community
Shopify Community
 +3
4. Summary Checklist
Shopify Store: Active (Basic or higher).
Headless Channel: Installed in Shopify Admin.
Storefront API Token: Generated and added to your .env file.
GraphQL Queries: Written to fetch your products and collections. 
Shopify Community
Shopify Community
 +4