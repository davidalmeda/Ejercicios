import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cart: [],
  addToCart: () => {}
});
export {CartContext}

function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  const addToCart = element => {
    const carrito = cart.map(ele => ele.product)
    console.log(carrito)
    if (carrito.includes(element)) {
      console.log("HOLAAAAAAAAAAAAAAAAAAAAA")
      const copy = [...carrito]
      console.log(copy)
      //No funciona por que no solo tiene el elemento sino tmb la cantidad(Hacerlo con carrito en vez de cart)
      copy[copy.indexOf(element)] = {product: element, cantidad: cart.find(ele => ele.product == element).cantidad +1}
      setCart(copy)
    } else {
      setCart([ ...cart, {product: element, cantidad: 1} ]);
    }
  }
  const contextValue = {
    cart: cart,
    addToCart: addToCart
  }
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )

}
export { CartProvider }
