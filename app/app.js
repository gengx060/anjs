var sampleApp = angular.module('sampleApp', ['ngRoute', 'menu', 'comment']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/AddNewOrder', {
      templateUrl: 'add_order.html',
      controller: 'AddOrderController'
    });
    $routeProvider.when('/ShowOrders', {
      templateUrl: 'show_orders.html',
      controller: 'ShowOrdersController'
    });
    $routeProvider.when('/comment', {
          template: '<comment></comment>'
        })
    $routeProvider.when('/welcome', {
      templateUrl: 'app/welcome/welcome.template.html'
    });
    $routeProvider. otherwise({
      redirectTo: '/welcome'
    });
}]);


sampleApp.controller('AddOrderController', function($scope) {
  
  $scope.message = 'This is Add new order screen1';
  
});


sampleApp.controller('ShowOrdersController', function($scope) {

  $scope.message = 'This is Show orders screen2';

});
