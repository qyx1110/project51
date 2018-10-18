const m_topic = require('../models/m_topic');

module.exports.showTopic = (req,res)=>{
    
    //要数据 让模型给我数据
    m_topic.findAllTopic((err,data)=>{
        if(err){
            return res.send({
                code: 500,
                message: '服务器错了'
            });

        }
        res.render('index.html',{
            topics: data
        });
    });
    
}