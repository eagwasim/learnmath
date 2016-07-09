/**
 * Created by emmanuel on 5/21/16.
 */

app.controller('MultiplicationController', function ($scope, $localStorage, MultiplicationService) {
    MultiplicationService.setup();
    $scope.correct = $localStorage.user.multiplication.correct;
    $scope.wrong = $localStorage.user.multiplication.wrong;
    $scope.starCount = $localStorage.user.multiplication.star;
    $scope.total = $localStorage.user.multiplication.total;

    $scope.currentQuestion = MultiplicationService.currentQuestion;

    $scope.mark = function () {
        MultiplicationService.mark();
    };

    $scope.$watch(function () {
        return angular.toJson($localStorage);
    }, function () {
        $scope.correct = $localStorage.user.multiplication.correct;
        $scope.wrong = $localStorage.user.multiplication.wrong;
        $scope.starCount = $localStorage.user.multiplication.star;
        $scope.total = $localStorage.user.multiplication.total;
    });

});