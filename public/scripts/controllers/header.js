angular.module('idroad.system').controller('HeaderController', ['$scope', 'Global', '$location', '$sce', function ($scope, Global, $location, $sce) {
  $scope.global = Global;


  $scope.menu = [{
    "title": "About",
    "link": "about"
  },{
    "title": "Services",
    "link": "services"
  },{
    "title": "Contact",
    "link": "contact"
  },{
    "title": "Blog",
    "link": "blog"
  }];

  $scope.location=$location;
  $scope.$watch('location.path()', function(path) {
    console.log('location',$location);
    if($location.path() == '/'){
      $scope.headerLink = true;
      $scope.headerContent = {
        'h2' : 'Turning Great Ideas',
        'span' : 'Into Delighted Customers',
        'p' : 'Creating order out of chaos with clear customers delivery processes',
        'a' :{
          'href':"/contact",
          'text':'Get in Touch'
        }
      };
    }else if($location.path() == '/services'){
      $scope.headerLink = false;
      $scope.headerContent = {
        'h2' : 'Solutions to',
        'span' : 'Delivering on Your Customer Promises',
        'p' : 'Step by step to an exceptional customer experience'
        };
    }
  });

}]);



