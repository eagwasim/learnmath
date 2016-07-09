/**
 * Created by emmanuel on 5/21/16.
 */

app.controller('LearnMathController', function ($scope, $localStorage, $log, $location, $window, LearnMathService, SubtractionService, AdditionService, MultiplicationService, DivisionService) {

    $scope.isAuthenticated = function () {
        return $localStorage.user != undefined;
    };

    if ($localStorage.user) {
        $scope.user = $localStorage.user;
    } else {
        $scope.user = {};
    }

    $scope.stars = LearnMathService.stars();

    $scope.getStar = function (score) {
        return LearnMathService.getStar(score);
    };

    $scope.setUserName = function () {

        SubtractionService.setup();
        AdditionService.setup();
        MultiplicationService.setup();
        DivisionService.setup();

        var users = $localStorage.users;

        if ($scope.user == null || $scope.user == undefined) {
            $scope.user = {};
        }

        if (users != undefined) {
            var user = users[$scope.user.userName];

            if (user != undefined) {
                $scope.user = user;
            }
        }
        $localStorage.user = $scope.user;
    };

    $scope.logout = function () {
        var users = $localStorage.users;

        if (users == undefined) {
            users = {};
        }

        users[$localStorage.user.userName] = $localStorage.user;

        $localStorage.users = users;

        $localStorage.user = null;

        $window.location.href = '/'; 
    };
});
