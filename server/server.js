const express=require('express')
require('dotenv').config()
const dbConnect=require('./config/dbconnect')

const app= express()
const port =process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dbConnect()
app.use('/',(re,res)=>{res.send('SERVER ONNNN')})

app.listen(port,()=>{
    console.log('Server running on the port :'+port);
})