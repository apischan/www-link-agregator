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
        controller: 'PhoneListCtrl'
      }).
      when('/completed', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/actual'
      });
  }]);
