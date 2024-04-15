const express = require('express')
const router=express.Router();
const fileupload = require('../Middleware/userFileUpload')
const {verifyAuthToken}= require('../Middleware/Auth')
const productController=require('../Controller/ProductController')
const UserController=require('../Controller/user.controller')

// upload image
router.route("/upload").post(fileupload.upload.single("images"),productController.upload)

// Create Product
router.route("/addProduct").post(productController.CreateProductt)

// create
router.route("/create/User").post(UserController.user_Create_service)
// Login
router.route("/check/user").post(UserController.Login_Check)

//verify token and get details
router.route("/get/user").get(verifyAuthToken,UserController.getUserDetails)

//  delete product
router.route("/delete/product/:id").delete(productController.DeleteProduct)

//get all product
router.route("/get/product").get(productController.GetAllProduct)

router.route("/uploadimage/:id").put(fileupload.upload.single("images"),UserController.upload)


router.route("/addtocart").post(verifyAuthToken,productController.cartitem)

router.route("/removecart").post(verifyAuthToken,productController.removecartitem)

router.route("/getcart").post(verifyAuthToken,productController.getcartitem)
module.exports={
    router,
}



