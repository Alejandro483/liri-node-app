# liri-node-app

This app is a _Language_ Interpretation and Recognition Interface

## Overview

Liry will be able to take in specific music requests via line command, and this app will search for data such as: name of the band, songs, concerts in town and other information.

## Tools used

- [Node-Spotify-API]()

- [Axios]()

- [OMDB API]()
- [Bands In Town API]()

## Instructions:

_There are four main fucntions for this app._

1.  `node liri.js concert-this <type an artist/band>`
    This command will print calendar of the band/artist, as well as the venues where concerts will be held.

2.  `node liri.js spotify-this-song '<type a song name>'`This command will print the artist name, song, album and preview of the link song.

3.  `node liri.js movie-this '<type movie name>'`
    This command will print title of the movie, release year, raiting, languages, country, plot and actors.

4.  `node liri.js do-what-it-says`
    This command is your personalized feature to run other functions.
