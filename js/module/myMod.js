var app = angular.module('myMod', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider){

    $routeProvider
      .when('/fizzbuzz', {
        controller: 'fbControl',
        templateUrl: 'views/fizzbuzz.html'
      })
      .when('/weather', {
        controller: 'weatherControl',
        templateUrl: 'views/weather.html'
      })
      .otherwise({redirectTo: '/fizzbuzz'});
    $locationProvider.hashPrefix('');
  });
