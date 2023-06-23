import React from 'react'
import "./ProductInformation.css"

const ProductInformation = () => {
  return (
    <div className='product-container'>
        <div className="product-information">
            <span className='product-name'>Standard Cactus</span>
            <span className='price'>20.00 $</span>
        </div>
        <span className="description">Succulent</span>
    </div>
  )
}

export default ProductInformation