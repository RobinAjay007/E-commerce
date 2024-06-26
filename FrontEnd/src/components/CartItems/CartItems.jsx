// import React, { useContext } from "react";
// import "./CartItems.css";
// import { ShopContext } from "../../pages/home/Context/ShopContext";
// import cart_cross_icon from "../../../public/cart_cross_icon.png";
// // import all_product from "../Assets/all_product";
// // import emptyimg from '../Assets/cartempty.webp'
// const 
// CartItems = () => {
//   const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
//  console.log(getTotalCartAmount(),"ggcjb")
//   return (
//     <div>
    
// <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product?.map((e) => {
//         console.log(cartItems[e._id],"fffff");
//         if (cartItems[e._id] > 0) {
//           return (
//             <div>
//               <div className="caritems-format cartitems-format-main">
//                 <img src={e.Product_Image} alt="" className="carticon-product-icon" />
//                 <p>{e.ProductName}</p>
//                 <p>${e.new_price}</p>
//                 <button className="cartitems-quantity">
//                   {cartItems[e._id]}
//                 </button>
//                 <p>{e.new_price * cartItems[e._id]}</p>
//                 <img
//                   className="cartitems-remove-icon"
//                   src={cart_cross_icon}
//                   alt=""
//                   onClick={() => {
//                     removeFromCart(e._id);
//                   }}
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr/>
//             <div className="cartitems-total-item">
//                 <p>Shipping Fee</p>
//                 <p>Free</p>
//             </div>
//             <hr/>
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//             <p>
//               If you have a promo code, Enter it here
//             </p>
//             <div className="cartitems-promobox">
//               <input type="text" placeholder="promo code" />
//               <button>Submit</button>
//             </div>
//         </div>
//       </div>
//     </div>
        
    
    
//     </div>
//   );
// };

// export default CartItems;



import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../pages/home/Context/ShopContext";
import cart_cross_icon from "../../../public/cart_cross_icon.png";
// import emptyimg from '../Assets/cartempty.webp';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log("all_product:", all_product);
  console.log("cartItems:", cartItems);
  console.log("totalCartAmount:", getTotalCartAmount());

  
  return (
    <div>
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product?.map((e) => {
          if (cartItems[e._id] > 0) {
            return (
              <div key={e._id}>
                <div className="caritems-format cartitems-format-main">
                  <img src={e.Product_Image} alt="" className="carticon-product-icon" />
                  <p>{e.ProductName}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">{cartItems[e._id]}</button>
                  <p>{e.new_price * cartItems[e._id]}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={cart_cross_icon}
                    alt=""
                    onClick={() => {
                      removeFromCart(e._id);
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

