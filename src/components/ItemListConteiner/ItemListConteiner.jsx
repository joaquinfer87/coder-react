import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListConteiner.css'
import {getProductos, getProductosPorCategoria} from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState ([])
  
  const {idCategoria} = useParams();


  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.error(error))
  }, [idCategoria])
  
  return (
    <div className='contenedor'>
    <h2>{props.greeting}</h2>
    <ItemList productos={productos} />
    </div>
  )
  
}

export default ItemListConteiner