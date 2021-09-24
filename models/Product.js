const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ // Schema 생성
    name : {
        type : String,
        require : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number
    }
});

const Product = mongoose.model("Product",productSchema) // 모델 생성 - 모델 명, 스키마
module.exports = Product;