// Create a Controller
        // In Controller we injected the $scope
        // and $scope is predfine in angularjs
        // also injected the factory
        app.controller("calctrl",function($scope,calfact){
            $scope.add=function(){
                $scope.result =calfact.addd($scope.firstnumber,$scope.secondnumber) ;
            }
                $scope.sub=function(){
                $scope.result =calfact.subb($scope.firstnumber,$scope.secondnumber) ;
            }
                $scope.mul=function(){
                $scope.result =calfact.mull($scope.firstnumber,$scope.secondnumber) ;
            }
                $scope.div=function(){
                $scope.result =calfact.divv($scope.firstnumber,$scope.secondnumber) ;
            }
        });