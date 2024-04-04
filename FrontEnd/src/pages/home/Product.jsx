import React from 'react'
import { useParams } from 'react-router-dom'
import all_product from "../../components/Assets/all_product";
import Breadcrum from '../../components/Breadcrums/Breadcrum';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Description from '../../components/Description/Description';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';


const Product = () => {
    const {id} = useParams();
    const product = all_product.find((e)=>{return(e.id=== Number(id))})
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