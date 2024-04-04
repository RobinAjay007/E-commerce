const mongoose=require('mongoose');
const {v4}=require('uuid');


const ReviewSchema= new mongoose.Schema(
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
        Product_ID:{
            type:String,
            required:true,
            trim:true
        },
        rating:{
            type:Number,
            trim:true
        },
        comment:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
);


const Review=mongoose.model("Reviews",ReviewSchema);

module.exports={
    Review
}