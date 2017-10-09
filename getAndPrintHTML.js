function getAndPrintHTML () {

  var https = require('https');
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  // receive data in chunks and buffer to variable before outputting all at once
  var fileData = "";

  https.get(requestOptions, function (response) {
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
getAndPrintHTML();
