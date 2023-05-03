import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1 >Planet Rock</h1>
        
        <nav>
          <ul className="indice">
            <li>
              <button className="guitarras">Guitarras</button>
            </li>
            <li>
              <button className="bajos">Bajos</button>
            </li>
            <li>
              <button className="amplificadores">Amplificadores</button>
            </li>
          </ul>
        </nav>
        <CartWidget />
        
    </header>
    
    
  )
}

export default NavBar