'use strict';

/* App Module */
var module = angular.module('main', ['exampleApp', 'exampleApp.services']);

module.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
            templateUrl  : '/partials/home.html',
            controller   : 'HomeCtrl',
            controllerAs : 'home'
    });

    $locationProvider.html5Mode(true);
}]);