import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../assets/upload_area.svg"; 
import axios from 'axios'; 

const AddProduct = () => {
  // State to manage the selected image file
  const [image, setImage] = useState(false);

  // State to manage the product details
  const [productDetails, setProductDetails] = useState({
    ProductName: "",
    Product_Image: "",
    Category: "",
    old_price: "",
    new_price: "",
  });

  // Function to handle the change event of the file input
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // Function to handle the change event of input elements for product details
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  // Function to handle adding a product
  const Add_Product = async () => {
    console.log(productDetails);

    try {
      const formData = new FormData();
      formData.append("images", image); // Appending the selected image file to FormData

      // Sending the FormData containing the image file to the server for upload
      const response = await axios.post("http://localhost:4898/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response from server:", response);

      const { data } = response;

      console.log("Data from server:", data);

      // If image upload is successful
      if (data.success) {
        const updatedProductDetails = { ...productDetails, Product_Image: data.image_url };
        console.log("Updated product details:", updatedProductDetails);

        // Sending product details (including the image URL) to addProduct endpoint
        await axios.post("http://localhost:4898/addProduct", updatedProductDetails)
          .then((res) => {
            if (res.data) {
              alert("Product Added");
            } else {
              alert("Failed to Add Product");
            }
          })
          .catch((error) => {
            console.error("Error adding product:", error);
            alert("Failed to Add Product");
          });
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfiled">
        <p>Product title</p>
        <input type="text" value={productDetails.ProductName} onChange={changeHandler} name="ProductName" placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfiled">
          <p>Price</p>
          <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfiled">
          <p>Offer Price</p>
          <input type="text" value={productDetails.new_price} onChange={changeHandler} name="new_price" placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfiled">
        <p>Product Category</p>
        <select name="Category" value={productDetails.Category} onChange={changeHandler}  className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="addproduct-thumnail-img" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      <button onClick={() => { Add_Product() }} className="addproduct-btn">ADD</button>
    </div>
  );
};

export default AddProduct;
