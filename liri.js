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
    concertThis();
    break;
  case "spotify-this-song":
    spotifyThis();
    break;
  case "movie-this":
    movieThis();
    break;
  case "I-want":
    text();
    break;
}

function concertThis() {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        b +
        "/events?app_id=codingbootcamp"
    )
    .then(function (response) {
      console.log(response);
      // console.log(response.data[0].venue.name);
      //   console.log(
      //     response.data[0].venue.city + ", " + response.data[0].venue.country
      //   );
      //   console.log(moment(response.data[0].datetime).format("MM/D/YYYY"));
      // }
    });
}
function spotifyThis() {
  var spotify = new Spotify(keys.spotify);
  var play = false;
  if (b === undefined) {
    b = "the sign";
    play = true;
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

function movieThis() {
  var play = false;
  if (b === undefined) {
    b = "Mr. Nobody";
    play = true;
  }
  axios
    .get("http://www.omdbapi.com/?t=" + b + "&apikey=trilogy")
    .then(function (response) {
      // console.log(response.data)
      console.log(response.data.Title);
      console.log(response.data.Year);
      // console.log(response.data.Raitings.Source[0].Imdb);
      // console.log(response.data.Raitings.Source[0].Rotten Tomatoes);
      console.log(response.data.Country);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);
    });
}

function text() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
  });
}
