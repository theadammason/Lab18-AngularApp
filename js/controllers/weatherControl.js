var app = angular.module('myMod');

app.controller('weatherControl', function($scope, $animate, weatherFactory){
  $scope.findWeather = function(inputCity, inputState){
    var userInputs = {
      city: inputCity,
      state: inputState
    };
    if (!$scope.display){
      $scope.display = !$scope.display;
    }else{

    };

    weatherFactory.getWeather(userInputs);
  }

  $scope.results = weatherFactory.pulledResults();
});
