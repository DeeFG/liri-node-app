
console.log('this is loaded');

exports.spotify = {
  id: process.env.476ec4513b934cf4b593fcac79981767,
  secret: process.env.c4adb3e56883466f8526073f678ddd7e 
};

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 476ec4513b934cf4b593fcac79981767 , 
  secret: c4adb3e56883466f8526073f678ddd7e
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


