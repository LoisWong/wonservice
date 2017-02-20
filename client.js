var http = require('http');

// 用于处理的文件
var sample = '';

var sampleString = JSON.stringify(sample);

// 用于请求的选项
var headers = {  
    'Content-Type': 'application/json',  
    //如果使用的是varuserString='data='+userjson格式应将'Content-Type':设为'application/x-www-form-urlencoded'//form表单格式  
    'Content-Length': sampleString.length
};  

var options = {
   host: 'localhost',
   port: 3000,
   path: '/',
   method: 'POST',
   headers: headers
};

var req=http.request(options,function(res){
    res.on('data', function(message){
        var ret  = eval('(' + message + ')');
        console.log(ret);
    })
});

req.on('error', function(e){
    console.log('problem with request:' + e.message);
})

req.write(sampleString);
req.end();


