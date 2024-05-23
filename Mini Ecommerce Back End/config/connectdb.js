const mongoose = require('mongoose')
const connectdb=()=>{
mongoose.connect('mongodb://localhost:27017/mini-ecommerce').then((con)=>{
    console.log('Mongodb connected:'+con.connection.host)
})
}
module.exports=connectdb;