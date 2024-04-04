const {Product} = require('../Model/CreateProduct.Model');



const CreateProduct= async(req)=>{
    let body=req.body;

    let create= await Product.create(body)
    return create
}



// deleting api

// const DeleteProduct=async(req)=>{
//     let id=req.params.id
// }

module.exports={
    CreateProduct
}