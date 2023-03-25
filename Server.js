const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200),
    res.write('<h1>Hello Node!!!!</h1>\n' ),
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})


const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});