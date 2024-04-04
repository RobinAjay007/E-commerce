const express=require('express');
const app = express();
const mongose=require('mongoose')
const bodyParser=require('body-parser');
const {router}=require('./src/Routes/route')
app.use(express.static("public"));

// Env
require('dotenv').config();

// Port Config in env
let configPort=process.env.PORT; 
// URL config in env
let url=process.env.ATLAS_URL;
const cors=require('cors');
const { verifyAuthToken } = require('./src/Middleware/Auth');

app.options('*',cors());
app.use(cors());

// body-parse

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//MongoDB connection
mongose.connect(url)
.then(()=>{
    return console.log("Server PlugIN Successfully")
})
.catch((error)=>{
    return console.log(error)
})


//Image upload
app.use(router)



//port configure
app.listen(configPort,(error)=>{
    if(!error){
    console.log(`Server run on ${configPort}`)
    }
    else{
        console.log("Error:" +error)
    }
})





