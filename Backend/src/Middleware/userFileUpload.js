const multer =require('multer');
const path=require('path');
// const upload=multer({dest:'uploads/'});

let counts=0;

const uploadToFolder= multer.diskStorage({
    destination: function(req,res,cb) {
        // path operation insert and get 
        cb(null, path.join(__dirname,'../../public'));
    },
    filename:function (req,file ,cb){
        let ext = path.extname(file.originalname);
        console.log(ext,"filefunction")
        counts++;
        cb(null,Date.now()+ counts.toString()+ ext);
    },
});


const   upload = multer({
    storage:uploadToFolder,

    fileFilter:function (req, file, callback){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"||
            file.mimetype == "image/webp"
        ){
            callback(null,true);
        }
        else{
            callback(null,false);
        }
    },

    limits:{
        fileSize: 5024 * 5024 * 5,
    },
});



module.exports={
    upload
}