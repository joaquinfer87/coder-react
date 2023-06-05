// import Hooks from '../Hooks/Hooks'
import './Item.css'

const Item = ({ nombre, precio,img, }) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre}/>
        <div className='info'>
        <h3>Nombre: {nombre} </h3>
        <p>precio {precio}</p>
        {/* <Hooks /> */}
        <button className='BtnProducto'>DETALLES</button>
        </div>
      
       
        
    </div>
  )
}

export default Item