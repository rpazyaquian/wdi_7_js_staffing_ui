angular.module('StaffingUI')
.controller('HomeCtrl', function($scope, $http, $q, ServerUrl, UserFactory) {
    'use strict';

    $scope.users = UserFactory.users;
})
.directive('gaUserModal', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/usermodal.html',

        scope: {
            userId: '@'
        }
    };
});