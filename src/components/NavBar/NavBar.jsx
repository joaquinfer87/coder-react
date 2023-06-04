import {useState, useEffect} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  
  const [categoria, setCategoria] = useState("");
 
  useEffect( ()=> {

    
}, [categoria])

  const handleClick = (categoria) => {
    setCategoria(categoria);
    document.title = `Categoría: ${categoria}`;
  };
  
  return (
    <header>
       <img className ="logo" src="./img/logo.png" alt="Logo" />
        
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