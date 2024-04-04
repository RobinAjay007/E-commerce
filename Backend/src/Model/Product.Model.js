const mongoose=require('mongoose')
const {v4}=require('uuid')

const ProductSchema=new mongoose.Schema(
    {
        _id:{
            type:String,
            default:v4,
        },
        Product_Name:{
            type:String,
            required:true,
            trim:true   
        },
        Product_Description:{
            type:String,
            required:true,
            trim:true
        },
        Product_Price:{
            type:Number,
            required:true,
            trim:true
        },
        Category_Id:{
            type:String,
            required:true,
            trim:true
        },
        active:{
            type:Boolean,
            default:true
        }
    },{
        timestamps:true
    }
);

const Product= mongoose.model("Products",ProductSchema);

module.exports={
    Product
}