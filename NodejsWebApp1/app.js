'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var log = require('./Log.js');
log.info('Node.js started');

var msg = require('./message.js');
console.log(msg);

var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);

var person = require('./utilities');
var person1 = new person('James', 'Bond');
console.log(person1.fullName());


http.createServer(function (req, res) {
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }

    else if (req.url == '/data') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World" }));
        res.end();
    }
    else
        res.end('Invalid Request!');
}).listen(port);
