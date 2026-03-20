import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MegaMenu.css'

interface ProductItem {
  id: string
  name: string
  image: string
  badge?: string
}

interface SubCategory {
  id: string
  label: string
  hasArrow?: boolean
  products?: ProductItem[]
}

interface Category {
  id: string
  label: string
  subCategories: SubCategory[]
}

interface MegaMenuProps {
  title: string
  categories: Category[]
  className?: string
  onItemClick?: () => void
}

const MegaMenu = ({ title, categories, className = '', onItemClick }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    
    // Close all other mega menus
    document.querySelectorAll('.nav-item.mega-menu').forEach(el => {
      if (el !== e.currentTarget.closest('.nav-item.mega-menu')) {
        el.classList.remove('active')
      }
    })
    
    if (newIsOpen) {
      document.body.classList.add('mega-menu-open')
    } else {
      document.body.classList.remove('mega-menu-open')
      setActiveCategory(null)
      setActiveSubCategory(null)
    }
  }

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId)
    setActiveSubCategory(null)
  }

  const handleSubCategoryHover = (subCategoryId: string) => {
    setActiveSubCategory(subCategoryId)
  }

  const handleItemClick = () => {
    setIsOpen(false)
    setActiveCategory(null)
    setActiveSubCategory(null)
    if (onItemClick) {
      onItemClick()
    }
  }

  const activeCategoryData = categories.find(cat => cat.id === activeCategory)
  const activeSubCategoryData = activeCategoryData?.subCategories.find(sub => sub.id === activeSubCategory)

  return (
    <li 
      className={`nav-item mega-menu ${isOpen ? 'active' : ''} ${className}`}
    >
      <span className="nav-link mega-menu-toggle" onClick={handleToggle}>
        {title}
      </span>
      
      <div className="mega-menu-dropdown">
        <div className="mega-menu-content">
          {/* Column 1: Main Categories */}
          <div className="mega-menu-column categories-column">
            <div className="mega-menu-list">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`mega-menu-item category-item ${activeCategory === category.id ? 'active' : ''}`}
                  onMouseEnter={() => handleCategoryHover(category.id)}
                >
                  <span>{category.label}</span>
                  <svg className="mega-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Sub Categories */}
          {activeCategoryData && (
            <div className="mega-menu-column subcategories-column">
              <div className="mega-menu-list">
                {activeCategoryData.subCategories.map((subCategory) => (
                  <button
                    key={subCategory.id}
                    className={`mega-menu-item subcategory-item ${activeSubCategory === subCategory.id ? 'active' : ''}`}
                    onMouseEnter={() => handleSubCategoryHover(subCategory.id)}
                  >
                    <span>{subCategory.label}</span>
                    {subCategory.hasArrow && (
                      <svg className="mega-menu-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Footer in subcategories column */}
              <div className="mega-menu-footer">
                <Link to={`/${activeCategoryData.id}`} className="mega-menu-footer-link" onClick={handleItemClick}>
                  <span>{activeCategoryData.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Column 3: Further Sub Categories */}
          {activeSubCategoryData && activeSubCategoryData.products && (
            <div className="mega-menu-column products-column">
              <div className="mega-menu-products">
                <div className="products-grid">
                  {activeSubCategoryData.products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="product-card"
                      onClick={handleItemClick}
                    >
                      {product.badge && (
                        <div className="product-badge">
                          <span>{product.badge}</span>
                        </div>
                      )}
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="product-name">
                        <span>{product.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Footer in products column */}
              <div className="mega-menu-footer">
                <Link to={`/${activeCategoryData?.id}/${activeSubCategoryData.id}`} className="mega-menu-footer-link" onClick={handleItemClick}>
                  <span>Naršyti visus {activeSubCategoryData.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default MegaMenu
