// Shopify Storefront API Client Configuration
import { createStorefrontApiClient } from '@shopify/storefront-api-client'

type StorefrontVariables = {
  query?: string
  handle?: string
  first?: number
  cartId?: string
  lines?: Array<{ merchandiseId: string; quantity: number }>
  lineIds?: string[]
  input?: {
    lines?: Array<{ merchandiseId: string; quantity: number }>
  }
}

type StorefrontResponse<TData> = {
  data?: TData
  errors?: unknown
}

type StorefrontClient = {
  request: (query: string, options?: { variables?: StorefrontVariables }) => Promise<StorefrontResponse<unknown>>
}

type ProductsQueryData = {
  products?: {
    nodes?: Product[]
    pageInfo?: {
      hasNextPage?: boolean
      endCursor?: string | null
    }
  }
}

type ProductQueryData = {
  product?: Product | null
}

export interface Cart {
  id: string
  checkoutUrl?: string
  lines?: {
    nodes?: CartLine[]
  }
  estimatedCost?: {
    subtotalAmount?: {
      amount: string
      currencyCode: string
    }
  }
}

export interface CartLine {
  id: string
  merchandise: {
    id: string
    title: string
    product?: {
      title: string
      handle: string
    }
    price?: {
      amount: string
      currencyCode: string
    }
    image?: {
      url: string
      altText?: string
    }
  }
  quantity: number
}

// Real Shopify client setup
const isDevelopment = false

// Debug logging
console.log('=== Shopify Debug ===')
console.log('VITE_SHOPIFY_STORE_DOMAIN:', import.meta.env.VITE_SHOPIFY_STORE_DOMAIN)
console.log('VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN:', import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN ? 'SET' : 'NOT SET')
console.log('isDevelopment:', isDevelopment)
console.log('===================')

// Real Shopify client
let realClient: StorefrontClient | null = null
if (import.meta.env.VITE_SHOPIFY_STORE_DOMAIN && import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN) {
  try {
    realClient = createStorefrontApiClient({
      storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN!,
      apiVersion: '2026-01',
      publicAccessToken: import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN!,
    }) as unknown as StorefrontClient
  } catch (error) {
    console.warn('Failed to create Shopify client:', error)
    realClient = null
  }
}

// Force use of real Shopify client
const client: StorefrontClient = realClient!

export interface Product {
  id: string
  title: string
  description: string
  vendor: string
  productType: string
  handle: string
  tags?: string[]
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
              price {
                amount
                currencyCode
              }
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
            price {
              amount
              currencyCode
            }
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
  `,
  
  // Cart mutations
  cartCreate: `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            nodes {
              id
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                  }
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                    altText
                  }
                }
              }
              quantity
            }
          }
          estimatedCost {
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
        }
      }
    }
  `,
  
  cartLinesAdd: `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            nodes {
              id
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                  }
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                    altText
                  }
                }
              }
              quantity
            }
          }
          estimatedCost {
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
        }
      }
    }
  `,
  
  cartCheckoutCreate: `
    mutation cartCheckoutCreate($cartId: ID!) {
      cartCheckoutCreate(cartId: $cartId) {
        checkout {
          checkoutUrl
        }
        cart {
          id
          checkoutUrl
        }
        userErrors {
          message
        }
      }
    }
  `,
  cartUpdate: `
    mutation cartUpdate($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            nodes {
              id
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
              quantity
            }
          }
          estimatedCost {
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          message
        }
      }
    }
  `,
  
  getCart: `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        lines(first: 50) {
          nodes {
            id
            merchandise {
              ... on ProductVariant {
                id
                title
                product {
                  title
                  handle
                }
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                  altText
                }
              }
            }
            quantity
          }
        }
        estimatedCost {
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  `,
}

export const shopifyAPI = {
  async getProducts(
    variables?: { first?: number; query?: string }
  ): Promise<{ data: ProductsQueryData['products'] | null; errors: unknown[] | null }> {
    try {
      console.log('🔍 Shopify API Call - Variables:', variables)
      const { data, errors } = await client.request(shopifyQueries.getProducts, {
        variables,
      })
      
      console.log('📦 Shopify API Response:', { data, errors })
      
      // Log detailed GraphQL errors
      if (errors && typeof errors === 'object' && 'graphQLErrors' in errors) {
        console.log('🚨 GraphQL Errors:', errors.graphQLErrors)
      }

      const normalizedErrors = Array.isArray(errors) ? errors : errors ? [errors] : null
      const typedData = (data as ProductsQueryData | undefined)?.products
      return { data: typedData || null, errors: normalizedErrors }
    } catch (error) {
      console.error('❌ Shopify API Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  async getProduct(handle: string): Promise<{ data: Product | null; errors: unknown[] | null }> {
    try {
      const { data, errors } = await client.request(shopifyQueries.getProduct, {
        variables: { handle },
      })

      const normalizedErrors = Array.isArray(errors) ? errors : errors ? [errors] : null
      const typedData = (data as ProductQueryData | undefined)?.product
      return { data: typeof typedData === 'undefined' ? null : typedData, errors: normalizedErrors }
    } catch (error) {
      console.error('Shopify API Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  async searchProducts(
    query: string,
    first: number = 20
  ): Promise<{ data: ProductsQueryData['products'] | null; errors: unknown[] | null }> {
    try {
      const { data, errors } = await client.request(shopifyQueries.searchProducts, {
        variables: { query, first },
      })

      const normalizedErrors = Array.isArray(errors) ? errors : errors ? [errors] : null
      const typedData = (data as ProductsQueryData | undefined)?.products
      return { data: typedData || null, errors: normalizedErrors }
    } catch (error) {
      console.error('Shopify API Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  // Cart API functions
  async createCart(lines: Array<{ merchandiseId: string; quantity: number }>): Promise<{ data: Cart | null; errors: unknown[] | null }> {
    try {
      const { data, errors } = await client.request(shopifyQueries.cartCreate, {
        variables: { input: { lines } },
      })

      const normalizedErrors = Array.isArray(errors) ? errors : errors ? [errors] : null
      const typedData = (data as { cartCreate?: { cart?: Cart } })?.cartCreate?.cart
      return { data: typedData || null, errors: normalizedErrors }
    } catch (error) {
      console.error('Shopify Cart Create Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  async addToCart(cartId: string, lines: Array<{ merchandiseId: string; quantity: number }>): Promise<{ data: Cart | null; errors: unknown[] | null }> {
    try {
      const { data, errors } = await client.request(shopifyQueries.cartLinesAdd, {
        variables: { cartId, lines },
      })

      const normalizedErrors = Array.isArray(errors) ? errors : errors ? [errors] : null
      const typedData = (data as { cartLinesAdd?: { cart?: Cart } })?.cartLinesAdd?.cart
      return { data: typedData || null, errors: normalizedErrors }
    } catch (error) {
      console.error('Shopify Add to Cart Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  async getCart(cartId: string): Promise<{ data: Cart | null; errors: unknown[] | null }> {
    try {
      const { data, errors } = await client.request(shopifyQueries.getCart, {
        variables: { cartId },
      })

      const normalizedErrors = Array.isArray(errors) ? errors : errors ? [errors] : null
      const typedData = (data as { cart?: Cart })?.cart
      return { data: typedData || null, errors: normalizedErrors }
    } catch (error) {
      console.error('Shopify Get Cart Error:', error)
      return { data: null, errors: [error] }
    }
  },
  
  async createCheckout(cartId: string): Promise<{ data: { checkoutUrl?: string } | null; errors: unknown[] | null }> {
    try {
      // Modern Cart API - get cart and use its checkoutUrl directly
      const { data, errors } = await client.request(shopifyQueries.getCart, {
        variables: { cartId },
      })

      const normalizedErrors = Array.isArray(errors) ? errors : errors ? [errors] : null
      const cart = (data as { cart?: { checkoutUrl?: string } })?.cart
      
      if (cart?.checkoutUrl) {
        return { data: { checkoutUrl: cart.checkoutUrl }, errors: null }
      } else {
        return { data: null, errors: normalizedErrors || [{ message: 'No checkout URL found' }] }
      }
    } catch (error) {
      console.error('Shopify Create Checkout Error:', error)
      return { data: null, errors: [error] }
    }
  }
}

export default client
