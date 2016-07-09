/**
 * Created by emmanuel on 5/21/16.
 */

app.controller('DivisionController', function ($scope, $localStorage, DivisionService) {
    DivisionService.setup();
    $scope.correct = $localStorage.user.division.correct;
    $scope.wrong = $localStorage.user.division.wrong;
    $scope.starCount = $localStorage.user.division.star;
    $scope.total = $localStorage.user.division.total;

    $scope.currentQuestion = DivisionService.currentQuestion;

     $scope.mark = function () {
        DivisionService.mark();
    };

    $scope.$watch(function () {
        return angular.toJson($localStorage);
    }, function () {
        $scope.correct = $localStorage.user.division.correct;
        $scope.wrong = $localStorage.user.division.wrong;
        $scope.starCount = $localStorage.user.division.star;
        $scope.total = $localStorage.user.division.total;
    });

});