angular.module('starter').controller('mainCtrl', function ($scope,$firebaseAuth,$ionicLoading ) {

    $scope.data={};
    $scope.data.text = 'Click Authenticate';
    var authObj = $firebaseAuth(new Firebase('https://ajayparsana.firebaseio.com'));
    $scope.authenticateUser = function () {
       $scope.data.text = 'Validating..';
        authObj.$authWithPassword({
            email: 'test@test.com',
            password: 'Test@123'
        }).then(function (authData) {
            $scope.data.text = 'Success ' + authData.uid;
            
        }).catch(function (error) {
            $scope.data.text = "Authentication failed: " + error
            });

    }

});