import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItem, setCartItem] = useState([]);

  useEffect(()=>{
    getCartData();
  },[])

  const getCartData = () =>{
    axios.get("http://localhost:8080/cartItems")
    .then((res)=>{
      setCartItem(res.data)
    })
  }

  const AddToCart = (item) =>{
    console.log("cart",item)
    axios.post("http://localhost:8080/cartItems",item)
    // .then((res)=>{
    //   setCartItem(res.data)
    //   console.log(res.data)
    // })
    // console.log(cartItem)
    getCartData();
  }

  const removeFromCart = (id) =>{
    let item = cartItem.find((item)=>item.productId === id)

    if(item.productId){
      axios.delete(`http://localhost:8080/cartItems/${item.productId}`)
      //  .then((res)=>{ 
      // let updatedCart = cartItem.filter((item)=> item.productId !== id)
      // setCartItem(updatedCart);
    // })
      getCartData();
    }
  }

  const updateCount = (id, count) =>{

    // axios.patch()

  }

 let len = cartItem.length

  // console.log( 'cartItem',cartItem.length)
  return <CartContext.Provider value={{AddToCart,removeFromCart,len}}>{children}</CartContext.Provider>;
};
