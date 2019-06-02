console.log('Keys are loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsintown = {
  bandInTownAPI_KEY: process.env.BIT_KEY,
};


exports.omdbapi={
  omdbAPI_KEY:process.env.OMB_KEY 
}
