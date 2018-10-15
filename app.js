//程序入口文件

//1.导包
const express = require('express');

//2.app对象
const app = express();

//3.监听请求
app.get('/signin',(req,res)=>{
    res.send('app.js监听请求并且实现处理函数');
})

//绑定端口
app.listen(12345,()=>{
    console.log('success---');
})