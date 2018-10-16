
//路由模块

//目的:监听请求并且找到每个请求的方法名
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

const router = express.Router();


//渲染登录页的请求

router.get('/signin',c_user.showSignin);
router.post('/signin',c_user.handleSignin);
router.get('/',c_topic.showTopic);

module.exports = router;
// console.log(router);