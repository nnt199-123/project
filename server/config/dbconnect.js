const {default:mongoose}=require('mongoose')
const dbConnect=async()=>{
try {
    const conn= await mongoose.connect(process.env.MONGODB_URI)
    if(conn.connection.readyState ===1)console.log('DB connect is successfully')
    else console.log('DB connecting failed')
} catch (error) {
    console.log('DB connection is failed')
    throw new Error('error')
}
}
module.exports=dbConnect