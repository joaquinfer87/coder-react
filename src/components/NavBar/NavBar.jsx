import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src="../img/logo.png" alt="Logo" />
      </Link>
      <nav className="indice">
        <ul >
          <li>
            <NavLink to={"/categoria/1"}>
              <button><strong>Guitarras</strong></button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/2"}>
              <button><strong>Bajos Electricos</strong></button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/3"}>
              <button><strong>Amplificadores</strong></button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
