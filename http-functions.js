// Globals
var data = "";

function getHTML(options, callback) {

  var https = require('https');

  https.get(options, function (response) {
    // set encoding
    response.setEncoding('utf8');
    // on receiving data chunk, append to variable
    response.on('data', function(dataChunk) {
      data = data + dataChunk;
    });
    // after receiving all chunks, output accum file data
    response.on('end', function() {
      callback(data)
    });
  });

}
module.exports = { getHTML: getHTML, fileData: data }
