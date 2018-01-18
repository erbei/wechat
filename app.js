const   express = require('express'),
        crypto  = require('crypto'),//加密算法
        config  = require('./config');// 微信配置

var app = new express();
app.get('/',function(req,res){
    //对请求连接返回内容
    res.send("Hello Node.js");
});
app.listen(3000);




// sha1算法：
function sha1(str) {
    console.log(str);
    var md5sum = crypto.createHash('sha1');
    md5sum.update(str);
    str = md5sum.digest('hex');
    console.log(str);
    return str;
}

