const mongoose=require('mongoose');
const {v4}=require('uuid');


const CategorySchema= new mongoose.Schema(
    {
        _id:{
            type:String,
            default:v4,
        },
        category_name:{
            type:String,
            required:true,
            trim:true
        },
        active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true
    }
);

const Category= mongoose.model("Categories",CategorySchema);

module.exports={
    Category
}