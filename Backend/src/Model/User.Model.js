const mongoose=require('mongoose');
const {v4}=require('uuid');



const UserSchema= new mongoose.Schema(
    {
        _id:{
            type:String,
            default:v4,
        },
        userName:{
            type:String,
            required:true,
            trim:true,
        },
        emailId:{
            type:String,
            required:true,
            trim:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            trim:true,
        },
        contact:{
            type:Number,
            required:true,
            trim:true,
        },
        profilepicture:{
            type:String,
        },
        active:{
            type:Boolean,
            default:true
        },
    },{
        timestamps:true
    }
);


const User= mongoose.model("Users",UserSchema);

module.exports={
    User,
}