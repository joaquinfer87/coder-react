import './ItemDetail.css'
import Hooks from "../Hooks/Hooks";

const ItemDetail = ({id, nombre, precio, img, detalle}) => {
  return (
    <div className='DetalleItem'>
        
        <h3>Nombre: {nombre} </h3>
        <p>precio {precio}</p>
        <p> {detalle} </p>
        <Hooks />
        <img className='imgProducto' src={img} alt={nombre}/>
    </div>
  )
}

export default ItemDetail