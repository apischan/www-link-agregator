'use strict';

var linkAggregatorControllers = angular.module('linkAggregatorControllers', []);

linkAggregatorControllers.controller('LinkAggregatorController', [
        '$scope',
        function ($scope) {
            var initData = {
                data : [
                        new Item('https://www.google.com/', 'Google',
                                'img/temp/google.jpg'),
                        new Item('http://www.uefa.com/', 'UEFA',
                                'img/temp/uefa.jpg'),
                        new Item('http://www.3dnews.ru/', '3DNews',
                                'img/temp/3dnews.jpg') ]
            };
            sessionStorage.setItem('actual', JSON.stringify(initData));
            
            $scope.editMode = false;
            $scope.doneItems = [];
            
            $scope.items = JSON.parse(sessionStorage.getItem('actual')).data;
            $scope.categories = [ 'Sport', 'Hi-Tech', 'Movies' ];

            $scope.addItem = function () {
                var items = $scope.items;
                var item = new Item($scope.link, $scope.title, $scope.image);
                items.unshift(item);
                assignEditAction(item);
                assignDoneAction(item);
                if (items.length == 12) {
                    items.pop();
                }
            };
            
            $scope.performEdit = function () {
                var editedItem = $scope.editedItem;
                editedItem.link = $scope.link;
                editedItem.title = $scope.title;
                editedItem.imgUrl = $scope.image;
                
                $scope.editMode = false;
                $scope.editedItem = null;
            };
            
            var assignEditAction = function (item) {
                item.doEdit = function (event) {
                    $scope.editMode = true;
                    
                    $scope.link = item.link;
                    $scope.title = item.title;
                    $scope.image = item.imgUrl;
                    $scope.editedItem = item;
                };
            };

            var assignDoneAction = function (item) {
                item.doDone = function (event) {
                    $scope.doneItems.unshift(item);
                    $scope.items.splice($scope.items.indexOf(item), 1);
                };
            };
            
            $scope.items.forEach(assignEditAction);
            $scope.items.forEach(assignDoneAction);
        }]);
