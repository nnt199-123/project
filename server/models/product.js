const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true //khi lưu vào database tự bỏ dấu cách ở 2 đầu
    },
    slug:{ // đường dẫn cho sản phẩm 
        type:String,
        required:true,
        unique:true,
        lowercase:true // tự động viết thường lại cho mình 
    },
    description :{ // mô tả
        type:String,
        required:true,
       
    },
    brand:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{// hạng mục 
        type:mongoose.Types.ObjectId,
        ref:'Category',
    },
    quantity:{ // số lượng sản phẩm 
        type:Number,
        default:0
    },
    sold:{ // số lượng mặt hàng đã bán
        type:Number,
       default:0
    },
    images:{
        type:Array,
        
    },
    color:{
        type:String,
        enum:['black','white','red']
        
    },
    ratings:[
        {
            start:{type:Number},
            postedBy:{type:mongoose.Types.ObjectId,
                ref:'User'
                
            },
            comment:{type:String}
        },
     
    ],
       totalRating : {
            type:Number,
            default:0
        }

},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('Product', productSchema);