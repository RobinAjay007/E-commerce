const UserCreate= require('../Services/User.Services');

const {generateAuthToken}=require('../Middleware/Auth');
// const { User } = require('../models/user.model');




const user_Create_service= async(req,res)=>{
let create_servie= await UserCreate.UserCreate(req)
if(!create_servie){
  res.status(400).send({message:"User already registered"})
}
else{
  console.log(create_servie)
  res.send({create_servie,success:"Sucessfully Registered"})
}

}



                                                                        
const Login_Check= async(req,res)=>{
    let check= await UserCreate.LoginByEmailAndPassword(req)
    console.log(check,"")
   let token= await generateAuthToken(check);
    if(check){
     res.send({token:token, name:check.userName,
    success:"Login Sucessfully"})
    }
    else{
    res.status(400).send({failed:"Invalid Credentials or User Not Found"})
    }
    }



    const getUserDetails= async(req,res)=>{
      let getuser=await UserCreate.getUserdetails(req)
      res.send(getuser)
    }

    // profile image upload

    const upload= async (req,res)=>{
      data=req.file;
      if(data){
        // let path="/public"
        let fileName = data.filename
        console.log(fileName,"Controller")
        const userData = await UserCreate.uploadImage(req,fileName)
        res.send(userData);
      }
      else{
        res.status(400).send("upload Failed");
      }
    }
module.exports={
    user_Create_service,
    Login_Check,
    getUserDetails,
    upload,
}