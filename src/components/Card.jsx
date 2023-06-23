import React from 'react'
import "./Card.css"
import ProductInformation from './ProductInformation'
import Boton from './Boton'
import Review from './Review'

const Card = () => {
  return (
    <div className='card-container'>
        <img src="src/static/images/Cactus.jpg" alt="a" />
        <ProductInformation/>
        <Review/>
        <Boton/>
    </div>
  )
}

export default Card