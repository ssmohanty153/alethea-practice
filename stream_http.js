const http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    const fileStraam = fs.createReadStream('./filePath/first.txt');
    fileStraam.on('open', () => {
        fileStraam.pipe(res);
    })
    fileStraam.on('error', (err) => {
        res.end(err);
    })

}).listen(3000);