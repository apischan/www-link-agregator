var wwwLinkAggregator = angular.module('wwwLinkAggregator', [
    'ngRoute',
    'linkAggregatorControllers',
    'components'
]);

wwwLinkAggregator.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/actual', {
        templateUrl: 'templates/actual-item.html',
        controller: 'LinkAggregatorController'
      }).
      when('/completed', {
        templateUrl: 'templates/completed-item.html',
        controller: 'LinkAggregatorController'
      }).
      otherwise({
        redirectTo: '/actual'
      });
  }]);
