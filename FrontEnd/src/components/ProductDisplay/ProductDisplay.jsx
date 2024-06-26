import React, { useContext, useState } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import all_product from '../Assets/all_product'
import { ShopContext } from '../../pages/home/Context/ShopContext'
import { Link } from 'react-router-dom'
const ProductDisplay = (props) => {
  const{addToCart}=useContext(ShopContext)

    const {product}=props
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className="productdisplay-img-list">
            <img src={product.Product_Image} alt="" />
            <img src={product.Product_Image} alt=""  />
            <img src={product.Product_Image} alt=""  />
            <img src={product.Product_Image} alt=""  />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.Product_Image} alt=""  />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.ProductName}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>({122})</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}  
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}  
            </div>
        </div>
        <div className='productdisplay-right-description'>
            A lightweight usually knitted pullover shirt, close-fitting and with
            a round neckline and short sleeves, worn as an undershirt or outer
           garment
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXl</div>
            </div>
        </div>
        <Link to={"/cart"}><button onClick={()=>{addToCart(product._id)}}>ADD TO CART</button></Link>
        <p className='productdisplay-right-category'><span>Category</span>Women, T-shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay