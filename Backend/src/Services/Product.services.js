const {Product} = require('../Model/CreateProduct.Model');
const { User } = require('../Model/User.Model');



const CreateProduct= async(req)=>{
    let body=req.body;
    
    let create= await Product.create(body)
    return create
}



const DeleteProduct=async(req)=>{
    let id =req.params.id;
    let FindPro=await Product.findById(id)
    if(!FindPro){
        return ("Product Not Available")
    }
    else{
        Deletepro=await Product.findByIdAndDelete({_id:id},req.body,{new:true})
        return Deletepro
    }
}

const getProduct=async(req)=>{
   let findAllProduct= await Product.find()
   if(!findAllProduct){
    return("No Products Available")
   }
   else{
    return findAllProduct
   }
}


const PopularWomen=async(req)=>{
    let Products=await Product.find({Category:"women"});
    if(!Products){
        return Error("No Products")
    }
    else{
    let popilarInWomen = Products.slice(0,4);
    console.log(popilarInWomen)
    return popilarInWomen;
    }
}

const addProduct=async(req)=>{
    const {userId}=req
    console.log(req.body,"sdvidsgdsg")
    let data=req.body;
    console.log(data,"svfvf")
    let userData= await User.findOne({_id:userId})
    console.log(userData,"vvddbdv")
    userData.cartData[data.itemId]+=1
    let updateUserCart= await User.findOneAndUpdate({_id:userId},{cartData:userData.cartData})
    return updateUserCart
}

const removeProduct=async(req)=>{
    const {userId}=req
    console.log(req.body,"sdvidsgdsg")
    let data=req.body;
    console.log(data,"svfvf")
    let userData= await User.findOne({_id:userId})
    console.log(userData,"vvddbdv")
    if(userData.cartData[data.itemId]>0)
    userData.cartData[data.itemId]-=1
    let removeUserCart= await User.findOneAndUpdate({_id:userId},{cartData:userData.cartData})
    return removeUserCart
}


const getCartItem=async(req)=>{
    const {userId}=req
    let data=req.body;
    let userData=await User.findOne({_id:userId});
    if(!userData){
        return console.log("No cart items");
    }
    else{
        console.log(userData.cartData,"fff")
        return userData.cartData;
    }
}


module.exports={
    CreateProduct,
    DeleteProduct,
    getProduct,
    PopularWomen,
    addProduct,
    removeProduct,
    getCartItem
}