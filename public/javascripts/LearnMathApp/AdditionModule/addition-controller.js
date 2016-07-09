/**
 * Created by emmanuel on 5/21/16.
 */

app.controller('AdditionController', function ($scope, $localStorage, AdditionService) {
    AdditionService.setup();
    $scope.correct = $localStorage.user.addition.correct;
    $scope.wrong = $localStorage.user.addition.wrong;
    $scope.starCount = $localStorage.user.addition.star;
    $scope.total = $localStorage.user.addition.total;

    $scope.currentQuestion = AdditionService.currentQuestion;

    $scope.mark = function () {
        AdditionService.mark();
    };

    $scope.$watch(function () {
        return angular.toJson($localStorage);
    }, function () {
        $scope.correct = $localStorage.user.addition.correct;
        $scope.wrong = $localStorage.user.addition.wrong;
        $scope.starCount = $localStorage.user.addition.star;
        $scope.total = $localStorage.user.addition.total;
    });

});