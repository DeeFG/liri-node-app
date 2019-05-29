require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

keys.prompt([
    {
      type: "input",
      message: " What band do you like?",
      name: ""
    }
  ])
  .then(function(Response) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (Response) {
      console.log(Response);
   
    }
    else {
      console.log(Response);
    }
  });



