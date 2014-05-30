'use strict';
angular.module('copterApp', [])
  .controller('JoystickCtrl', function($http, $scope) {

    var velocities = {
      z: 0,
      y: 0,
      x: 0
    };

    function fly(dir) {
         $http.get('/flyer/' + dir)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data, status) {
         console.log(data, status);
        });
    }

    $scope.up = function() {
      fly('up');
    };

    $scope.down = function() {
      fly('down');
    };

    $scope.left = function() {
      fly('left');
    };

    $scope.right = function() {
      fly('right');
    };

    $scope.center = function() {
      fly('center');
    };

    $scope.front = function() {
      fly('front');
    };

    $scope.back = function() {
      fly('back');
    };

    $scope.reset = function() {
      $http.get('/flyer/disableEmergency');
    };
  });
