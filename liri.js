const dotenv = require("dotenv").config();
const axios = require('axios');
const keys = require("./keys.js");
let fs = require("fs");
let moment = require('moment');
// let Spotify = require('node-spotify-api');
let omdb = require('omdb');

// make  switch to  go through different APIS
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
      console.log()
      console.log("Artist/Band: " + resultData);
      console.log("The Venue: " + dataFromResponse[0].venue.name);
      console.log("The Location: " + dataFromResponse[0].venue.city + "," + dataFromResponse[0].venue.region + "," + dataFromResponse[0].venue.country);
      console.log("The Date: " + moment(dataFromResponse[0].datetime).format("MM/DD/YYYY"));
      console.log("*******************************************************************************************************");

    });
  });
}


function getMovie() {
  const usertext = process.argv[3];
  // let URL = "https://www.omdbapi.com/" + usertext + "&apikey=";
  let URL = "https://www.omdbapi.com/?t=" + usertext + "&apikey=trilogy";
  axios.get(URL).then(function (response) {

    let dataFromResponse = response.data;
    const resultData = process.argv[3];

    fs.appendFile("random.txt", resultData, function (err) {
      if (process.argv.length < 4) {
        return;
        console.log(err);
      }
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log("Title " + dataFromResponse.Title);
      console.log("Year: " + dataFromResponse.Year);
      console.log("IMDB Rating: " + dataFromResponse.imdbRating);
      console.log("Rotten Tomatoes Rating: " + dataFromResponse.Ratings);
      console.log("Country: " + dataFromResponse.Country);
      console.log("Language: " + dataFromResponse.Language);
      console.log("Plot: " + dataFromResponse.Plot);
      console.log("Actors: " + dataFromResponse.Actors);
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    });
  });
}







      // else {
      //   console.log("*******************************************************************************************************");
      //   console.log("MOVIE: " + resultData.Title);
      //   console.log("*******************************************************************************************************");

      // // * Title of the movie.
      // // * Year the movie came out.
      // // * IMDB Rating of the movie.
      // // * Rotten Tomatoes Rating of the movie.
      // // * Country where the movie was produced.
      // // * Language of the movie.
      // // * Plot of the movie.
      // // * Actors in the movie.


      // // function getMusic(){};

      // // function getSong() {};
      //   // const usertext = process.argv[3];

      //   // spotify.request("https://api.spotify.com/v1/" + usertext + "/7yCPwWs66K8Ba5lFuU2bcx").then(function (data) {
      //   //   console.log(data);
      //   // })
      //   //   .catch(function (err) {
      //   //     console.error('Error occurred: ' + err);
      //   //   });
      // }
