import React from "react";
import "../Description/Description.css";

const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that faclitates the buying
          and selling of products or services over the internet. It servers as a
          virtual markplace where businesses and individuals can showcase their
          products. Interact with customers, and conduct transactions without
          the need for a physical presence. E-commerce websites have gained
          immense popularity due to their convenience, accessibility, and the
          global reach they offer.
        </p>
        <p>
            E-commerce wensites typically display products or services along with detailed description, images, prices, and any available variations (eg, sizes, colors). Each product usually has its own dedicated page with relevant information
        </p>
      </div>
    </div>
  );
};

export default Description;
