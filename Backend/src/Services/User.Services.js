const { User } = require("../Model/User.Model");
const Bcrypt = require("bcryptjs");
const {Product} = require('../Model/CreateProduct.Model');
//create user  and encrypt the password usin bcryptjs

const UserCreate = async (req) => {
  const {emailId,password} = req.body;

  let salt = await Bcrypt.genSaltSync(10);
  let hash = await Bcrypt.hashSync(password, salt);
  console.log(hash,"encrypt pass")
  let findemail=await User.findOne({emailId:emailId})

  // condition
  if(findemail){
    return console.log("User already registerd")
  }
  else{
  let products= await Product.find()
  const defaultCart = {};
  products.forEach(product => {
      defaultCart[product._id] = 0;
  });
 
  let create = await User.create({ ...req.body, ...{ password: hash },...{cartData:defaultCart}});
  return create;
}
};

// login and password check

const LoginByEmailAndPassword = async (req) => {
  const { emailId, password } = req.body;
  
  let FindEmailid = await User.findOne({ emailId: emailId });
  let compare =await Bcrypt.compare(password, FindEmailid.password);
  if (compare && FindEmailid != null) {
    // let updatecart=await Product.find();
    // const defaultCart = {};
    // updatecart.forEach(product => {
    //     defaultCart[product._id] = 0;
    // });
    // let create = await User.create({...{cartData:defaultCart}});
   
    return FindEmailid;
  } else {
   return error("Incorrect credentials or User Not Found ");
  }
};


const getUserdetails= async(req)=>{
    const {userId}=req
    let findUserID=await User.findById(userId);
    if(!findUserID){
      return null;
    }
    else{
      let clientData = {
        userName: findUserID.userName,
        email: findUserID.emailId,
      };
      return clientData;
    }
}


//

const uploadImage= async(req,path)=>{
  let id = req.params.id;
  let getUserID=await User.findById(id);
  if(!getUserID){
     console.log("user not found")
  }
  else{
    const uploadprofile = await User.findByIdAndUpdate({_id:id},{profilepicture:path},{new:true});
    return uploadprofile;
  }
}


module.exports = {
  UserCreate,
  LoginByEmailAndPassword,
  getUserdetails,
  uploadImage
};
