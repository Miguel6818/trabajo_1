import React from 'react'
import Carrito from './carrito'

const NavBar = () => {
  return (
    <nav className='navbar'>

      <div className="logo">
        <h1>MG tienda</h1>
      </div>

      <ul className="link">
        <li><a href="#">Electrodomesticos</a></li>
        <li><a href="#">Moda</a></li>
        <li><a href="#">Hogar</a></li>
        <li><a href="#">Accesorios</a></li>
      
      </ul>

      <Carrito ></Carrito>




    </nav>

    
  )
}

export default NavBar