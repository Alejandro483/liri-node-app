require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var dotenv = require("dotenv");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");

var a = process.argv[2];
var b = process.argv[3];

switch (a) {
  case "concert-this":
    console.log("concert's on");
    concertThis();
    break;
  case "spotify-this-song":
    console.log("Spotify's on'");
    spotifyThis();
    break;
  case "movie-this":
    console.log("movie's on");
    movieThis();
    break;
  case "do-what-it-says":
    console.log("do it now");
    doThis();
    break;
}

function concertThis() {axios.get("https://rest.bandsintown.com/artists/" + b + "/events?app_id=codingbootcamp")
    .then(function (response) {    
      var undefined = undefined
      if (undefined){
        console.log("unable to process")
      } 
      else{
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city + ", " + response.data[0].venue.country);
        console.log(moment(response.data[0].datetime).format("MM/D/YYYY"));
      }
    });
}
function spotifyThis() {
  var spotify = new Spotify(keys.spotify);
  var initial = false;
  if (b === undefined) {
    b = "the sign";
    initial = true;
  }
  spotify.search({ type: "track", query: b }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    for (let index = 0; index < data.tracks.items.length; index++) {
      console.log(data.tracks.items[index].artists[0].name);
      console.log(data.tracks.items[index].name);
      console.log(data.tracks.items[index].preview_url);
      console.log(data.tracks.items[index].album.name);
    }
  });
}