import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collectiion from "./Collectiion";
import BestSellers from "./BestSellers";
import Newsletter from "./NewsLetter";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar/>
      <Outlet/>
      <Footer/> */}
       <Banner />
      <Category />
      <Products />
      <Collectiion />
      <BestSellers />
      <Newsletter />
    </div>
  );
};

export default Home;
