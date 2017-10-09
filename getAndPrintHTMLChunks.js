function getAndPrintHTMLChunks() {

  var https =require("https");
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // Retrieve the data (in chunks)

  https.get(requestOptions, function(response) {
    // set received data encoding
    response.setEncoding('utf8');
    // invoke callback when chunk received
    response.on('data', function(data) {
      console.log(data + "\n");
    });
    response.on('end', function() {
      console.log("Response stream complete.");
    });
  });
}
getAndPrintHTMLChunks();
