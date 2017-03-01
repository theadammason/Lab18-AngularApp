var app = angular.module('myMod');

app.controller('fbControl', function($scope, fbFactory){

$scope.runFizzBuzz = function(input){
  $scope.result = fbFactory.fizzbuzz(input);
}
});
