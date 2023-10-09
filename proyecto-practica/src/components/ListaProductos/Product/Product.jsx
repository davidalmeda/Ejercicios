import { useState, useContext } from 'react'
import './index.css'
import Imagen from '../../Imagen/Imagen'
import { CartContext } from '../../Context/context';
import Button from '../../Button/Button';

function Product({product}) {
    const { cart, addToCart } = useContext(CartContext);
    const { imagen, nombre, descripcion, precio, stock } = product
    return (
        <div className='product'>
            <h1>{nombre}</h1>
            <Imagen className="image" link={imagen} title={descripcion} />
            <p>{descripcion}</p>
            <p>Precio: {precio}€</p>
            <p>{stock == 0 ? "Producto no disponible por el momento" : ` Unidades disponibles: ${stock}`}</p>
            <Button className="button" text="Add to cart" onClick={() => addToCart(product)}/>
        </div>
    )
}

export default Product
