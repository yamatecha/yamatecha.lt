import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'

interface DropdownItem {
  label: string
  to: string
}

interface DropdownProps {
  title: string
  items: DropdownItem[]
  className?: string
  onItemClick?: () => void
}

const Dropdown = ({ title, items, className = '', onItemClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleItemClick = () => {
    setIsOpen(false)
    if (onItemClick) {
      onItemClick()
    }
  }

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <li 
      className={`nav-item dropdown ${isOpen ? 'active' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="nav-link play-regular dropdown-toggle" onClick={handleToggle}>
        {title}
      </span>
      <div className="dropdown-menu">
        {items.map((item, index) => (
          <Link 
            key={index} 
            to={item.to} 
            className="dropdown-item" 
            onClick={handleItemClick}
          >
            <span>{item.label}</span>
            <svg className="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        ))}
      </div>
    </li>
  )
}

export default Dropdown
