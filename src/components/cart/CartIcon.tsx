import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import styles from './CartIcon.module.css'

const CartIcon: React.FC = () => {
  const { itemCount, isLoading } = useCart()

  return (
    <Link to="/cart" className={styles.cartIcon}>
      <div className={styles.iconContainer}>
        <svg 
          className={styles.icon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
          />
        </svg>
        
        {itemCount > 0 && (
          <span className={styles.badge}>
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </div>
      
      <span className={styles.text}>Cart</span>
      
      {isLoading && <div className={styles.loadingSpinner} />}
    </Link>
  )
}

export default CartIcon
