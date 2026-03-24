import React from 'react'
import { useTranslation } from 'react-i18next'
import type { Product } from '../../lib/shopify'
import ProductCard from '../shop/ProductCard'

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle?: string;
  className?: string;
  loading?: boolean;
  error?: string | null;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (variantId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title,
  subtitle,
  className = "",
  loading = false,
  error = null,
  onQuickView,
  onAddToCart,
}) => {
  const { t } = useTranslation()
  
  return (
    <section className={`w-full min-w-0 py-20 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}>
      {/* Full viewport width container */}
      <div className="w-full min-w-0 max-w-none px-4 sm:px-6 lg:px-8">
        {/* Title Section with proper spacing */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yamaha-red font-play mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto px-4">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-lg text-gray-600">{t('shop.loading', 'Loading products...')}</div>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="flex justify-center items-center py-12">
            <div className="text-lg text-red-600">{error}</div>
          </div>
        )}
        
        {/* Products Grid */}
        {!loading && !error && (
          <div className="w-full min-w-0 max-w-none flex-1">
            <div
              className="grid w-full min-w-0 max-w-none justify-items-center mx-auto px-2 sm:px-0"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                columnGap: 40,
                rowGap: 48,
                maxWidth: 1600,
              }}
            >
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
