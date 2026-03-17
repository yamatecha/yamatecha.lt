// Shopify Storefront API Client Configuration
import { createStorefrontApiClient } from '@shopify/storefront-api-client'

// Development mode - mock data since no Shopify store yet
const isDevelopment = !import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || 
                      import.meta.env.VITE_SHOPIFY_STORE_DOMAIN === 'your-store.myshopify.com'

// Mock data for development
const mockProducts: Product[] = [
  {
    id: 'gid://shopify/Product/1',
    title: 'Yamaha MT-07 2024',
    description: 'The perfect blend of performance and style. The MT-07 features a 689cc CP2 engine with exceptional torque and lightweight chassis.',
    vendor: 'Yamaha',
    productType: 'Motorcycle',
    handle: 'yamaha-mt-07-2024',
    priceRange: {
      minVariantPrice: {
        amount: '8999.00',
        currencyCode: 'EUR'
      }
    },
    images: {
      nodes: [
        {
          url: 'https://images.unsplash.com/photo-1558980664-27a961535bad?w=400&h=300&fit=crop',
          altText: 'Yamaha MT-07 in dark blue'
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/1',
          title: 'Default Title',
          price: '8999.00',
          availableForSale: true
        }
      ]
    }
  },
  {
    id: 'gid://shopify/Product/2',
    title: 'Yamaha YZF-R3 2024',
    description: 'Entry-level sport bike with racing DNA. Features a 321cc inline twin engine and aggressive supersport styling.',
    vendor: 'Yamaha',
    productType: 'Motorcycle',
    handle: 'yamaha-yzf-r3-2024',
    priceRange: {
      minVariantPrice: {
        amount: '6499.00',
        currencyCode: 'EUR'
      }
    },
    images: {
      nodes: [
        {
          url: 'https://images.unsplash.com/photo-1558980664-27a961535bad?w=400&h=300&fit=crop',
          altText: 'Yamaha YZF-R3 in racing blue'
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/2',
          title: 'Default Title',
          price: '6499.00',
          availableForSale: true
        }
      ]
    }
  },
  {
    id: 'gid://shopify/Product/3',
    title: 'Yamaha Oil Filter',
    description: 'Genuine Yamaha oil filter for optimal engine protection and performance.',
    vendor: 'Yamaha',
    productType: 'Parts',
    handle: 'yamaha-oil-filter',
    priceRange: {
      minVariantPrice: {
        amount: '12.99',
        currencyCode: 'EUR'
      }
    },
    images: {
      nodes: [
        {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
          altText: 'Yamaha oil filter'
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/3',
          title: 'Standard Size',
          price: '12.99',
          availableForSale: true
        }
      ]
    }
  },
  {
    id: 'gid://shopify/Product/4',
    title: 'Yamaha Racing Helmet',
    description: 'Professional racing helmet with advanced safety features and aerodynamic design.',
    vendor: 'Yamaha',
    productType: 'Accessories',
    handle: 'yamaha-racing-helmet',
    priceRange: {
      minVariantPrice: {
        amount: '299.99',
        currencyCode: 'EUR'
      }
    },
    images: {
      nodes: [
        {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
          altText: 'Yamaha racing helmet'
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/4',
          title: 'Medium',
          price: '299.99',
          availableForSale: true
        }
      ]
    }
  },
  {
    id: 'gid://shopify/Product/5',
    title: 'Yamaha CrossCore RC Electric Bike',
    description: 'Versatile electric bike with powerful motor and long battery life for urban commuting.',
    vendor: 'Yamaha',
    productType: 'Electric Bike',
    handle: 'yamaha-crosscore-rc-electric-bike',
    priceRange: {
      minVariantPrice: {
        amount: '2499.00',
        currencyCode: 'EUR'
      }
    },
    images: {
      nodes: [
        {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
          altText: 'Yamaha CrossCore RC Electric Bike'
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/5',
          title: 'Default Title',
          price: '2499.00',
          availableForSale: true
        }
      ]
    }
  }
]

// Mock client for development
const mockClient = {
  request: async (query: string, variables?: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Return mock data based on query type
    if (query.includes('getProducts') || query.includes('searchProducts')) {
      let filteredProducts = [...mockProducts]
      
      // Apply filters if provided
      if (variables?.query) {
        const queryStr = variables.query.toLowerCase()
        if (queryStr.includes('product_type:motorcycle')) {
          filteredProducts = filteredProducts.filter(p => p.productType === 'Motorcycle')
        } else if (queryStr.includes('product_type:parts')) {
          filteredProducts = filteredProducts.filter(p => p.productType === 'Parts')
        } else if (queryStr.includes('product_type:accessories')) {
          filteredProducts = filteredProducts.filter(p => p.productType === 'Accessories')
        } else if (queryStr.includes('product_type:electric bike')) {
          filteredProducts = filteredProducts.filter(p => p.productType === 'Electric Bike')
        } else if (queryStr.includes('title:')) {
          const searchTerm = queryStr.match(/title:\*([^*]+)\*/)?.[1]
          if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => 
              p.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          }
        }
      }
      
      return {
        data: {
          products: {
            nodes: filteredProducts,
            pageInfo: {
              hasNextPage: false,
              endCursor: null
            }
          }
        },
        errors: null
      }
    }
    
    if (query.includes('getProduct')) {
      const handle = variables?.handle
      const product = mockProducts.find(p => p.handle === handle)
      
      return {
        data: {
          product: product || null
        },
        errors: product ? null : [{ message: 'Product not found' }]
      }
    }
    
    return { data: null, errors: [{ message: 'Unknown query' }] }
  }
}

// Real Shopify client for production (only create if credentials exist)
let realClient: any = null
if (!isDevelopment && import.meta.env.VITE_SHOPIFY_STORE_DOMAIN && import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN) {
  try {
    realClient = createStorefrontApiClient({
      storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN!,
      apiVersion: '2026-01',
      publicAccessToken: import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN!,
    })
  } catch (error) {
    console.warn('Failed to create Shopify client, falling back to mock data:', error)
    realClient = null
  }
}

const client = realClient || mockClient

export interface Product {
  id: string
  title: string
  description: string
  vendor: string
  productType: string
  handle: string
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  images: {
    nodes: Array<{
      url: string
      altText?: string
    }>
  }
  variants: {
    nodes: Array<{
      id: string
      title: string
      price: string
      availableForSale: boolean
    }>
  }
}

export const shopifyQueries = {
  // Get all products with optional filtering
  getProducts: `
    query getProducts($first: Int = 20, $query: String) {
      products(first: $first, query: $query) {
        nodes {
          id
          title
          description
          vendor
          productType
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            nodes {
              url
              altText
            }
          }
          variants(first: 10) {
            nodes {
              id
              title
              price
              availableForSale
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
  
  // Get single product by handle
  getProduct: `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        vendor
        productType
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          nodes {
            url
            altText
          }
        }
        variants(first: 50) {
          nodes {
            id
            title
            price
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  `,
  
  // Search products
  searchProducts: `
    query searchProducts($query: String!, $first: Int = 20) {
      products(first: $first, query: $query) {
        nodes {
          id
          title
          handle
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            nodes {
              url
              altText
            }
          }
        }
      }
    }
  `
}

export const shopifyAPI = {
  async getProducts(variables?: { first?: number; query?: string }) {
    try {
      const { data, errors } = await client.request(shopifyQueries.getProducts, {
        variables,
      })
      return { data: data?.products, errors }
    } catch (error) {
      console.error('Shopify API Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  async getProduct(handle: string) {
    try {
      const { data, errors } = await client.request(shopifyQueries.getProduct, {
        variables: { handle },
      })
      return { data: data?.product, errors }
    } catch (error) {
      console.error('Shopify API Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  async searchProducts(query: string, first: number = 20) {
    try {
      const { data, errors } = await client.request(shopifyQueries.searchProducts, {
        variables: { query, first },
      })
      return { data: data?.products, errors }
    } catch (error) {
      console.error('Shopify API Error:', error)
      return { data: null, errors: [error] }
    }
  }
}

export default client
