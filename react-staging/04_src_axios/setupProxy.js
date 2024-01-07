const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1',{ //以/api1为前缀
            target:'http://localhost:8070',//请求转发给谁
            changeOrigin: true,  //控制服务器收到的响应头中的host值
            pathRewrite: {'^/api1':''}//重写请求路径
        })
    )

}