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



module.exports={
    router,
}



