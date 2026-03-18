import React, { useState, useEffect, useCallback } from 'react'
import { shopifyAPI, type Product } from '../../lib/shopify'
import ProductCard from '../../components/shop/ProductCard'

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    category: 'all',
    search: '',
    sortBy: 'price-low'
  })

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'Motorcycle', label: 'Motorcycles' },
    { value: 'Parts', label: 'Parts & Accessories' },
    { value: 'Electric Bike', label: 'Electric Bikes' },
    { value: 'Accessories', label: 'Accessories' },
    { value: 'Watercraft', label: 'Watercraft' }
  ]

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      let query = ''
      
      // Build query based on filters
      if (filters.category !== 'all') {
        query += `product_type:${filters.category}`
      }
      
      if (filters.search) {
        query += (query ? ' AND ' : '') + `title:*${filters.search}*`
      }

      const { data, errors } = await shopifyAPI.getProducts({
        first: 50,
        query: query || undefined
      })

      if (errors?.length) {
        setError('Failed to load products')
        console.error('Shopify errors:', errors)
      } else if (data?.nodes) {
        const filteredProducts = [...data.nodes]
        
        // Client-side sorting
        switch (filters.sortBy) {
          case 'price-low':
            filteredProducts.sort((a, b) => 
              parseFloat(a.priceRange.minVariantPrice.amount) - 
              parseFloat(b.priceRange.minVariantPrice.amount)
            )
            break
          case 'price-high':
            filteredProducts.sort((a, b) => 
              parseFloat(b.priceRange.minVariantPrice.amount) - 
              parseFloat(a.priceRange.minVariantPrice.amount)
            )
            break
          case 'name-asc':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
            break
          case 'name-desc':
            filteredProducts.sort((a, b) => b.title.localeCompare(a.title))
            break
        }
        
        setProducts(filteredProducts)
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Fetch error:', err)
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleQuickView = (product: Product) => {
    // TODO: Implement quick view modal
    console.log('Quick view:', product.title)
  }

  const handleAddToCart = (variantId: string) => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', variantId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Yamaha Shop</h1>
          <p className="text-lg text-gray-600">
            Find the perfect Yamaha motorcycle, parts, and accessories
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Products
              </label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                placeholder="Search by name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yamaha-blue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yamaha-blue focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yamaha-blue focus:border-transparent"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yamaha-red"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
            {error}
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <>
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={handleQuickView}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ShopPage
