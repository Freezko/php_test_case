/**
 * Created by egor on 10/09/14.
 */
var m;

m = angular.module("test", []);

m.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
            input.push(i);
        return input;
    };
});

m.controller('MainCtr', function ($scope, $http, $timeout) {

    $scope.word = /[^A-Za-zА-Яа-я0-9_]/;
    $scope.tags = /<.*?>/;

    $scope.showModalMessage = false;

    $scope.currentPage = 1;
    $scope.countPages = 1;
    $scope.messages = [];

    $scope.getMessagesByPage = function (page) {
        $http({
            method: 'GET',
            url: "/getModelsByPage/" + page
        }).success(function (data) {
            $scope.messages = data.messages;
            $scope.currentPage = data.pagination.currentPage;
            $scope.countPages = data.pagination.countPages;
        });
    }

    $scope.classPagination = function (page) {
        if ($scope.currentPage == page) {
            return 'active';
        }
    }

    $scope.getMessagesByPage($scope.currentPage);

    $scope.newMessage = function () {
        $scope.showModalMessage = true;
    }

    $scope.closeModalMesage = function () {
        $scope.showModalMessage = false;
    }

    $scope.sendModalMesage = function () {

        if (
            ($scope.form.username.$error.pattern && !$scope.form.username.$error.required) &&
                ($scope.form.text.$error.pattern && !$scope.form.text.$error.required) &&
                (!$scope.form.email.$error.email)
            ) {

            $.ajax({
                url: "/message/create",
                type: "POST",
                data: {
                    username: $scope.form.username.$viewValue,
                    email: $scope.form.email.$viewValue,
                    text: $scope.form.text.$viewValue
                }
            }).success(function (data) {
                var dataObj = jQuery.parseJSON(data);
                if (dataObj.status == 'ok') {
                    $scope.username = '';
                    $scope.email = '';
                    $scope.text = '';

                    $scope.getMessagesByPage(1);
                    $scope.closeModalMesage();
                }
            });
        }
    }

    $scope.classModalMesage = function () {
        if ($scope.showModalMessage) {
            return 'show';
        }

        return 'fade';
    }

});