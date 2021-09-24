//> node fetcher.js http://www.example.edu/./index.html
// Downloaded and saved 3261 bytes to ./index.html

const url = process.argv[2];
const file = process.argv[3];
const request = require("request");

const fs = require("fs");

request(url, (error, response, body) => {
  //console.log("body:", body);

  fs.writeFile(file, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ./${file}`);
  });
});
