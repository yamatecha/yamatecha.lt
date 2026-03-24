import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { shopifyAPI, type Cart } from '../lib/shopify'

interface CartContextType {
  cart: Cart | null
  isLoading: boolean
  error: string | null
  addItem: (variantId: string, quantity?: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  updateQuantity: (lineId: string, quantity: number) => Promise<void>
  clearCart: () => void
  itemCount: number
  subtotal: string
  checkout: () => Promise<string | null>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = async () => {
      const savedCartId = localStorage.getItem('shopify_cart_id')
      if (savedCartId) {
        try {
          // Fetch the existing cart by ID
          const result = await shopifyAPI.getCart(savedCartId)
          if (result.data && !result.errors) {
            setCart(result.data)
          } else {
            // Cart not found or expired, clear the stored ID
            localStorage.removeItem('shopify_cart_id')
          }
        } catch (error) {
          console.error('Failed to load cart:', error)
          localStorage.removeItem('shopify_cart_id')
        }
      }
    }
    
    loadCart()
  }, [])

  const addItem = async (variantId: string, quantity: number = 1) => {
    setIsLoading(true)
    setError(null)

    try {
      if (cart) {
        // Add to existing cart
        const result = await shopifyAPI.addToCart(cart.id, [{ merchandiseId: variantId, quantity }])
        if (result.errors) {
          throw new Error('Failed to add item to cart')
        }
        setCart(result.data)
        localStorage.setItem('shopify_cart_id', result.data?.id || '')
      } else {
        // Create new cart
        const result = await shopifyAPI.createCart([{ merchandiseId: variantId, quantity }])
        if (result.errors) {
          throw new Error('Failed to create cart')
        }
        setCart(result.data)
        localStorage.setItem('shopify_cart_id', result.data?.id || '')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const removeItem = async (lineId: string) => {
    if (!cart) return

    setIsLoading(true)
    setError(null)

    try {
      // For now, we'll clear the cart and recreate it without the item
      // In a real implementation, you'd use cartLinesRemove mutation
      const remainingLines = cart.lines?.nodes?.filter(line => line.id !== lineId) || []
      
      if (remainingLines.length === 0) {
        clearCart()
      } else {
        // Create new cart with remaining items
        const linesToAdd = remainingLines.map(line => ({
          merchandiseId: line.merchandise.id,
          quantity: line.quantity
        }))
        
        const result = await shopifyAPI.createCart(linesToAdd)
        if (result.errors) {
          throw new Error('Failed to remove item')
        }
        setCart(result.data)
        localStorage.setItem('shopify_cart_id', result.data?.id || '')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const updateQuantity = async (lineId: string, quantity: number) => {
    if (!cart || quantity < 1) return

    setIsLoading(true)
    setError(null)

    try {
      // For now, we'll recreate the cart with updated quantity
      // In a real implementation, you'd use cartLinesUpdate mutation
      const updatedLines = cart.lines?.nodes?.map(line => 
        line.id === lineId ? { ...line, quantity } : line
      ) || []
      
      const linesToAdd = updatedLines.map(line => ({
        merchandiseId: line.merchandise.id,
        quantity: line.quantity
      }))
      
      const result = await shopifyAPI.createCart(linesToAdd)
      if (result.errors) {
        throw new Error('Failed to update quantity')
      }
      setCart(result.data)
      localStorage.setItem('shopify_cart_id', result.data?.id || '')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const clearCart = () => {
    setCart(null)
    localStorage.removeItem('shopify_cart_id')
  }

  const checkout = async (): Promise<string | null> => {
    if (!cart) return null

    setIsLoading(true)
    setError(null)

    try {
      const result = await shopifyAPI.createCheckout(cart.id)
      if (result.errors) {
        throw new Error('Failed to create checkout')
      }
      return result.data?.checkoutUrl || null
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  // Computed values
  const itemCount = cart?.lines?.nodes?.reduce((total, line) => total + line.quantity, 0) || 0
  const subtotal = cart?.estimatedCost?.subtotalAmount?.amount || '0.00'

  const value: CartContextType = {
    cart,
    isLoading,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    checkout,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
