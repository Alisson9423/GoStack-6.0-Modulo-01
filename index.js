const http = require('http')

http.createServer((req, res) => {
    console.log(req);
    return res.end('Olá HTTP')
}).listen(3000)