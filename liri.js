const dotenv = require("dotenv").config();
const axios = require('axios');
const keys = require("./keys.js");
const inquirer = require('inquirer');
var fs = require("fs");

let searched = "zed";

let URL = "https://rest.bandsintown.com/artists/" + searched + "/events?app_id=ea62aafa-9c71-4187-9044-fe3057cbd186";


axios.get(URL).then(function (response) {
  console.log("*******************************************************************************************************");
  console.log("The Venue " + response.data[0].venue.name);
  console.log("The Location " + response.data[0].venue.city + "," + response.data[0].venue.region + "," + response.data[0].venue.country);
  console.log("The Date " + response.data[0].venue.datetime);
  // (use moment to format this as "MM/DD/YYYY")

});



inquirer.prompt([
  {
    name: "category",
    message: "Entertainment type?",
    choices: ["Concert", "Song", "Movie"],
    type: "list",
  },
  {
    name: "usertext",
    message: "What do you search?",
    type: "input",
  }


]).then(function (choice) {

  if (choice.catergory === "Concert") {
    console.log(response.show);
  } else {
    console.log("ELSE")
    // which search goes here?
  }
});



  // function findConcert() {
  //   inquirer.prompt([
  //     {
  //       name: "category",
  //       message: "Entertainment type?",
  //       choices: ["Concert", "Song", "Movie"],
  //       type: "list",
  //     },
  //     {
  //       name: "usertext",
  //       message: "What do you search?",
  //       choices: ["Concert", "Song", "Movie"],
  //       type: "input",
  //     }

  //   ]);

