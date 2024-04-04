import React, { useState } from "react";
import { createContext } from "react";
import all_product from '../../../components/Assets/all_product'



export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart = {};
    console.log(cart,"iii")
    for(let index=0; index < all_product.length+1; index++){
        cart[index]=0
    }
    return cart
    
  }
 
const ShopContextprovider = (props) =>{
  const[refresh,Isrefresh]=useState(false)
    const[cartItems,setCartItems]= useState(getDefaultCart())
    const addToCart= (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems,"Add")
      }
      const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

      const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
          }
        }
      
        console.log(totalAmount, "total");
        return totalAmount;
      }
      
      const contextValue = {refresh,all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextprovider; 