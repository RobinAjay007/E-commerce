import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
import axios from 'axios'; 
import cross_icon from '../assets/cross_icon.png'
const ListProduct = () => {

  const [allProducts,setAllProducts]=useState([]);

  const GetAllProducts=async()=>{
      await axios.get("http://localhost:4898/get/product")
      .then((res)=>{
        setAllProducts(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    GetAllProducts()
  },[])

  const remove_product =async(id)=>{
    await axios.delete(`http://localhost:4898/delete/product/${id}`)
    .then(()=>{
       GetAllProducts()
    })
  }
  return (
    <div className='list-product'>
        <h1>All Products Lists</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr/>
          {
            allProducts?.map((product,index)=>{
              return(
                <>
                <div key={index} className='listproduct-format-main listproduct-format'>
                  <img src={product.Product_Image} alt="" className='listproduct-product-icon'/>
                  <p>{product.ProductName}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.Category}</p>
                  <img onClick={()=>remove_product(product._id)} className='listproduct-remove-icon' src={cross_icon} alt="" />
                </div>
                <hr/>
                </>
              )
            })
          }
        </div>
    </div>
  )
}

export default ListProduct