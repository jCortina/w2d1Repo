function getAndPrintHTML (options) {

  var https = require('https');
  
  // receive data in chunks and buffer to variable before outputting all at once
  var fileData = "";

  https.get(options, function (response) {
    // set encoding
    response.setEncoding('utf8');
    // on receiving data chunk, append to variable
    response.on('data', function(dataChunk) {
      fileData = fileData + dataChunk + "\n";
    });
    // after receiving all chunks, output accum file data
    response.on('end', function() {
      console.log(fileData);
    });
  });
}
var requestOptions = {
    host: process.argv[2],
    path: process.argv[3]
 };

getAndPrintHTML(requestOptions);

