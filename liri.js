const dotenv = require("dotenv").config();
const axios = require('axios');
const keys = require("./keys.js");

// const bandsAPI = "ea62aafa-9c71-4187-9044-fe3057cbd186"

let searched ="zed";
//const bandsURL = ("https://rest.bandsintown.com/" + searched + "ea62aafa-9c71-4187-9044-fe3057cbd186");

let URL = "https://rest.bandsintown.com/artists/"+ searched +"/events?app_id=ea62aafa-9c71-4187-9044-fe3057cbd186"



// Bands in town
axios.get(URL).then(

  function (response) {
console.log( "*******************************************************************************************************");
console.log(response.data.id);
console.log( response);
    // console.log("The Venue" + response.VenueData.name);
    // console.log("The Location" + response.VenueData.city + "," + response.VenueData.region + "," + response.VenueData.country);
  // console.log("The Date " + window.JSON.EventData.datetime);
    // (use moment to format this as "MM/DD/YYYY")

  }
);

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



