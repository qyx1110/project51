//程序入口文件

//1.导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.engine('html',require('express-art-template'));
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

app.listen(12345,()=>{
    console.log('success----');
})