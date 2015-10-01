angular.module('starter').controller('mainCtrl', function ($scope,$firebaseAuth,$ionicLoading ) {

    
    var authObj = $firebaseAuth(new Firebase('https://ajayparsana.firebaseio.com'));
    $scope.authenticateUser = function () {
        $ionicLoading.show({
        template: 'Validating...'
    });
        authObj.$authWithPassword({
            email: 'test@test.com',
            password: 'Test@123'
        }).then(function (authData) {
            $ionicLoading.hide();
            alert('Login Successful');
        }).catch(function (error) {
            $ionicLoading.hide();
            alert( "Authentication failed: " + error);
        });

    }

});