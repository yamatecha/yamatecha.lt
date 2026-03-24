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
    <section className={`w-full min-w-0 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`} style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Full viewport width container */}
      <div className="w-full min-w-0 max-w-none px-4 sm:px-6 lg:px-8">
        {/* Title Section - Positioned at top with proper sizing */}
        <div className="text-center mb-16" style={{ maxWidth: '1200px', margin: '0 auto 4rem auto' }}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ lineHeight: '1.1' }}>
            <span style={{ color: '#dc2626' }}>{title}</span>
          </h2>
          {subtitle && (
            <p className="text-2xl max-w-4xl mx-auto px-4" style={{ lineHeight: '1.4', fontWeight: '400' }}>
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Products Container - Separate from Title */}
        <div className="w-full min-w-0 max-w-none flex-1">
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
          )}
        </div>
      </div>
    </section>
  );
};
