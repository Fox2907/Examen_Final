import React from 'react'
import "./Boton.css"
import BotonCant from './BotonCant'

const Boton = () => {
  return (
    <div className='boton-container'>
        <BotonCant simbolo={"-"}/>
        <span>1</span>
        <BotonCant simbolo={"+"}/>
    </div>
  )
}

export default Boton