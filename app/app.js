define(['angular','angular-route', 'app/menu/menu', 'app/comment/comment', 'app/welcome/full-page-loader'], function (angular) {

    var app = angular.module('app', ['ngRoute', 'menu', 'comment', 'fullPageLoader']);

    app.config(['$routeProvider',
        function($routeProvider) {
            // $routeProvider.when('/ShowOrders', {
            //   templateUrl: 'show_orders.html',
            //   controller: 'ShowOrdersController'
            // });
            // $routeProvider.when('/contact', {
            //   templateUrl: 'app/contact/contact.template.html',
            // });
            $routeProvider.when('/comment', {
                template: '<comment></comment>'
            });
            $routeProvider.when('/welcome', {
                templateUrl: 'app/welcome/welcome.template.html'
            });
            $routeProvider. otherwise({
                redirectTo: '/welcome'
            });
        }]);

    angular.element(function() {
        angular.bootstrap(document.body, ['app']);
    });
    
    // return app;
});