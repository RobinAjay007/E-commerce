import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import SingleProduct from "../pages/home/SingleProduct";
import Login from "../pages/home/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "../pages/home/Register";
import Products from "../pages/home/Products";
import NewCatePage from "../pages/home/NewCatePage";
import Electronics from "../pages/home/Electronics";
import {Carts} from "../pages/home/Cartss/carts";
import {Checkout} from "../pages/home/Cartss/checkout";
import {User} from "../pages/home/profile";
import ShopCategory from "../pages/home/ShopCategory";
import kid_banner from '../components/Assets/banner_kids.png'
import men_banner from '../components/Assets/banner_mens.png'
import women_banner from '../components/Assets/banner_women.png'
import Product from "../pages/home/Product";
import Cart from "../pages/home/Cart";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/dress",
        element: <NewCatePage />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
      {
        path: "/profile",
        element: <User/>,
      },
      {
        path: "/mens",
        element: <ShopCategory banner={men_banner} category="men"/>,
      },
      {
        path: "/women",
        element: <ShopCategory banner={women_banner} category="women"/>,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kid_banner} category="kid"/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
        
      },
    ],
  },
]);

export default router;
