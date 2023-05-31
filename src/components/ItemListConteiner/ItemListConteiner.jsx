import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListConteiner.css'
import {getProductos} from '../../asyncmock'

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState ([])
  useEffect (()=>{
    getProductos ()
    .then(respuesta => setProductos(respuesta))
    .catch (error => console.log(error))

  },[])
  return (
    <div className='contenedor'>
    <h2>{props.greeting}</h2>
    <ItemList productos={productos} />
    </div>
  )
  
}

export default ItemListConteiner