import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { shopifyAPI, type Product } from '../../lib/shopify'
import { useCart } from '../../contexts/CartContext'
import styles from './ProductDetail.module.css'

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { handle } = useParams<{ handle: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return
      
      try {
        setLoading(true)
        const { data: productData, errors } = await shopifyAPI.getProduct(handle)
        
        if (errors && errors.length > 0) {
          setError('Failed to load product')
        } else if (productData) {
          setProduct(productData)
        } else {
          setError('Product not found')
        }
      } catch (err) {
        setError('Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [handle])

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div>Loading...</div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className={styles.error}>
        <h1>Product Not Found</h1>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/el-dviraciai" className={styles.backButton}>
          ← Back to Products
        </Link>
      </div>
    )
  }

  const mainImage = product.images.nodes[selectedImageIndex]
  const firstVariant = product.variants.nodes[0]

  const handleAddToCart = async () => {
    if (!firstVariant.availableForSale) return
    
    setIsAddingToCart(true)
    try {
      await addItem(firstVariant.id, 1)
    } catch (err) {
      console.error('Failed to add to cart:', err)
    } finally {
      setIsAddingToCart(false)
    }
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb}>
        <Link to="/el-dviraciai">Products</Link>
        <span>›</span>
        <span className={styles.current}>{product.title}</span>
      </nav>

      <div className={styles.productLayout}>
        {/* Product Images */}
        <div className={styles.imageGallery}>
          <div className={styles.mainImageContainer}>
            <div className={styles.mainImage}>
              {mainImage ? (
                <img
                  src={mainImage.url}
                  alt={mainImage.altText || product.title}
                />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <div style={{ textAlign: 'center', color: '#9ca3af' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
                    <p>No image available</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* New badge */}
            {product.tags?.includes('new') && (
              <span className={`${styles.badge} ${styles['badge.new']}`}>NEW</span>
            )}
            
            {/* Featured badge */}
            {product.tags?.includes('featured') && (
              <span className={`${styles.badge} ${styles['badge.featured']}`}>FEATURED</span>
            )}
          </div>
          
          {/* Thumbnail Gallery */}
          {product.images.nodes.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.nodes.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`${styles.thumbnail} ${selectedImageIndex === index ? styles.active : ''}`}
                >
                  <img
                    src={image.url}
                    alt={image.altText || `${product.title} - Image ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          {/* Product Header */}
          <div className={styles.productHeader}>
            <div className={styles.productBadges}>
              <span className={styles.productTypeBadge}>
                {product.productType}
              </span>
              {firstVariant.availableForSale && (
                <span className={styles.stockBadge}>In Stock</span>
              )}
            </div>
            
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.vendor}>{product.vendor}</p>
          </div>

          {/* Price Section */}
          <div className={styles.priceSection}>
            <div className={styles.price}>
              <span>{parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}</span>
              <span className={styles.currency}>{product.priceRange.minVariantPrice.currencyCode}</span>
            </div>
            <div className={`${styles.stockStatus} ${firstVariant.availableForSale ? styles.inStock : styles.outOfStock}`}>
              {firstVariant.availableForSale ? 'Available for immediate shipping' : 'Currently out of stock'}
            </div>
          </div>

          {/* Description */}
          <div className={styles.description}>
            <h3>Details</h3>
            <div 
              className={styles.descriptionContent}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>

          {/* Product Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className={styles.tags}>
              <h3>Specifications</h3>
              <div className={styles.tagList}>
                {product.tags.map((tag: string, index: number) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className={styles.actions}>
            <button
              onClick={handleAddToCart}
              disabled={!firstVariant.availableForSale || isAddingToCart}
              className={`${styles.addButton} ${firstVariant.availableForSale && !isAddingToCart ? styles.primary : styles.disabled}`}
            >
              {isAddingToCart ? 'Added to Cart' : (firstVariant.availableForSale ? 'Add to Cart' : 'Out of Stock')}
            </button>
            
            <Link
              to="/el-dviraciai"
              className={styles.continueButton}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
