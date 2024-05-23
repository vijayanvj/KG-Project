const mongoose=require('mongoose')
 const productSchema = new mongoose.Schema({
    name:String,
    product:String,
    description:String,
    ratings:String,
    images:[
        {
            images:String
        }
    ],
    catagory:String,
    seller:String,
    stock:String,
    numofReviews:String,
    createdAt:Date

})
 const productmodel=mongoose.model('Product',productSchema);
 module.exports=productmodel;