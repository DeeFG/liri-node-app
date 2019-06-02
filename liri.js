const dotenv = require("dotenv").config();
const axios = require('axios');
const keys = require("./keys.js");
var fs = require("fs");
var moment = require('moment');
var Spotify = require('node-spotify-api');
 
const choice = process.argv[2];

switch (choice) {
  case "concert-this":
    getConcert();
    break;
  case "movie-this":
    getMovie();
    console.log("get movie");
    break;
  case "do-what-it-says":
    getMusic();
    console.log("get music")
    break;
  case "spotify-this-song":
    getSong();
    console.log("get song")
    break;
  default:
    console.log("INVALID INPUT")
    break;
}





function getConcert() {
  const usertext = process.argv[3];
  let URL = "https://rest.bandsintown.com/artists/" + usertext + "/events?app_id=bandInTownAPI_KEY";

  axios.get(URL).then(function (response) {

    let dataFromResponse = response.data;
    const resultData = process.argv[3];

    fs.appendFile("random.txt", resultData, function (err) {
      if (process.argv.length < 4) {
        return;
        console.log(err);
      }
      console.log("*******************************************************************************************************");
      console.log("Artist/Band: " + resultData);
      console.log("The Venue: " + dataFromResponse[0].venue.name);
      console.log("The Location: " + dataFromResponse[0].venue.city + "," + dataFromResponse[0].venue.region + "," + dataFromResponse[0].venue.country);
      console.log("The Date: " + moment( dataFromResponse[0].datetime).format("MM/DD/YYYY"));
      console.log("*******************************************************************************************************");

    });
  });
}


function getMovie() {}

function getMusic() {}

function getSong() {
  const usertext = process.argv[3];
  let URL = "https://api.spotify.com" + usertext + "/events?app_id=ea62aafa-9c71-4187-9044-fe3057cbd186";


   

spotify.request("https://api.spotify.com/v1/" + usertext + "/7yCPwWs66K8Ba5lFuU2bcx").then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
   
  console.log(data); 

      // console.log("*******************************************************************************************************");
      // console.log("Artist/Band: " + resultData);The song's name
      // console.log("The Venue: " + dataFromResponse[0].venue.name);A preview link of the song from Spotify
      // The album that the song is from
      // console.log("The Location: " + dataFromResponse[0].venue.city + "," + dataFromResponse[0].venue.region + "," + dataFromResponse[0].venue.country);
      // console.log("*******************************************************************************************************");

  // });

}


Artist(s)





