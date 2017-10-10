
const readLogHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }
readLogHTML.getHTML(requestOptions, function (data) {
  console.log("Hello");
  console.log(data);
});
