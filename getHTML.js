function getHTML (options, callback) {

  var https = require('https');

  https.get(options, function (response) {
    // set encoding
    response.setEncoding('utf8');
    // on receiving data chunk, append to variable
    response.on('data', function(dataChunk) {
      fileData = fileData + dataChunk + "\n";
    });
    // after receiving all chunks, output accum file data
    response.on('end', callback);
  });
}
var requestOptions = {
    host: process.argv[2],
    path: process.argv[3]
};

var fileData = "";

getHTML(requestOptions, function () {
  console.log(fileData);
});

