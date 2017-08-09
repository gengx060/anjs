define(['angular', 'bootstrap', 'app/common/vcard/vcard', 'app/common/modal/modal', 'app/common/modal/modal-trigger'], function (angular) {
	angular.module('contacts', ['vcard', 'modal', 'modaltrigger'])
	.directive('contacts', function () {
		
		return {
			require    : '^tabs',
			restrict   : 'E',
			transclude : true,
			scope      : {},
			controller : function ($scope, $element) {
				$scope.margin = {'1': '40px', '2': '100px', '3': '145px'};
				$scope.profile_placeholder = "asset/img/blank-profile.png";
				$scope.contacts = [
					{
						id        : 1,
						name      : 'Stefanih',
						img       : "asset/img/g1.jpg",
						time_stamp: '12/12/2016, 11:06:47 AM'
					},
					{
						id        : 2,
						name      : 'Exactor',
						img       : null,
						time_stamp: '12/15/2016, 10:06:47 AM'
					},
					{
						id        : 3,
						name      : 'Belle Chang-Li',
						parent_id : null,
						img       : "asset/img/b1.jpg",
						time_stamp: '12/18/2016, 11:06:47 AM'
					}
				];
				
			},
			templateUrl: 'app/contact/contacts.template.html',
			replace    : true
		};
	});
});
