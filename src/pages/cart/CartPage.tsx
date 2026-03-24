import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import styles from './CartPage.module.css'

const CartPage: React.FC = () => {
  const { 
    cart, 
    isLoading, 
    error, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    checkout 
  } = useCart()

  const handleCheckout = async () => {
    const checkoutUrl = await checkout()
    if (checkoutUrl) {
      window.location.href = checkoutUrl
    }
  }

  if (isLoading && !cart) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading your cart...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Error</h2>
          <p>{error}</p>
          <Link to="/el-dviraciai" className={styles.continueBtn}>
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  if (!cart || !cart.lines?.nodes || cart.lines.nodes.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products yet.</p>
          <Link to="/el-dviraciai" className={styles.shopBtn}>
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Shopping Cart</h1>
        <p>{cart.lines.nodes.length} {cart.lines.nodes.length === 1 ? 'item' : 'items'}</p>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cart.lines.nodes.map((line) => (
            <div key={line.id} className={styles.cartItem}>
              <div className={styles.itemImage}>
                {line.merchandise.image ? (
                  <img 
                    src={line.merchandise.image.url}
                    alt={line.merchandise.image.altText || line.merchandise.title}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558981286-6f5486691a2f?w=100&h=100&fit=crop'
                    }}
                  />
                ) : (
                  <img 
                    src="https://images.unsplash.com/photo-1558981286-6f5486691a2f?w=100&h=100&fit=crop" 
                    alt={line.merchandise.title}
                  />
                )}
              </div>
              
              <div className={styles.itemDetails}>
                <h3>{line.merchandise.product?.title || line.merchandise.title}</h3>
                {line.merchandise.product && (
                  <Link 
                    to={`/product/${line.merchandise.product.handle}`}
                    className={styles.productLink}
                  >
                    {line.merchandise.product.title}
                  </Link>
                )}
                <p className={styles.price}>
                  {line.merchandise.price?.currencyCode} {line.merchandise.price?.amount}
                </p>
              </div>

              <div className={styles.quantityControls}>
                <button
                  onClick={() => updateQuantity(line.id, Math.max(1, line.quantity - 1))}
                  className={styles.quantityBtn}
                  disabled={isLoading}
                >
                  -
                </button>
                <span className={styles.quantity}>{line.quantity}</span>
                <button
                  onClick={() => updateQuantity(line.id, line.quantity + 1)}
                  className={styles.quantityBtn}
                  disabled={isLoading}
                >
                  +
                </button>
              </div>

              <div className={styles.itemTotal}>
                <p>
                  {line.merchandise.price?.currencyCode} 
                  {(parseFloat(line.merchandise.price?.amount || '0') * line.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(line.id)}
                  className={styles.removeBtn}
                  disabled={isLoading}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryContent}>
            <h2>Order Summary</h2>
            
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>
                {cart.estimatedCost?.subtotalAmount?.currencyCode} 
                {cart.estimatedCost?.subtotalAmount?.amount}
              </span>
            </div>
            
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <div className={styles.summaryRow.total}>
              <span>Total</span>
              <span>
                {cart.estimatedCost?.subtotalAmount?.currencyCode} 
                {cart.estimatedCost?.subtotalAmount?.amount}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className={styles.checkoutBtn}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Proceed to Checkout'}
            </button>

            <button
              onClick={clearCart}
              className={styles.clearBtn}
              disabled={isLoading}
            >
              Clear Cart
            </button>

            <Link to="/el-dviraciai" className={styles.continueBtn}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
