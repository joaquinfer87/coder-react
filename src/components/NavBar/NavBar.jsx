import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src="./img/logo.png" alt="Logo" />
      </Link>
      <nav>
        <ul className="indice">
          <li>
            <NavLink to={"/guitarras"}>
              <button>Guitarras</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/bajos"}>
              <button>Bajos</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/amplificadores"}>
              <button>Amplificadores</button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
