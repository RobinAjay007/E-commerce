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


module.exports={
    upload,
    CreateProductt
}