const mongoose=require('mongoose');
const {v4}=require('uuid');


const OrderSchema= new mongoose.Schema(
    {
        _id:{
            type:String,
            default:v4,
        },
        User_ID:{
            type:String,
            required:true,
            trim:true
        },
        Product:[{
            Product_ID:{
                type:String,
                required:true,
                trim:true
            },
            quantity:{
                type:Number,
                required:true,
                trim:true
            }
        }],
        toatalPrice:{
            type:Number,
            trim:true
        }
    },
    {
        timestamps:true
    }
);


const Order=mongoose.model("Orders",OrderSchema);

module.exports={
    Order
}