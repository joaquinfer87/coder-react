import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListConteiner.css'
import {getProductos} from '../../asyncmock'

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState ([])
  useEffect (()=>{
    // getProductos ()
    // .then(respuesta => setProductos(respuesta))
    // .catch (error => console.log(error))

    const pedirDatos = async () => {
      const inventarioProductos = await getProductos();
      setProductos(inventarioProductos);
      console.log("holamundo")
      
  }

  console.log(pedirDatos());

  },[])
  return (
    <div className='contenedor'>
    <h2>{props.greeting}</h2>
    <ItemList productos={productos} />
    </div>
  )
  
}

export default ItemListConteiner