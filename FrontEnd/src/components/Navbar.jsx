import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import axios from "axios";
import { ShopContext } from "../pages/home/Context/ShopContext";

const Navbar = () => {
  const{refresh}=useContext(ShopContext)
  console.log(refresh)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [refreshed, setRefreshed] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const [UseName, SetUseName] = useState([]);

  const navItems = [
    
    {
      title: "Electronics",
      path: "/electronics",
    },
    {
      title: "Clothing & Shoes",
      path: "/dress",
    },
    {
      title: "Men",
      path: "/mens",
    },
    {
      title: "Women",
      path: "/women",
    },
    {
      title: "Kid",
      path: "/kids",
    },
    {
      title: "Arts & Collectables",
      path: "/",
    },
    {
      title: "Craft Supplies & Tools",
      path: "/",
    },
  ];


  const getUser = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    let config = {
      headers: {
        authorization: "Bearer " + token,
      },
    };
    console.log(config, "config");
    await axios.get("http://localhost:4898/get/user", config).then((res) => {
      console.log(res.data);
      SetUseName(res.data.userName);
    });
  };
  useEffect(() => {
    getUser()
    // setRefreshed(true)
  }, [UseName]);

  console.log(UseName)

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block" />

        {/* logo */}

        <Link>
          <img src={logo} alt="" />
        </Link>
        {/* account and shoopin btn */}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          {localStorage.getItem("token") ? (
            <Link to={"/profile"}>
              <span className="flex items-center gap-2">
                <FaUser />
                Hi {UseName}
              </span>
            </Link>
          ) : (
            <Link to={"/login"}>
              <span className="flex items-center gap-2">
                <FaUser />
                Account
              </span>
            </Link>
          )}
          {localStorage.getItem("token")?
         (<Link to={"/cart"}> 
            <span className="flex items-center gap-2">
              <FaShoppingBag />
              Shopping
            </span>
          </Link>):('')
}

        </div>

        {/*  navbar and sm devices*/}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes />
            ) : (
              <FaBars className="text-Black w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      {/* Category items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden ">
          {navItems?.map(({ title, path }) => {
            return (
              <Link to={path}>
                {" "}
                <li key={title} className="hover:text-orange-500">
                  {title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* category items for small */}
      <div className="pt-4">
        <ul
          className={`bg-Black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems?.map(({ title, path }) => {
            return (
              <li
                key={title}
                className="hover:text-orange-500 my-3 cursor-pointer"
              >
                {title}
              </li>
            );
          })}
          {localStorage.getItem("token")?<li  className="hover:text-orange-500 my-3 cursor-pointer flex items-center gap-2"><FaUser/> Hi ! {UseName}</li>:<li  className="hover:text-orange-500 my-3 cursor-pointer">Sign In</li>}
          <li  className="hover:text-orange-500 my-3 cursor-pointer">Shopping Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
