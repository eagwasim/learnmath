/**
 * Created by emmanuel on 5/21/16.
 */

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
});

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('', {
        redirectTo: '/home'
    }).when('/home', {
        templateUrl: '/javascripts/LearnMathApp/HomeModule/_home_module.html',
    }).when('/auth', {
        templateUrl: '/javascripts/LearnMathApp/AdditionModule/_auth_module.html',
        controller: 'AuthController'
    }).when('/addition', {
        templateUrl: '/javascripts/LearnMathApp/AdditionModule/_addition_module.html',
        controller: 'AdditionController'
    }).when('/multiplication', {
        templateUrl: '/javascripts/LearnMathApp/MultiplicationModule/_multiplication_module.html',
        controller: 'MultiplicationController'
    }).when('/division', {
        templateUrl: '/javascripts/LearnMathApp/DivisionModule/_division_module.html',
        controller: 'DivisionController'
    }).when('/subtraction', {
        templateUrl: '/javascripts/LearnMathApp/SubtractionModule/_subtraction_module.html',
        controller: 'SubtractionController'
    }).otherwise({
        redirectTo: '/home'
    });
}]);