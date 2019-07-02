const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<body> <form><input type="text"  </body>');
        res.write('</html>');
        res.end();
    }
    res.setHeader('Content-Type', 'text/html');
});

server.listen(3000); 