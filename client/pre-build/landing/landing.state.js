app.config(function($stateProvider) {
    $stateProvider.state('landing', {
        url: '/',
        templateUrl: '/pre-build/landing/landing.html',
        controller: 'LandingController'
    });
});