define(['angular','angular-route', 'app/menu/menu', 'app/comment/comment', 'app/welcome/full-page-loader'], function (angular) {

	var app = angular.module('app', ['ngRoute', 'menu', 'comment', 'fullPageLoader'])
  .factory("srvAuth", ['$rootScope',
    function($rootScope) {
      var srvAuth = {};


      srvAuth.fblogin = function() {
        FB.login(function (response) {
          if (response.status === 'connected') {
            // You can now do what you want with the data fb gave you.
            console.info(response);
          }
        });        
      }

      srvAuth.watchLoginChange = function() {
        var _self = this;
        FB.Event.subscribe('auth.authResponseChange', function(res) {
          if (res.status === 'connected') {
            FB.api('/me', function(res) {
              $rootScope.$apply(function() {
                $rootScope.user = _self.user = res;
                console.info($rootScope.user);
              });
            });
          } else {
            alert('Not Connected');
          }
        });
      }

      srvAuth.logout = function() {
        var _self = this;
        FB.logout(function(response) {
          $rootScope.$apply(function() {
            $rootScope.user = _self.user = {};
          });
        });
      }

      return srvAuth;
    }
  ]).controller('AuthCtrl', ['srvAuth', '$scope',
            function(srvAuth, $scope) {
                  $scope.logout = function() {
                    srvAuth.logout();
                }
                $scope.fblogin = function() {
                    debugger
                    srvAuth.fblogin();
                }
            }

            ]);

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

	// angular.element(function() {
	// 	angular.bootstrap(document.body, ['app']);
	// });
//     app.run(function($rootScope) {
//       $rootScope.hello = function() {
//         console.log('hello');
//     }
// });

    app.run(['$rootScope', '$window', 'srvAuth',
            function($rootScope, $window, sAuth) {
              $rootScope.user = {};
              $window.fbAsyncInit = function() {
                debugger
                // Executed when the SDK is loaded
                FB.init({
                    appId      : '123129551645487',
                    cookie     : true,
                    xfbml      : true,
                    version    : 'v2.8'
                });

                FB.AppEvents.logPageView();  
                // sAuth.watchAuthenticationStatusChange();
            }

    }
    ]);
    // app.controller('AuthCtrl', ['srvAuth', '$scope',
    //         function(srvAuth, $scope) {
    //               $scope.logout = function() {
    //                 srvAuth.logout();
    //             }
    //             $scope.fblogin = function() {
    //                 srvAuth.fblogin();
    //             }
    //         }

    //         ]);

    angular.element(function() {
     angular.bootstrap(document.body, ['app']);
 });
(function(d){
        // load the Facebook javascript SDK

        var js, 
        id = 'facebook-jssdk', 
        ref = d.getElementsByTagName('script')[0];

        if (d.getElementById(id)) {
          return;
        }

        js = d.createElement('script'); 
        js.id = id; 
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";

        ref.parentNode.insertBefore(js, ref);

      }(document));

	// return app;
});


// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '123129551645487',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v2.8'
//     });
//     FB.AppEvents.logPageView();   
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>