'use strict';

/* App Module */

var RedcaviarApp = angular.module('RedcaviarApp', [
    'ngRoute',
//    'phonecatAnimations',
    'RedcaviarControllers',
//    'phonecatFilters',
//    'crossServices',
    'ngSanitize',
    //   'ui.select',
    //  'duScroll',
    'angular-inview',
    'ui.bootstrap',
    'ngAnimate'
//    'textAngular'
]);

RedcaviarApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/home', {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeCtrl'
                }).
                when('/basket', {
                    templateUrl: 'partials/basket.html',
                    controller: 'BasketCtrl'
                }).
                when('/order', {
                    templateUrl: 'partials/orderform.html',
                    controller: 'OrderCtrl'
                }).
                when('/catalog', {
                    templateUrl: 'partials/catalog.html',
                    controller: 'CatalogCtrl'
                }).
                when('/item', {
                    templateUrl: 'partials/card_product.html',
                    controller: 'CardProductCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
    }]);
