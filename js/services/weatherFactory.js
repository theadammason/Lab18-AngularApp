var app = angular.module('myMod');
app.factory('weatherFactory', function($http){
var  weatherData = {};

return {
  getWeather: function(userInputs) {
    $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/1edf21c58b490e4c/conditions/q/'+userInputs.state+'/'+userInputs.city+'.json'
    }).then(function success(response) {
      var pulledData = response;
      weatherData.temp = pulledData.data.current_observation.temp_f;
      weatherData.weather = pulledData.data.current_observation.weather;
      console.log(weatherData.temp);
      console.log(weatherData.weather);
    }, function(error) {
      console.log(error);
    });
  },
  pulledResults: function() {
    return weatherData;
  }
}

});
