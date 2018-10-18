//模型文件  操作话题数据库表并且返回操作数据库的结果

const db = require('../tools/db_config');
exports.findAllTopic = (callback)=>{
    const sqlstr = 'SELECT * FROM `topics`';
    db.query(sqlstr,(err,data)=>{
        if(err){
           return callback(err);
        }
        callback(null,data);
    });
}