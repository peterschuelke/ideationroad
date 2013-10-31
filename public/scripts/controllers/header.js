angular.module('idroad.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    console.log('global',Global);

    $scope.menu = [{
        "title": "Home",
        "link": ""
    }, {
        "title": "Services",
        "link": "services"
    }, {
        "title": "About",
        "link": "about"
    },{
        "title": "Blog",
        "link": "blog"
    }, {
        "title": "Contact",
        "link": "contact"
    }];
}]);