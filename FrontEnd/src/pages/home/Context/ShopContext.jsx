import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios'; 
import CartItems from "../../../components/CartItems/CartItems"
import emptyimg from '../../../components/Assets/cartempty.webp'
import { Link } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopContextprovider = (props) =>{
    const [all_product, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsResponse = await axios.get("http://localhost:4898/get/product");
                const products = productsResponse.data;
                setAllProduct(products);
    
                // Initialize default cart items
                const defaultCart = {};
                products.forEach(product => {
                    defaultCart[product._id] = 0;
                });
                setCartItems(defaultCart);
    
                if (localStorage.getItem("token")) {
                    const token = localStorage.getItem('token');
                    const config = {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    };
                    const cartResponse = await axios.post("http://localhost:4898/getcart", {}, config);
                    console.log("Cart Response:", cartResponse.data);
                    setCartItems(cartResponse.data);
                }
    
                setIsLoading(false); // Set isLoading to false when data fetching is done
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false); // Set isLoading to false even if there's an error
            }
        };
    
        fetchData();
    }, []);

    const addToCart = async (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            let config = {
                headers: {
                    authorization: "Bearer " + token,
                },
            };
    
            let data = { itemId }; // Create an object with itemId
    
            try {
                const response = await axios.post("http://localhost:4898/addtocart", data, config);
                console.log(response.data);
                // SetUseName(response.data.userName);
            } catch (error) {
                console.error("Error adding item to cart:", error);
                // Handle error
            }
        }
    }
    
    // const addToCart =async (itemId) => {
    //     setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
       
    //     if(localStorage.getItem('token')){
    //         let token=localStorage.getItem('token');
    //         let config = {
    //             headers: {
    //               authorization: "Bearer " + token,
    //             },
    //           };
    //           let ite={"itemId":itemId}
    //           console.log(ite,"idd")
    //           console.log(config, "config");
    //           await axios.post("http://localhost:4898/addtocart", config,ite).then((res) => {
    //             console.log(res.data);
    //             SetUseName(res.data.userName);
    //           });
    //     }
    // }

    const removeFromCart = async(itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));

        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            let config = {
                headers: {
                    authorization: "Bearer " + token,
                },
            };
    
            let data = { itemId }; // Create an object with itemId
    
            try {
                const response = await axios.post("http://localhost:4898/removecart", data, config);
                console.log(response.data);
              
            } catch (error) {
                console.error("Error remove item to cart:", error);
                // Handle error
            }
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            const product = all_product.find(product => product._id === itemId);
            if (product && quantity > 0) {
                totalAmount += product.new_price * quantity;
            }
        }
        return totalAmount;
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount }

    return (
        <ShopContext.Provider value={contextValue}>
         
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextprovider; 
