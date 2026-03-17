import React from 'react'
import type { Product } from '../../lib/shopify'

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
  const mainImage = product.images.nodes[0]
  const firstVariant = product.variants.nodes[0]
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-square">
        {mainImage ? (
          <img
            src={mainImage.url}
            alt={mainImage.altText || product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        
        {/* Product Type Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-yamaha-red text-white px-2 py-1 text-xs font-semibold rounded">
            {product.productType}
          </span>
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              title="Quick View"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600">{product.vendor}</p>
        </div>
        
        <p className="text-gray-700 text-sm mb-3 line-clamp-3">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-xl font-bold text-yamaha-red">
            {product.priceRange.minVariantPrice.currencyCode}{' '}
            {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
          </div>
          <div className={`text-sm ${firstVariant.availableForSale ? 'text-green-600' : 'text-red-600'}`}>
            {firstVariant.availableForSale ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={`/product/${product.handle}`}
            className="flex-1 bg-yamaha-blue text-white py-2 px-4 rounded-lg hover:bg-yamaha-blue/90 transition-colors text-center font-medium"
          >
            View Details
          </a>
          {onAddToCart && firstVariant.availableForSale && (
            <button
              onClick={() => onAddToCart(firstVariant.id)}
              className="bg-yamaha-red text-white p-2 rounded-lg hover:bg-yamaha-red/90 transition-colors"
              title="Add to Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
