var app = angular.module('myMod');

app.controller('fbControl', function($scope, fbFactory){

$scope.results = [];

$scope.runFizzBuzz = function(input){
  $scope.results.push(fbFactory.fizzbuzz(input));
  console.log($scope.results);
  if (!$scope.display){
    $scope.display = !$scope.display;
  }else{
  };

}
});
