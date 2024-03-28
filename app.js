// const fs = require('fs').promises;

// const text = "this is a test, and it should be stored in a file!";

// fs.writeFile('node-message.txt', text).then(() => {
//     console.log("Wrote to file!");
// });

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World (From Node!)');
})

server.listen(8000);