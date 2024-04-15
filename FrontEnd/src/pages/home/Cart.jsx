import React, { useContext} from "react";
import CartItems from "../../components/CartItems/CartItems";
import { ShopContext } from "./Context/ShopContext";
import emptyimg from '../../components/Assets/cartempty.webp'
import { Link } from "react-router-dom";

const Cart = () => {
 const {cartItems}=useContext(ShopContext)
 console.log("CartItems:", cartItems);



 // Check if cartItems object is empty
 const isEmptyCart = Object.keys(cartItems).every(key => cartItems[key] === 0); 
 console.log("isEmptyCart:", isEmptyCart);
  return (
    <div>
       {
        isEmptyCart?
        (<div className="grid place-content-center mt-8">
        <img src={emptyimg} alt="" className="w-[400px] "/>
       <div className="text-center bg-blue-600 w-[10rem] ml-[7rem] h-7 grid place-content-center">
       <Link to={'/'}><button className="text-white">Shop Now</button></Link>
       </div>
        </div> )
        :
        ( 
          <CartItems/>
        )
        } 
     

      
    </div>
  );
};

export default Cart;

