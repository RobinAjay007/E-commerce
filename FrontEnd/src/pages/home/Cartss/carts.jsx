import { Link } from "react-router-dom";
// import headphone from "../../assets/images/headphones/list.png";
// import speaker from "../../assets/images/speakers/list2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Carts = () => {
  // const items = [
  //   {
  //     img: headphone,
  //     title: "stone spinix",
  //     price: 3499,
  //   },

  //   {
  //     img: speaker,
  //     title: "ultima select",
  //     price: 2999,
  //   },
  // ];
  return(
    <div className=" my-4">
        <div className=" w-1/4  flex justify-center items-center gap-1 ">
            {/* <Link to={'/'}>
                <p className=" capitalize font-body text-xs cursor-pointer">home</p>
            </Link>
            <MdKeyboardArrowRight />
            <Link to={'/cart'}>
                <p className=" capitalize font-body text-xs cursor-pointer">cart</p>
            </Link> */}
        </div>
        <div className=" w-11/12 m-auto my-2">
            <div className=" w-full flex justify-around items-center  capitalize font-body text-sm h-10 shadow-md">
                <h2 className=" w-1/4 text-center">product</h2>
                <h2 className=" w-1/4 text-center">price</h2>
                <h2 className=" w-1/4 text-center">quantity</h2>
                <h2 className=" w-1/4 text-center">total</h2>
            </div>
            <div className="w-full flex justify-around items-center  capitalize font-body text-sm h-18 shadow-md my-3">
              <div className=" w-1/4 flex justify-center items-center ">
                {/* <img src={headphone} alt="headphone" className=" w-16"/> */}
                <h2>rokerz 254F</h2>
              </div>
              <div className=" w-1/4 flex justify-center items-center">
              <MdOutlineCurrencyRupee />
                <p>1499</p>
              </div>
              <div className=" w-1/4 flex justify-center items-center gap-2">
                <p>01</p>
                <div>
                <IoIosArrowUp  className=" cursor-pointer"/>
                <IoIosArrowDown className=" cursor-pointer" />
                </div>
              </div>
              <div className=" w-1/4 flex justify-center items-center">
              <MdOutlineCurrencyRupee />
              <p>1499</p>
              </div>
            </div>
            <div className="w-full flex justify-around items-center  capitalize font-body text-sm h-18 shadow-md my-3">
              <div className=" w-1/4 flex justify-center items-center ">
                {/* <img src={speaker} alt="headphone" className=" w-16"/> */}
                <h2>stone pro</h2>
              </div>
              <div className=" w-1/4 flex justify-center items-center">
              <MdOutlineCurrencyRupee />
                <p>1999</p>
              </div>
              <div className=" w-1/4 flex justify-center items-center gap-2">
                <p>02</p>
                <div>
                <IoIosArrowUp  className=" cursor-pointer"/>
                <IoIosArrowDown className=" cursor-pointer" />
                </div>
              </div>
              <div className=" w-1/4 flex justify-center items-center">
              <MdOutlineCurrencyRupee />
              <p>3998</p>
              </div>
            </div>
            <div className=" w-full flex justify-between">
              <Link to={'/'}>
              <button className=" capitalize text-xs font-body font-medium border border-gray-500 py-2 px-1 shadow-md">return to shop</button>
              </Link>
              <Link>
              <button className=" capitalize text-xs font-body font-medium border border-gray-500 py-2 px-1 shadow-md">update cart</button>
              </Link>
            </div>
        </div>
        <div className=" w-11/12 m-auto my-7 flex gap-5 justify-between">
            <div className=" w-1/2 h-8 flex gap-1 md:w-2/6 ">
              <input type="text" className="md:w-2/3 border border-slate-500"/>
              <button className=" border border-slate-500 bg-red-600 text-white capitalize font-body text-sm px-1">apply coupon</button>
            </div>
            <div className=" w-2/5 md:w-1/3 border-2 border-solid border-black px-2 py-4 grid gap-2">
              <h2 className=" capitalize font-body text-lg">card total</h2>
              <div className="w-full flex justify-between border-b-2 py-1">
                <p className=" capitalize font-body text-sm">subtotal:</p>
                <div className=" flex items-center">
                <MdOutlineCurrencyRupee />
                <p className=" font-body text-sm">5497</p>
                </div>
              </div>
              <div className="w-full flex justify-between border-b-2 py-1 capitalize font-body text-sm">
                <p>shipping</p>
                <p>free</p>
              </div>
              <div className="w-full flex justify-between  py-1">
                <p className=" capitalize font-body text-sm">total:</p>
                <div className=" flex items-center font-body text-sm">
                <MdOutlineCurrencyRupee className=" w-4 h-4" />
                <p>5497</p>
                </div>
              </div>
              <div className=" w-full flex justify-center py-1">
              <Link to={"/checkout"}>
              <button className=" border px-1 py-2 capitalize font-body text-sm bg-red-500 text-white">process to checkout</button>
              </Link>
              </div>
            </div>
        </div>
    </div>
  )
};
