define(['angular'], function (angular) {
	angular.module('fullPageLoader', [])
	.directive('fullPageLoader', function() {
		return {
			require: '^tabs',
			restrict: 'E',
			transclude: true,
			scope: {

			},
			controller: function($scope, $element) {
				$scope.show = false;
				$scope.$root['ajax_loader'] = $scope;
			},
			templateUrl:'app/welcome/full-page-loader.template.html',
			replace: true
		};
	});
});