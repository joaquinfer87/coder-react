import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getUnProducto(1)
            .then(res => setProducto(res))
    }, [])

    return (
        <div className='contenedorDeta'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer