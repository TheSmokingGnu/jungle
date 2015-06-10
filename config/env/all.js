'use strict';

module.exports = {
	app: {
		title: 'KongUI',
		description: 'GUI of Kong API Gateway',
		keywords: 'GUI, Kong, API',
		kongUrl: 'http://localhost:8001'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'lib/bootstrap/dist/css/bootstrap.css',
				'lib/bootstrap/dist/css/bootstrap-theme.css',
				'lib/font-awesome/css/font-awesome.css'
			],
			js: [
				'lib/angular/angular.js',
				'lib/angular-resource/angular-resource.js', 
				'lib/angular-cookies/angular-cookies.js', 
				'lib/angular-animate/angular-animate.js', 
				'lib/angular-touch/angular-touch.js', 
				'lib/angular-sanitize/angular-sanitize.js', 
				'lib/angular-ui-router/release/angular-ui-router.js',
				'lib/angular-ui-utils/ui-utils.js',
				'lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'lib/angular-breadcrumb/release/angular-breadcrumb.js'
			]
		},
		css: [
			'modules/**/css/*.css',
			'dashboard.css'
		],
		js: [
			'config.js',
			'application.js',
			'modules/*/*.js',
			'modules/*/*[!tests]*/*.js'
		],
		tests: [
			'lib/angular-mocks/angular-mocks.js',
			'modules/*/tests/*.js'
		]
	}
};