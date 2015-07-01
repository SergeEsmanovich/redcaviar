'use strict';

/* Services */

var crossServices = angular.module('crossServices', ['ngResource']);

//crossServices.factory('Users', ['$rootScope', '$http',
//    function ($rootScope, $http) {
//
//        var users = [];
//
//        function getUsers() {
//            $http({method: 'GET', url: 'resource/'})
//                    .success(function (data, status, headers, config) {
//                        users = data;
//                        $rootScope.$broadcast('users:updated');
//                    })
//                    .error(function (data, status, headers, config) {
//                        console.log(data);
//                    });
//        }
//        getUsers();
//
//        var service = {};
//
//        service.getAll = function () {
//            // getUsers();
//            return users;
//        }
//
//        service.get = function (id) {
//            var place = null;
//            angular.forEach(users, function (value) {
//                if (parseInt(value.id) === parseInt(id)) {
//                    place = value;
//                    return false;
//                }
//            });
//            return place;
//        }
//
//        service.myupdate = function (user) {
//            $http({method: 'GET', url: 'resource/'})
//                    .success(function (data, status, headers, config) {
//                        users = data;
//                        $rootScope.$broadcast('user:updated', data);
//                    })
//                    .error(function (data, status, headers, config) {
//                        $rootScope.$broadcast('user:error', data);
//                    });
//        }
//
//        service.add = function (place) {
//            $http({method: 'POST', url: 'resource/add', data: place})
//                    .success(function (data, status, headers, config) {
//                        users.push(data);
//                        $rootScope.$broadcast('user:added', data);
//                    })
//                    .error(function (data, status, headers, config) {
//                        $rootScope.$broadcast('user:error', data);
//                    });
//        }
//
//        service.update = function (user) {
//            $http({method: 'PUT', url: 'resource/update/' + user.id, data: user})
//                    .success(function (data, status, headers, config) {
//                        $rootScope.$broadcast('user:updated', data);
//                    })
//                    .error(function (data, status, headers, config) {
//                        $rootScope.$broadcast('user:error', data);
//                    });
//        }
//
//        service.delete = function (id) {
//            $http({method: 'DELETE', url: 'resource/delete/' + id})
//                    .success(function (data, status, headers, config) {
//                        console.log(data);
////                        angular.forEach(users, function (value, i) {
////                            if (parseInt(value.id) === parseInt(id)) {
////                                users.splice(i, 1);
////                                return false;
////                            }
////                        });
//                        $rootScope.$broadcast('user:deleted', data);
//                    })
//                    .error(function (data, status, headers, config) {
//                        $rootScope.$broadcast('user:error', data);
//                    });
//        }
//
//        service.save = function (place) {
//            if (undefined !== place.id && parseInt(place.id) > 0) {
//                service.update(place);
//            }
//            else {
//                service.add(place);
//            }
//        }
//
//        return service;
//    }]);


crossServices.factory('Users', ['$resource',
    function ($resource) {
        var service = $resource('resource/:cmd:id',
                {cmd: "@cmd", id: "@id"}, //parameters default
        {
            GetList: {method: "GET", params: {}},
            GetTodo: {method: "GET", params: {id: 0}},
            AddUser: {method: "POST", params: {pid: ""}},
            UpdateTodo: {method: "PATCH", params: { /*...*/}},
            DeleteTodo: {method: "DELETE", params: {id: 0}},
            ResetTodos: {method: "GET", params: {cmd: "reset"}}
        });
        var users = [];
        users.load = function (callback) {
            var UsersList = service.query(function () {
            });
            return UsersList;
        };
        users.add = function (item, token) {
            // service.AddUser({cmd: 'add', pid: item, token: token});
            service.AddUser({cmd: 'add', pid: item, token: token}, function (data) {
                console.log(data);
            });
        };


        return users;
    }]);