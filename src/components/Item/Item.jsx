// import Hooks from '../Hooks/Hooks'

import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id,nombre, precio, img }) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={nombre} />
      <div className="infoContainer">
        <h3>{nombre} </h3>
        <div className="info">
          <strong>Precio: ${precio}</strong>
          <Link to={`/item/${id}`}><button className="bdetalle"><strong> Ver Detalles</strong> </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
