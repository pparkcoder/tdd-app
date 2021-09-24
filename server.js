const express = require('express'); // express 모듈 불러오기

const PORT = 5000; // 포트지정

const app = express(); // 새로운 express 어플 생성
const productRoutes = require('./routes');
const mongoose = require('mongoose') ;

mongoose.connect('mongodb+srv://root:boot@cluster0.80jwc.mongodb.net/database1?retryWrites=true&w=majority',
{
    useNewUrlParser : true
}).then(() => console.log('mongoDB connecting...'))
.catch(err => console.log(err));

app.use("/api/products", productRoutes); // 요청이 오면 productRoutes로 보내줌

app.get('/',(req,res) => { // '/' 경로(ROOT) 로 요청이 오면 Hello Wolrd 전달
    res.send('Hello World');
});

app.listen(PORT); // HTTP 서버를 시작
console.log(`Running on port ${PORT}`);