const dotenv = require("dotenv").config();
const axios = require('axios');
const keys = require("./keys.js");
const inquirer = require('inquirer');
var fs = require("fs");
var moment = require('moment');

// let searched = "CHer";


// inquirer.prompt([
//   {
//     name: "category",
//     message: "Entertainment type?",
//     choices: ["Concert", "Song", "Movie"],
//     type: "list",
//   },
//   {
//     name: "usertext",
//     message: "What do you search?",
//     type: "input",
//   }


// ]).then(function (choice) {

//   // if (choice.usertext === "Concert") {
//   //   console.log(response.data[0].venue.name);
//   // } else {
//   //   console.log("ELSE")
//   //   // which search goes here?
//   // }



const choice = process.argv[2];



switch (choice) {
  case "concert":
    getConcert();
    break;
  case "movie":
    getMovie();
    console.log("get movie");
    break;
  case "music":
    getMusic();
    console.log("get music")
    break;
  case "song":
    getSong();
    console.log("get song")
    break;
  default:
    console.log("INVALID INPUT")
    break;
}

let URL = "https://rest.bandsintown.com/artists/" + choice.usertext + "/events?app_id=ea62aafa-9c71-4187-9044-fe3057cbd186";


function getConcert() {
  const usertext = process.argv[3];
  let URL = "https://rest.bandsintown.com/artists/" + usertext + "/events?app_id=ea62aafa-9c71-4187-9044-fe3057cbd186";

  axios.get(URL).then(function (response) {

    let dataFromResponse = response.data;
    const resultData = process.argv[3];

    fs.appendFile("random.txt", `,${resultData}`, function (err) {

      if (process.argv.length < 4) {

        return;
        console.log(err);
      }
      console.log(`deposite successful ${resultData}`);
      console.log("*******************************************************************************************************");
      console.log("Artist/Band: " + resultData);
      console.log("The Venue: " + dataFromResponse[0].venue.name);
      console.log("The Location: " + dataFromResponse[0].venue.city + "," + dataFromResponse[0].venue.region + "," + dataFromResponse[0].venue.country);
      console.log("The Date: " + moment().format("MM/DD/YYYY", dataFromResponse[0].venue.datetime));
      console.log("*******************************************************************************************************");

    });
  });

}

