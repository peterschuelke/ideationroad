angular.module('idroad.system').controller('IndexController', ['$scope', 'Global','Articles', function ($scope, Global, Articles) {
    $scope.global = Global;
    $scope.articles = Articles;

    $scope.find = function(query) {
      Articles.query(query, function(articles) {
        $scope.articles = articles;
      });
    };

    $scope.incentives = [
      {
        title:'More Satisfaction',
        image:'images/icons/satisfaction.png',
        imageStyle:{'background-color': '#77b4d6', 'border-radius': '62px'},
        content:'They asked. You Delivered. Now they know you can and will meet their needs.'
      },{
        title:'More Business',
        image:'images/icons/business.png',
        imageStyle:{'background-color': '#75c4b0', 'border-radius': '62px'},
        content:'Case studies, testimonials, and references abound. Satisfied customers spread the word.'
      },{
        title:'More Revenue',
        image:'images/icons/revenue.png',
        imageStyle:{'background-color': '#505d73', 'border-radius': '62px'},
        content:'New and existing customers keep comming back for more. They trust you.'
      }
    ];

}]);