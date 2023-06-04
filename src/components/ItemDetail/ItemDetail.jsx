import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='DetalleItem'>
        
        <h3>Nombre: {nombre} </h3>
        <p>precio {precio}</p>
        <h3>ID: {id} </h3>
        <p> Detalle producto </p>
        <img className='imgProducto' src={img} alt={nombre}/>
    </div>
  )
}

export default ItemDetail