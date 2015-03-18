'use strict';

var linkAggregatorControllers = angular.module('linkAggregatorControllers', []);

linkAggregatorControllers.controller('LinkAggregatorController', [
        '$scope',
        function($scope) {
            var initData = {
                    data : [
                            new Item('https://www.google.com/', 'Google',
                            'img/temp/google.jpg'),
                            new Item('http://www.uefa.com/', 'UEFA',
                            'img/temp/uefa.jpg'),
                            new Item('http://www.3dnews.ru/', '3DNews',
                            'img/temp/3dnews.jpg') ]
            };
//            if (sessionStorage.getItem('actual') == null) {
                sessionStorage.setItem('actual', JSON.stringify(initData));
//            }

            $scope.items = JSON.parse(sessionStorage.getItem('actual')).data;
        } ]);