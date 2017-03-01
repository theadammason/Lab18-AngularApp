var app = angular.module('myMod');

app.controller('weatherControl', function($scope, weatherFactory){
  $scope.findWeather = function(inputCity, inputState){
    var userInputs = {
      city: inputCity,
      state: inputState
    };
    weatherFactory.getWeather(userInputs);
  }

  $scope.results = weatherFactory.pulledResults();
});
