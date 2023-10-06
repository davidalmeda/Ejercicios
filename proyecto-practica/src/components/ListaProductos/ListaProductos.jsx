import './index.css'
import { useState } from 'react'
import Product from './Product/Product'
import Button from '../Button/Button'
import useForm from './useForm'
function ListaProductos({ productos }) {
    const [productosActuales, setProductosActuales] = useState(productos)
    const { filters, handleOnChangeForm } = useForm()
    const { showOnlyStock, text } = filters
    function filterStock() {
        return productosActuales.filter((ele) => ele.stock > 0)
    }

    function filterByName() {
        setProductosActuales(productos.filter((ele) => ele.nombre.toUpperCase().includes(text.toUpperCase())))
    }

    function showProducts(products) {
        if (products.length > 0) {
            return products.map((ele) =>
                <li key={`${ele.nombre}${ele.precio}`}> <Product product={ele} /></li>)
        } else {
            if (showOnlyStock) {
                return "No hay ningún producto en stock en el momento"
            }
            else {
                return "No hay coincidencias en la búsqueda"
            }
        }
    }

    return (
        <div className='list-container'>
            <label className='label'>
                Mostrar solo productos con stock
                <input className='input' type="checkbox" name="checkbox" value={showOnlyStock} onChange={handleOnChangeForm} />
            </label>
            <label className='label'>
                Mostrar solo productos con stock
                <input className='input' type="text" name="text" value={text} onChange={handleOnChangeForm} />
            </label>
            <Button className="button" text="Buscar" onClick={filterByName} />
            <ul className='products-list'>
                {showOnlyStock ? showProducts(filterStock()) : showProducts(productosActuales)}
            </ul>
        </div>
    )
}

export default ListaProductos