'use strict';
/* Controllers */
var RedcaviarControllers = angular.module('RedcaviarControllers', [], function ($httpProvider) {
    // Используем x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // Переопределяем дефолтный transformRequest в $http-сервисе
    $httpProvider.defaults.transformRequest = [function (data) {
            /**
             * рабочая лошадка; преобразует объект в x-www-form-urlencoded строку.
             * @param {Object} obj
             * @return {String}
             */
            var param = function (obj) {
                var query = '';
                var name, value, fullSubName, subValue, innerObj, i;
                for (name in obj) {
                    value = obj[name];
                    if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value !== undefined && value !== null) {
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                    }
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
});
RedcaviarControllers.controller('HomeCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {

        $rootScope.carusel_futer = 1;

    }]);
RedcaviarControllers.controller('BasketCtrl', ['$scope', '$http', '$rootScope', '$animate',
    function ($scope, $http, $rootScope, $animate) {
        $rootScope.carusel_futer = 0;

        $scope.orders = [
            {id: 1, name: 'Икра по Скандинавски донных пород 30гр.', image: '/img/goods/caviar1_123x87.jpg', count: 2, cost: 160},
            {id: 1, name: 'Икра по Скандинавски донных пород 20гр.', image: '/img/goods/caviar1_123x87.jpg', count: 1, cost: 150},
            {id: 1, name: 'Икра по Скандинавски донных пород 30гр.', image: '/img/goods/caviar1_123x87.jpg', count: 1, cost: 160}
        ];
        var discount = 0.3;

        $scope.del_goods = function (index) {
//            delete $scope.orders[index]; так не пашет
            $scope.orders.splice(index, 1);
        }
        //  for (var j = 0; j < $scope.orders.length; j++) {
        $scope.$watch('orders', function (newValue, oldValue) {
            $scope.totalcost = 0;
            for (var i = 0; i < $scope.orders.length; i++) {
                $scope.totalcost = $scope.orders[i].cost * $scope.orders[i].count + $scope.totalcost;
                $scope.result = $scope.totalcost - discount * $scope.totalcost;
            }
        }, true);
        //  }

    }]);
RedcaviarControllers.controller('CatalogCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {
        $rootScope.carusel_futer = 0;
        $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        $scope.items2 = [1, 2, 3, 4, 5, 6, 7, 8];
    }]);

RedcaviarControllers.controller('OrderCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {
        $rootScope.carusel_futer = 0;

    }]);
RedcaviarControllers.controller('CardProductCtrl', ['$scope', '$http', '$rootScope',
    function ($scope, $http, $rootScope) {
        $rootScope.carusel_futer = 0;

        $scope.full_image = '/img/good-big.jpg';
        $scope.slides = [
            {images: ['img/good-sm.jpg', 'img/good-sm.jpg', 'images/video.jpg']},
            {images: ['img/good-sm.jpg', 'img/good-sm.jpg', 'images/video.jpg']},
            {images: ['img/good-sm.jpg', 'img/good-sm.jpg', 'images/video.jpg']}

        ];
        $scope.set_image = function (index) {
            $scope.full_image = '/img/good-big.jpg';
        }


    }]);