var app = angular.module('myMod');

app.factory('fbFactory', function(){
  return {
    fizzbuzz: function(input){
      if ((input%3===0)&&(input%5===0)){
        return "fizzy and buzzy.";
      }else if (input%3===0){
        return "fizzy.";
      }else if (input%5===0){
        return "buzzy.";
      }else {
        return "not fizzy or buzzy. #sadface ";
      }
    }
  }
});
