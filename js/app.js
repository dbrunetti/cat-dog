var app = angular.module('catDog', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		controller: 'animalController',
		templateUrl: 'views/home.html'
	})
	.when('/cat',
	{
		controller: 'animalController',
		templateUrl: 'views/cat.html'
	})
	.when('/dog',
	{
		controller: 'animalController',
		templateUrl: 'views/dog.html'
	})
	.when('/otter',
	{
		controller:'animalController',
		templateUrl: 'views/otter.html'
	})
	.when('/squirrel',
	{
		controller: 'animalController',
		templateUrl: 'views/squirrel.html'
	})
	.otherwise({ 
		redirectTo: '/error404.html',
		templateUrl: 'views/error404.html'
	});
});