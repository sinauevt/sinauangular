var helloApp = angular.module('helloWorldApp', []);

var helloController = function($scope) {
    $scope.firstName = 'Test';
    $scope.lastName = 'Name';
};

helloApp.controller('helloController', helloController);
