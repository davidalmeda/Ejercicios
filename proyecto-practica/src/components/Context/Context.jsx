import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  addOneMoreToCart: () => {},
  removeOneFromCart: () => {}
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

  const addOneMoreToCart = (element)  => {
    const carrito = cart.map(ele => ele.product)
    const copy = [...cart]
    if(element.stock<cart.find(ele => ele.product == element).cantidad +1) {
      alert("No hay stock suficiente del prooducto")
      return
    }
    copy[carrito.indexOf(element)] = {product: element, cantidad: cart.find(ele => ele.product == element).cantidad +1}
    setCart(copy)
  }

  const removeOneFromCart = (element) => {
    const carrito = cart.map(ele => ele.product)
    const copy = [...cart]
    if(cart.find(ele => ele.product == element).cantidad > 1) {
      copy[carrito.indexOf(element)] = {product: element, cantidad: cart.find(ele => ele.product == element).cantidad -1}
      setCart(copy)
      return
    }
    copy.splice(carrito.indexOf(element), 1)
    setCart(copy)
  }

  const contextValue = {
    cart: cart,
    addToCart: addToCart,
    addOneMoreToCart: addOneMoreToCart,
    removeOneFromCart: removeOneFromCart
  }
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )

}
export { CartProvider }
