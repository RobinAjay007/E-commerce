import { Link } from "react-router-dom";
// import headphone from "../../assets/images/headphones/list.png";
// import speaker from "../../assets/images/speakers/list2.png";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Checkout = () => {
  return (
    <div className=" my-9">
      <div className=" flex items-center gap-1 capitalize font-body">
        <Link to={"/home"}>
          <p className=" cursor-pointer">home</p>
        </Link>
        <MdKeyboardArrowRight />
        <Link to={"/user"}>
          <p className=" cursor-pointer">my account</p>
        </Link>
        <MdKeyboardArrowRight />
        <Link to={"/cart"}>
          <p className=" cursor-pointer">cart</p>
        </Link>
        <MdKeyboardArrowRight />
        <Link to={"/checkout"}>
          <p className=" cursor-pointer">checkout</p>
        </Link>
      </div>

      <div className=" w-5/6 my-8 m-auto">
        <h2 className=" font-body capitalize text-2xl font-semibold">
          billing details
        </h2>
        <div className=" w-2/5">
          <div>
            <label>
              first name<span>*</span>
            </label>
            <input type="text" required className=" w-full border"  />
          </div>
          <div>
            <label>
              company name<span>*</span>
            </label>
            <input />
          </div>
          <div>
            <label>
              street address<span>*</span>
            </label>
            <input />
          </div>
          <div>
            <label>
              appartment,floor,etc<span></span>
            </label>
            <input />
          </div>
          <div>
            <label>
              town/city<span>*</span>
            </label>
            <input />
          </div>
          <div>
            <label>
              phone number<span>*</span>
            </label>
            <input />
          </div>
          <div>
            <label>
              email address<span>*</span>
            </label>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
};
