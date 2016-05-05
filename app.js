angular.module('movieSearchApp', ['ngRoute']);

angular.module('movieSearchApp').controller('MovieSearchController', ['$scope', 'movieSearchFactory', '$location', function($scope, movieSearchFactory, $location){
  $scope.view = {};
  $scope.view.movies = movieSearchFactory.movies;
  $scope.view.singleMovie = {};

  $scope.getMovies = function (movieName){
    $location.path('/');
    movieSearchFactory.getMovies(movieName).then(function(res){
      $scope.view.movies = res.data.Search;
      movieSearchFactory.setMovies(res.data.Search);
      console.log(res.data.Search);
    });
  };

  $scope.getMovieById = function(id){
    movieSearchFactory.setId(id);
    movieSearchFactory.getMovieById().then(function(res){
      movieSearchFactory.setSingleMovie = res.data;
      $scope.view.singleMovie = res.data;
      console.log("scope single movie ");
      console.log($scope.view.singleMovie);
      $location.url('/individualMovie');
    });
  }
}]);


angular.module('movieSearchApp').config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/movieSearch.html'
      })
      .when('/individualMovie', {
      	templateUrl: 'partials/individualMovie.html'
      })
    $locationProvider.html5Mode(true);
});
