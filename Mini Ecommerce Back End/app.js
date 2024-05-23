const express = require('express')
const app=express()
const dotenv=require('dotenv')
const path=require('path')
const cors = require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')})
const connectdatabase= require('./config/connectdb')


const products=require('./routes/product')
const orders=require('./routes/order')
connectdatabase();
app.use(express.json())
app.use(cors());
app.use('/api/v1',products)
app.use('/api/v1',orders)


if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '..', 'frontend',  'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'))
    });
}

app.listen(process.env.PORT,()=>{
    console.log(`server running to port ${process.env.PORT} in ${process.env.NODE_ENV} `)
})