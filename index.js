const http = require('http');

const server = http.createServer((req, res) => {

    res.write('<h1>Hi sudhir1</h1>');
    res.end();

});

server.listen(5000, () => {

    console.log("server running")
});