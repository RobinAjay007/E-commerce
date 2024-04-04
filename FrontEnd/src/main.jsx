import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Router/router.jsx';
import App from './App.jsx';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopContextprovider from './pages/home/Context/ShopContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
<ShopContextprovider>
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer/>
     {/* <App/> */}
  </React.StrictMode>
  </ShopContextprovider>,

)
