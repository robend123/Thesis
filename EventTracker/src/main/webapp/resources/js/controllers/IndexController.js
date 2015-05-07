(function() {


  var app = angular.module("App");

  var IndexController = function($scope) {
    
    $scope.message = "Hello";
    console.log("asd");
  };

  app.controller("IndexController",  IndexController);

}());