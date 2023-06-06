import "./ItemDetail.css";
import Hooks from "../Hooks/Hooks";

const ItemDetail = ({ id, nombre, precio, img, detalle }) => {
  return (
    <div className="cardDetalle">
      <img className="imgDetalle" src={img} alt={nombre} />
      <div className="infoDetalle"> 
      <h2>{nombre} </h2>
      <strong>Precio ${precio}</strong>
      <strong> {detalle} </strong>
      <Hooks />
      </div>
    </div>
  );
};

export default ItemDetail;
