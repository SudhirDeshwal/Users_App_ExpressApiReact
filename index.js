const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url ==='/') {
    res.write('<h1>Hi sudhir</h1>');
    res.end();
    }
    // if (req.url === '/about') {

    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'),
    //         (err, content) => {

    //             if (err) throw err;
    //             res.writeHead(200, {'Content-Type' : 'text/html'});
    //             res.end(content);
    //         }


    //     );
    // }

    if (req.url === '/api/users') {
        const users = [
          { name: 'bob', age: 23 },
          { name: 'bob3', age: 33 },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
      }

});

server.listen(5000, () => {

    console.log("server running")
});