const ProductServices=require('../Services/Product.services')
//  image upload 

const upload =async (req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:4898/${req.file.filename}`
    })
}

// Create Product

const CreateProductt=async(req,res)=>{
    
    let data=await ProductServices.CreateProduct(req)
    res.send(data)
}

// Delete Product

const DeleteProduct=async(req,res)=>{
    let data=await ProductServices.DeleteProduct(req)
    res.json({
        success:true,
        name:data.ProductName
    })
}


// Get Product

const GetAllProduct=async(req,res)=>{
    let data=await ProductServices.getProduct(req)
   res.send(data)
}

const cartitem=async(req,res)=>{
    let data =await ProductServices.addProduct(req)
    res.send("Added")
}

const removecartitem=async(req,res)=>{
    let data =await ProductServices.removeProduct(req)
    res.send("Removed")
}

const getcartitem=async(req,res)=>{
    let data =await ProductServices.getCartItem(req)
    console.log(data)
    res.send(data)
}


module.exports={
    upload,
    CreateProductt,
    DeleteProduct,
    GetAllProduct,
    cartitem,
    removecartitem,
    getcartitem
}