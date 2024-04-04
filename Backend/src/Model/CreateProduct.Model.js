const mongoose= require('mongoose')
const{v4}=require('uuid')


const  ProductSchema = new mongoose.Schema(
    {
        _id:{
            type:String,
            default:v4
        },
        ProductName:{
            type:String,
            required:true,
            trim:true
        },
        Product_Image:{
            type:String,
            required:true,
        },
        Category:{
            type:String,
            required:true
        },
        new_price:{
            type:Number,
            required:true
        },
        old_price:{
            type:Number,
            required:true
        },
        active:{
            type:Boolean,
            default:true
        }  

    },{
        timestamps:true
    }
);

const Product = mongoose.model("Product",ProductSchema);

module.exports={
    Product
}