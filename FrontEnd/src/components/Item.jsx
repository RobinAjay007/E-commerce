import React from 'react'
import '../components/Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {

  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" width={270} height={300} /></Link>
        <p className='w-[17rem]'>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                ${props.new_price}
            </div>
            <div className='item-price-old'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item