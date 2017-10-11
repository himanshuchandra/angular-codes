


app.controller('MainCtrl', function($scope, shareFactory) {

    
    var address = localStorage.getItem("openkey");

    $scope.myxCode = address;

    $scope.log = function(msg) {
        shareFactory.myCode = msg;
    }
});