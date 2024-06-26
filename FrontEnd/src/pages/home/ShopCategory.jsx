import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import dropdown_icon from "../../components/Assets/dropdown_icon.png";
import Item from "../../components/Item";
// import all_product from "../../components/Assets/all_product";
import '../../pages/home/ShopCategory.css'
import { RiArrowDropDownLine } from "react-icons/ri";
const ShopCategory = (props) => {
   const {all_product} = useContext(ShopContext);
  console.log(all_product,"sdgcydg")
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
         <span> sort by</span> <RiArrowDropDownLine className="text-[2rem] cursor-pointer" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product?.map((item, i) => {
          if (props.Category === item.Category) {
            return (
              <Item
                key={i}
                id={item._id}
                ProductName={item.ProductName}
                Product_Image={item.Product_Image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
