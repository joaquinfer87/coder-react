import './Item.css'

const Item = ({id, nombre, precio,img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre}/>
        <h3>Nombre: {nombre} </h3>
        <p>precio {precio}</p>
        <button className='BtnProducto'>DETALLES</button>
        
    </div>
  )
}

export default Item