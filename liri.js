const dotenv = require("dotenv").config();
const axios = require('axios');
const keys = require("./keys.js");

let searched = "zed";

let URL = "https://rest.bandsintown.com/artists/" + searched + "/events?app_id=ea62aafa-9c71-4187-9044-fe3057cbd186"

axios.get(URL).then(function (response) {
  console.log("*******************************************************************************************************");

  console.log(response.data[0].venue.name)

  console.log("The Venue" + response.data[0].venue.name);
  console.log("The Location " + response.data[0].venue.city + "," + response.data[0].venue.region + "," + response.data[0].venue.country);
  console.log("The Date " + response.data[0].venue.datetime);
  // (use moment to format this as "MM/DD/YYYY")

});


//







// let URL = + api
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });



