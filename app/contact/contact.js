angular.module('contact', [])
.directive('contact', function () {
	return {
		require   : '^tabs',
		restrict  : 'E',
		transclude: true,
		scope     : {},
		controller: function ($scope, $element) {
			$scope.margin = {'1': '40px', '2': '100px', '3': '145px'};
			$scope.contacts = [
				{
					id        : 1,
					topic_id  : 1,
					user      : 'Stefanih',
					msg       : 'We have clients all over the US. We do everything from my home office. Do we charge tax to everyone or only to those who live in Texas? Or? \n\nTHANK YOU!!!',
					parent_id : null,
					img       : null,
					lvl       : 1,
					time_stamp: '12/12/2016, 11:06:47 AM'
				},
				{
					id        : 2,
					topic_id  : 1,
					user      : 'Exactor',
					msg       : 'I recommend double checking to make sure your services are taxable first. Here\'s a list of services Texas considers taxable',
					parent_id : 1,
					img       : null,
					lvl       : 2,
					time_stamp: '12/15/2016, 10:06:47 AM'
				},
				{
					id        : 3,
					topic_id  : 1,
					user      : 'Stefanih',
					msg       : 'Thank you! I\'ve looked at many sources, and it appears that both web design and graphic design are taxable in Texas. Thank you for the info about only collecting from clients in Texas. That\'s what we\'ve been doing! YAY! :)',
					parent_id : 2,
					img       : null,
					lvl       : 3,
					time_stamp: '12/17/2016, 10:16:47 AM'
				},
				{
					id        : 4,
					topic_id  : 1,
					user      : 'Belle Chang-Li',
					msg       : 'I would ONLY have to charge them the cost of my product + shipping? Thanks guys!!',
					parent_id : null,
					img       : null,
					lvl       : 1,
					time_stamp: '12/18/2016, 11:06:47 AM'
				}
			];
			
		},
		// templateUrl:'app/comment/comment.template.html',
		replace   : true
	};
})
