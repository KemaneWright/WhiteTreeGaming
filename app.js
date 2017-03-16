angular.module('WhiteTreeGaming', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
      controller: 'aboutCtrl'
    })
    .state('games', {
      url: '/games',
      templateUrl: './views/games.html',
      controller: 'gamesCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './views/contact.html',
      controller: 'contactCtrl'
    })

  $urlRouterProvider
    .otherwise('/');
})
