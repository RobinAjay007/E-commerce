import React from "react";
// import collection from "../../../public/images/products/collection-bg.png"

const Collectiion = () => {
  return (
    <div
      className='bg-[url("/images/collection-bg.png")] bg-cover bg-no-repeat bg-center xl:px-28 px-4
    my-20'
    >
      
      <div className="h-[580px] flex justify-between md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="/public/images/zara-logo.png" alt="" />
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[30px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="bg-white text-black py-2 px-6 rounded-sm font-semibold">See Collection</button>
        </div>
      </div>
      
    </div>
  );
};

export default Collectiion;
