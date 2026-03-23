import React, { useState } from 'react'
import type { Product } from '../../lib/shopify'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  onQuickView?: (product: Product) => void
  onAddToCart?: (variantId: string) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onQuickView, 
  onAddToCart 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  
  const mainImage = product.images.nodes[0]
  const firstVariant = product.variants.nodes[0]
  
  const handleAddToCart = async () => {
    if (!onAddToCart || !firstVariant.availableForSale) return
    
    setIsAddingToCart(true)
    try {
      await onAddToCart(firstVariant.id)
    } finally {
      setTimeout(() => setIsAddingToCart(false), 1000)
    }
  }
  
  return (
    <div 
      className={`group relative ${styles.card} bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className={`relative ${styles.imageContainer} aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100`}>
        {mainImage ? (
          <img
            src={mainImage.url}
            alt={mainImage.altText || product.title}
            className={`${styles.image} w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Overlay gradient on hover */}
        <div className={`${styles.overlay} absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Product Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`${styles.badge} bg-yamaha-red text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm`}>
            {product.productType}
          </span>
        </div>
        
        {/* Quick Actions */}
        <div className={`${styles.quickActions} absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className={`${styles.quickActionButton} bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300`}
              title="Quick View"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          )}
        </div>
        
        {/* New badge */}
        {product.tags?.includes('new') && (
          <div className="absolute bottom-3 left-3">
            <span className={`${styles.badge} ${styles.badgeNew} bg-green-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg`}>
              NEW
            </span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className={`${styles.content} p-4 space-y-3`}>
        {/* Vendor and Title */}
        <div className="space-y-1">
          <p className={`${styles.vendor} text-xs font-semibold text-yamaha-red uppercase tracking-wider`}>{product.vendor}</p>
          <h3 className={`${styles.title} font-bold text-gray-900 text-lg leading-tight line-clamp-2 group-hover:text-yamaha-blue transition-colors duration-300`}>
            {product.title}
          </h3>
        </div>
        
        {/* Description */}
        <p className={`${styles.description} text-gray-600 text-sm leading-relaxed line-clamp-2`}>
          {product.description}
        </p>
        
        {/* Price and Stock Status */}
        <div className={`${styles.priceSection} flex items-center justify-between pt-1`}>
          <div className="space-y-1">
            <div className={`${styles.price} text-xl font-bold text-gray-900`}>
              <span className={`${styles.currency} text-sm font-medium text-gray-500`}>{product.priceRange.minVariantPrice.currencyCode}</span>{' '}
              <span>{parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}</span>
            </div>
            <div className={`${styles.stockStatus} ${firstVariant.availableForSale ? styles.inStock : styles.outOfStock} flex items-center gap-1 text-xs font-medium ${firstVariant.availableForSale ? 'text-green-600' : 'text-red-600'}`}>
              {firstVariant.availableForSale ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className={`${styles.actions} flex gap-2 pt-1`}>
          <a
            href={`/product/${product.handle}`}
            className={`${styles.button} ${styles.buttonSecondary} flex-1 bg-gray-100 text-gray-700 py-2.5 px-3 rounded-xl hover:bg-gray-200 transition-all duration-300 text-center font-semibold text-sm hover:shadow-md transform hover:-translate-y-0.5`}
          >
            View Details
          </a>
          
          {onAddToCart && firstVariant.availableForSale && (
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`${styles.button} ${styles.buttonPrimary} ${isAddingToCart ? styles.adding : ''} flex-1 bg-yamaha-red text-white py-2.5 px-3 rounded-xl transition-all duration-300 font-semibold text-sm hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center ${
                isAddingToCart 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'hover:bg-yamaha-red/90'
              } ${
                isAddingToCart ? 'cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {isAddingToCart ? (
                <>
                  <svg className={`${styles.checkIcon} w-4 h-4 animate-bounce`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Added!</span>
                </>
              ) : (
                <span>Add to Cart</span>
              )}
            </button>
          )}
          
          {!firstVariant.availableForSale && (
            <button
              disabled
              className={`${styles.button} ${styles.buttonDisabled} flex-1 bg-gray-300 text-gray-500 py-2.5 px-3 rounded-xl cursor-not-allowed font-semibold text-sm flex items-center justify-center`}
            >
              <span>Out of Stock</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
