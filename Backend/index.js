const express=require('express');
const app = express();
const mongose=require('mongoose')
const bodyParser=require('body-parser');
const {router}=require('./src/Routes/route')
app.use(express.static("upload/images"));
const {User} = require("./src/Model/User.Model");
// Env
require('dotenv').config();

// Port Config in env
let configPort=process.env.PORT; 
// URL config in env
let url=process.env.ATLAS_URL;
const cors=require('cors');

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

app.post('/user/:userId/cart/add', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { productId, quantity } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Add or update item in the cart
        if (user.cart[productId]) {
            user.cart[productId] += quantity;
        } else {
            user.cart[productId] = quantity;
        }

        await user.save();

        res.json(user.cart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

//port configure
app.listen(configPort,(error)=>{
    if(!error){
    console.log(`Server run on ${configPort}`)
    }
    else{
        console.log("Error:" +error)
    }
})





