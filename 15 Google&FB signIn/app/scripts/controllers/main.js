'use strict';

/**
 * @ngdoc function
 * @name angularoauthexampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularoauthexampleApp
 */
angular.module('angularoauthexampleApp')
  .controller('MainCtrl', function ($scope,$window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.login=function() {
    	var client_id="CLIENT ID";
    	var scope="email";
    	var redirect_uri="http://localhost:9000";
    	var response_type="token";
    	var Url="https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+
    	"&response_type="+response_type;
        //var left = screen.width / 2 - 200, top = screen.height / 2 - 250
        //$window.open(Url, '', "top=" + top + ",left=" + left + ",width=400,height=500");
        
    
 
    	window.location.replace(url);
    };
    
});

//End URLS
//https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="Enter token recieved"

//For facebook
//https://www.facebook.com/v2.8/dialog/oauth?response_type=token&display=popup&client_id="Enter clientID"&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer%2Fcallback&scope=email

//https://graph.facebook.com/me?access_token="Enter access token recieved"&fields=email,name




       
       