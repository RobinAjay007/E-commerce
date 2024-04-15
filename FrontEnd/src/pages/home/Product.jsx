import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from "./Context/ShopContext";
// import all_product from "../../components/Assets/all_product";
import Breadcrum from '../../components/Breadcrums/Breadcrum';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Description from '../../components/Description/Description';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';


const Product = () => {

const {all_product}=useContext(ShopContext)
 console.log(all_product,"jjjuij")
    const {id} = useParams();
    const product = all_product.find((e)=>{return e._id===id})
    console.log(product,"product")
  return (
    <div>
         <Breadcrum product={product}/> 
         <ProductDisplay product={product}/>
         <Description/>
         <RelatedProduct/>
    </div>
  )
}

export default Product



