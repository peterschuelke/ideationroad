angular.module('idroad.system').controller('MainController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    console.log('main');
}]);