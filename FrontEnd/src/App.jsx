import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import Home from "./pages/home/Home";
// import SingleProduct from "./pages/home/SingleProduct";
// import Login from "./pages/home/Login";
// import Index from "./pages/home/Index";

function App() {
  return (
    <div >
      <Navbar />
      <Outlet />
      <Footer/>
      
      {/* <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/index" element={<Index/>}/>
        <Route path="/" element={<Home/>}>
        <Route path="/shop/:id" element={<SingleProduct/>}/> 
        </Route>
      </Routes>
      <ToastContainer/> */}
    </div>
  );
}

export default App;
