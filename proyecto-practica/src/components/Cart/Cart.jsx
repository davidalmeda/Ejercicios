import './index.css'
import { useContext } from 'react'
import { CartContext } from '../Context/context';
import Product from '../ListaProductos/Product/Product';
function Cart() {
    const { cart, addToCart } = useContext(CartContext);
    return (
           
            <ul>
                {cart.map(ele => {
                    {console.log(ele)}
                    <li key={`${ele.product.nombre}${ele.product.precio}`}> <Product product={ele.product} /></li>
                })}

            </ul>
    )
}

export default Cart