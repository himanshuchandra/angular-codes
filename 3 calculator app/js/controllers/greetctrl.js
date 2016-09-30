// Create a Controller
        // In Controller we injected the $scope
        // and $scope is predfine in angularjs
        // also injected the factory
        app.controller("greetctrl",function($scope,initcap){
            $scope.sayWelcome=function(){
                $scope.fullname = "Welcome "+ initcap.initcapital($scope.firstname) +" "+ initcap.initcapital($scope.lastname);
            }
        });