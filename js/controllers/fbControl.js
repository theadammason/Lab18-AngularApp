var app = angular.module('myMod');

app.controller('fbControl', function($scope, fbFactory){

$scope.runFizzBuzz = function(input){
  $scope.result = fbFactory.fizzbuzz(input);
  if (!$scope.display){
    $scope.display = !$scope.display;
  }else{

  };
}
});
