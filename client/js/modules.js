var app = angular.module('app', ['ngRoute', 'angularMoment']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/dashboard.partial.html'
	})
	.when('/customers', {
		controller: 'CustomersController',
		controllerAs: 'customersCtrl',
		templateUrl: '/partials/customers.partial.html'
	})
	.when('/orders', {
		controller: 'OrdersController',
		controllerAs: 'ordersCtrl',
		templateUrl: '/partials/orders.partial.html'
	})
	.when('/products',{
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/products.partial.html'
	})
	.otherwise('/');
})