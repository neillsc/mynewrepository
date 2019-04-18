var hhtp = require("http");

hhtp.createServer(function (request, response) { 

// Send the HTTP header 
// HTTP Status: 200 : OK 
// Content Typ: text/plain
response.writeHead(200, {'Content-Type': 'text/plain'});


//Send the response body as "Hello World"
response.end("Animals are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 millionths of a metre to 33.6 metres/n")
}).listen(8081)

// Console will print the message 
console.log('Server running at http://127.0.0.1:8081/') 