//Setting up route
window.app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/services', {
      templateUrl: 'views/pages/services.html',
      controller: 'ServicesController'
    }).
    when('/about', {
      templateUrl: 'views/pages/about.html',
      controller: 'AboutController'
    }).
    when('/contact', {
      templateUrl: 'views/pages/contact.html',
      controller: 'ContactController'
    }).
    when('/blog', {
      templateUrl: 'views/blog/list.html'
    }).
    when('/blog/create', {
      templateUrl: 'views/blog/create.html'
    }).
    when('/blog/:articleId/edit', {
      templateUrl: 'views/blog/edit.html'
    }).
    when('/blog/:articleId', {
      templateUrl: 'views/blog/view.html'
    }).
    when('/', {
      templateUrl: 'views/index.html',
      controller: 'IndexController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);