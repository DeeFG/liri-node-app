

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsintown = {
  bandInTownAPI_KEY: process.env.API_KEY,
};

//var SpotifyWebApi = require('spotify-web-api-node');

// // credentials are optional
// var spotifyApi = new SpotifyWebApi({
//   clientId: '',
//   clientSecret: '',
//   redirectUri: 'http://www.example.com/callback'
// });

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//   function(data) {
//     console.log('Artist albums', data.body);
//   },
//   function(err) {
//     console.error(err);
//   }
// );




 
// spotify.search(
//   { type: 'track', 
//   query: 'All the Small Things' 
// }, 
  
//   function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 


// });


// var TV = function () {};


//   TV.prototype.findShow = function (show) {
//     // The following URL can be used to search the TV Maze API for a given show
//     var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

//     axios.get(URL).then(function (response) {

//       console.log(response.data.name);

//       const data = `${response.data.name}` ;

     
//     }); 
//   }

//   var TV = function () {};


//   TV.prototype.findShow = function (show) {
//     // The following URL can be used to search the TV Maze API for a given show
//     var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

//     axios.get(URL).then(function (response) {

//       console.log(response.data.name);

//       const data = `${response.data.name}` ;

     
//     }); 
//   }


//   var TV = function () {};


//   TV.prototype.findShow = function (show) {
//     // The following URL can be used to search the TV Maze API for a given show
//     var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

//     axios.get(URL).then(function (response) {

//       console.log(response.data.name);

//       const data = `${response.data.name}` ;

     
//     }); 
//   }
// //    module.exports = keys;