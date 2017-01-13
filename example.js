const fs = require('fs');

const output = "Some Important Message. \n"

fs.appendFile('./logs/error.log', output, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
