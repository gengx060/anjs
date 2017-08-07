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
			template  : '<a href=\'javascript: void(0);\' uib-popover-template="conf.templateUrl" popover-placement="right", popover-trigger="\'outsideClick\'">' +
			'<img ng-style="{\'width\':\'36px\', \'height\':\'36px\'}" class="img-circle" ng-src=\'{{src.img ? src.img : $root.profile_placeholder}}\'>' +
			'</a>',
			replace   : true
		};
	});
});
