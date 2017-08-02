require.config({

	baseUrl: "./",
	
	// alias libraries paths
	paths: {
		'angular': 'asset/angularjs/1.6.1/angular',
		'angular-route': 'asset/angularjs/1.6.1/angular-route',
		'bootstrap': 'asset/bootstrap/3.3.7/bootstrap.min',
		'jquery': 'asset/jquery/3.2.1/jquery.min',
		'Enumerable': 'asset/linq/linq',
		'toastr': 'asset/toastr/toastr',
		'bootstrap-dialog': 'asset/bootstrap-dialog/bootstrap-dialog',
		'async': '../lib/requirejs/async',
		'ngload': '../lib/requirejs/ngload',
		'ui-bootstrap': '../lib/angular-ui-bootstrap/ui-bootstrap-tpls',
		'prettify': '../lib/google-code-prettify/prettify',

		// 'HomeController': 'controller/home_ctrl',
	},

	// Add angular modules that does not support AMD out of the box, put it in a shim
	shim: {
		'angular': {
			exports : 'angular'
		},
		'angular-route': {
			deps: ['angular']
		}, 
		'bootstrap': {
			deps: ['jquery']
		},
		'toastr': {
			deps: ['jquery']
		},
        'bootstrap-dialog': {
            deps: ['jquery']
        } 
	},

	// kick start application
	deps: ['app/app']
});