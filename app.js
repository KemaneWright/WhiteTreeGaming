angular.module('WhiteTreeGaming', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
    })
    .state('games', {
      url: '/games',
      templateUrl: './views/games.html',
      controller: 'gamesCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './views/contact.html',
    })

  $urlRouterProvider
    .otherwise('/');


})
