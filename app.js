// 导入http模块:
var http = require('http');
// 返回一个文件
var fs = require('fs');
// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    var url = request.url;
    if (url === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (!err) {
                response.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
                response.end(data)
            } else {
                throw err;
            }
        });
    } 
    if (url === '/searchHotWords') {
        fs.readFile('./searchHotWords.json', function (err, data) {
            if (!err) {
                response.writeHead(200, { "Content-Type": "application/json" });
                response.end(data);
                console.log(data)
            } else {
                throw err;
            }
        })
    }
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    // console.log(request.method + ': ' + request.url);
    // // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // // 将HTTP响应的HTML内容写入response:
    // response.end('Hello world!');
});

// 让服务器监听8080端口:
server.listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');