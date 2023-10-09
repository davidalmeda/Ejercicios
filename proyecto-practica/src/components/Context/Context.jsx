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
    if(element.stock==0) {
      alert("No hay stock del prooducto")
      return
    }
    if (carrito.includes(element)) {
      const copy = [...cart]
      if(element.stock<cart.find(ele => ele.product == element).cantidad +1) {
        alert("No hay stock suficiente del prooducto")
        return
      }
      copy[carrito.indexOf(element)] = {product: element, cantidad: cart.find(ele => ele.product == element).cantidad +1}
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
