angular.module('movieSearchApp').factory('movieSearchFactory', function($http){
  var movies = [
    {
      "id": 1,
      "favorite": false,
      "date": moment( new Date().getTime() - 285678 ).fromNow(),
      "votes": 5,
      "comments": [],
      "Title": "The Matrix",
      "Year": "1999",
      "Rated": "R",
      "Released": "31 Mar 1999",
      "Runtime": "136 min",
      "Genre": "Action, Sci-Fi",
      "Director": "Lana Wachowski, Lilly Wachowski",
      "Writer": "Lilly Wachowski, Lana Wachowski",
      "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
      "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "Language": "English",
      "Country": "USA, Australia",
      "Awards": "Won 4 Oscars. Another 33 wins & 44 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg",
      "Metascore": "73",
      "imdbRating": "8.7",
      "imdbVotes": "1,185,648",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Response": "True"
    }
  ];

  var singleMovieId = 'tt0133093';
  var singleMovie = {};

  var factory = {
    movies: movies,
    getMovies: function(movieName){
      var searchTitle = movieName.split(" ").join("+");
      console.log("ran get movie with " + movieName + " and " + searchTitle);
      // return $http.get('https://g-omdbapi.herokuapp.com/?t='+ searchTitle +'&y=&plot=short&r=json');
      return $http.get('http://www.omdbapi.com/?s=' + searchTitle);
    },
    setMovies: function(newMovies){
      movies = [];
      for(var i = 0; i < newMovies.length; i++){
        movies.push(newMovies[i]);
      }
      console.log("updated movies in movie search service to");
      console.log(movies);
    },
    getMovieById: function(){
      console.log("got a movie?");
      return $http.get('http://www.omdbapi.com?i=' + singleMovieId);
    },
    setId: function(id) {
      singleMovieId = id;
      console.log("in set id" + id);
    },
    getId: function(){
      return singleMovieId;
    },
    setSingleMovie: function(newMovie){
      singleMovie = newMovie;
      console.log(singleMovie);
    }

  };

  return factory;
});
