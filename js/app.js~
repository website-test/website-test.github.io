// app.js

var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/aboutme.html'
	}).when('/about', {
		redirectTo: '/'
	}).when('/education', {
		templateUrl: 'views/education.html'
	}).when('/skills', {
		templateUrl: 'views/skills.html',
		controller: 'viewController'
	}).when('/experience', {
		templateUrl: 'views/experience.html'
	}).when('/resume', {
		templateUrl: 'views/cv.html'
	}).when('/extra-curricular', {
		templateUrl: 'views/extra-curricular.html'
	}).when('/projects/games', {
		templateUrl: 'views/projects/games.html'
	}).when('/projects', {
		redirectTo: '/projects/games'
	}).when('/projects/flash-as3', {
		templateUrl: 'views/projects/flash-as3.html'
	}).when('/projects/bisag', {
		templateUrl: 'views/projects/bisag.html'
	}).when('/projects/personal', {
		templateUrl: 'views/projects/personal.html'
	}).when('/projects/mobile', {
		templateUrl: 'views/projects/mobile.html'
	}).when('/projects/under-graduate/eattend', {
		templateUrl: 'views/projects/under-graduate/eattend.html'
	}).when('/projects/under-graduate', {
		redirectTo: '/projects/under-graduate/eattend'
	}).when('/projects/under-graduate/compiler-design', {
		templateUrl: 'views/projects/under-graduate/compiler-design.html'
	}).when('/projects/under-graduate/multimedia-computing', {
		templateUrl: 'views/projects/under-graduate/multimedia-computing.html'
	}).when('/projects/under-graduate/parallel-computing', {
		templateUrl: 'views/projects/under-graduate/parallel-computing.html'
	}).when('/projects/under-graduate/bits-online-notice-board', {
		templateUrl: 'views/projects/under-graduate/bits-online-notice-board.html'
	}).when('/projects/under-graduate/software-testing', {
		templateUrl: 'views/projects/under-graduate/software-testing.html'
	}).when('/projects/personal/screen-recorder', {
		templateUrl: 'views/projects/personal/screen-recorder.html'
	}).when('/projects/personal/portfolio', {
		templateUrl: 'views/projects/personal/portfolio.html'
	}).when('/projects/personal/preference-filler', {
		templateUrl: 'views/projects/personal/preference-filler.html'
	}).when('/404', {
		templateUrl: 'views/404.html'
	}).otherwise({
		redirectTo: '/404'
	});
});

portfolioApp.run(function(){
	// console.log("run");
});
