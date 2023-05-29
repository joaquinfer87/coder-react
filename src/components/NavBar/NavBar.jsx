import {useState, useEffect} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  const [categoria, setCategoria] = useState("");

  useEffect( ()=> {
    document.title = `Categoría: ${categoria}`;
}, [categoria])

  const handleClick = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <header>
        <h1 >Planet Rock</h1>
        
        <nav>
          <ul className="indice">
            <li>
            <button onClick={() => handleClick("Guitarras")}>Guitarras</button>
            </li>
            <li>
            <button onClick={() => handleClick("Bajos")}>Bajos</button>
            </li>
            <li>
            <button onClick={() => handleClick("Amplificadores")}>Amplificadores</button>
            </li>
          </ul>
        </nav>
        <CartWidget />
        
    </header>
    
    
  )
}

export default NavBar