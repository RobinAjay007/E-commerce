import React from "react";
import { Link } from "react-router-dom";
import { BsEyeFill, BsPlus } from "react-icons/bs";

const Cards = ({ filteredItems }) => {
  return (
    <div
      className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center
     gap-14 shadow-sm "
    >
      {filteredItems?.slice(0, 8).map((items) => {
        return (
          <div key={items.id}>
            <div className="relative">
              <Link to={`/shop/${items.id}`}>
                <img
                
                  src={items.image}
                  alt=""
                  className="mx-auto w-full hover:scale-105"
                />
              </Link>
              <div className="absolute top-3 right-0
              hover:right-3 bg-red-500/40
               p-2 flex flex-col items-center justify-center 
               gap-y-2 opacity-0 hover:opacity-100 transition-all
               duration-300">
                <button>
                <div className="flex justify-center items-center
                text-white w-12 h-12 bg-red-500">
                    <BsPlus className="text-3xl"/>
                    </div>
                </button>
                <Link to={`/shop/${items.id}`}
                className="w-12 h-12 bg-white flex justify-center
                items-center text-primary drop-shadow-xl">
                  <BsEyeFill />
                </Link>
              </div>
            </div>

            <div className="mt-4 px-4">
              <h4 className="text-base font-semibold mb-2">{items.title}</h4>
              <div className="flex justify-between">
                <p className="text-black/50">{items.category}</p>
                <p className="font-semibold">{items.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
