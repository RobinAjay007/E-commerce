const {Product} = require('../Model/CreateProduct.Model');



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

module.exports={
    CreateProduct,
    DeleteProduct,
    getProduct
}