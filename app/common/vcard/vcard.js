define(['angular', 'ui-bootstrap'], function (angular) {
	angular.module('vcard', ['ui.bootstrap'])
	.directive('vcard', function () {
		return {
			require   : '^tabs',
			restrict  : 'E',
			transclude: true,
			scope     : {
				type: '@',
				src : '='
			},
			controller: function ($scope) {
				// $scope.src = JSON.parse($scope.src);
				// debugger
				$scope.conf = {
					templateUrl: $scope.type == 'profile' ? 'app/common/vcard/vcard.template.html' : '',
					title      : 'Title'
				};
				
			},
			templateUrl  : 'app/common/vcard/vcard-trigger.template.html',
			replace   : true
		};
	});
});
