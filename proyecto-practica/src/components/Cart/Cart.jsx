import './index.css'
import { useContext } from 'react'
import { CartContext } from '../Context/context';
import Imagen from '../Imagen/Imagen';
import Product from '../ListaProductos/Product/Product';
import Button from '../Button/Button';
function Cart({hideCart}) {
    const { cart, addToCart, addOneMoreToCart, removeOneFromCart } = useContext(CartContext);
    return (
        <div className='cart'> 
        <Button onClick={() => hideCart()}>X</Button>  
            <ul className='cart-list'>
                {cart.map(ele => 
                    <li className='cart-ele' key={`${ele.product.nombre}${ele.product.precio}`}>
                        <p>{ele.product.nombre}</p>
                        <Imagen className="image" link={ele.product.imagen} title={ele.product.descripcion} />   
                        <p>Precio: {ele.product.precio}€</p>
                        <div className='cantidad'>
                        <Button className="button" onClick={ () => removeOneFromCart(ele.product)} text="🔽" />
                            {ele.cantidad}
                        <Button className="button" onClick={ () => addOneMoreToCart(ele.product)} text="🔼" />
                        </div>           
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Cart