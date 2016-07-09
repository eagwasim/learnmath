/**
 * Created by emmanuel on 5/21/16.
 */

app.controller('SubtractionController', function ($scope, $localStorage, SubtractionService) {
    SubtractionService.setup();
    $scope.correct = $localStorage.user.subtraction.correct;
    $scope.wrong = $localStorage.user.subtraction.wrong;
    $scope.starCount = $localStorage.user.subtraction.star;
    $scope.total = $localStorage.user.subtraction.total;

    $scope.currentQuestion = SubtractionService.currentQuestion;

    $scope.mark = function () {
        SubtractionService.mark();
    };

    $scope.$watch(function () {
        return angular.toJson($localStorage);
    }, function () {
        $scope.correct = $localStorage.user.subtraction.correct;
        $scope.wrong = $localStorage.user.subtraction.wrong;
        $scope.starCount = $localStorage.user.subtraction.star;
        $scope.total = $localStorage.user.subtraction.total;
    });

});