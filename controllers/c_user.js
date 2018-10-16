
const m_user = require('../models/m_user');
//渲染登录页面
const showSignin = (req,res)=>{
    res.render('signin.html');
};

//处理登录的请求
const handleSignin = (req,res)=>{
    const body = req.body;
    console.log(body);
    
    m_user.checkEmail(body.email,(err,data)=>{
        if(err){
            return res.send({
                code: 500,
                msg: '服务器错误'
            })
           
        }
        // console.log(data);
        if(!data[0]){
            console.log('邮箱不存在');
            return res.send({
                code: 1,
                msg: '邮箱不存在'
            })
        }

        if(body.password != data[0].password){
            return res.send({
                code: 2,
                msg: '密码错误,再想想'
            })
        }

        res.send({
            code: 200,
            msg: '可以跳转了'
        })
    });
}

exports.showSignin = showSignin;
exports.handleSignin = handleSignin;