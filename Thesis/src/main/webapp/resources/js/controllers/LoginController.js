(function() {


  var app = angular.module("App");

  var LoginController = function($scope, $http, $location, $window) {
	 var loginUrl = "http://localhost:8060/EventTracker/api/login";
	
	  
	  $scope.credentials = {};
	  
	  var onLoginSucces = function(response){
		  $( "#loginBody" ).animate({
			    opacity: 0.05
			  }, 500, function() {
				  $window.location.href = "/EventTracker";
			  });
		 // 
	  }
	  
	  var onLoginError = function(response){
		  $scope.loginError = "Nieprawidłowy użytkownik lub hasło";
	  }
	  
	  $scope.preparePostData = function () {
      

          return 'username=' + $scope.credentials.username + '&password=' + $scope.credentials.password;
      };

      $scope.login = function (username, password) {
          var postData = $scope.preparePostData();
          
          $http.post(loginUrl, postData, {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(onLoginSucces, onLoginError);
        	
      };
  };

  app.controller("LoginController",  LoginController);

}());