(function() {


  var app = angular.module("App");

  var LoginController = function($scope, $http) {
    
	  $scope.credentials = {};
	  
	  $scope.preparePostData = function () {
          

          return 'username=' + $scope.credentials.username + '&password=' + $scope.credentials.password;
      }

      $scope.login = function (username, password) {
          var postData = $scope.preparePostData();

          $http({
              method: 'POST',
              url: '/EventTracker/login',
              data: postData,
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-Login-Ajax-call": 'true'
              }
          })
          .then(function(response) {
              if (response.data) {
                  window.location.replace('/EventTracker/resources/home.html');
              }
              else {
                  console.log('chuja');
              }
          });
      }
  };

  app.controller("LoginController",  LoginController);

}());