angular.module('WhiteTreeGaming').service('gamesService', function($http) {

    this.getCharInfo = function(name, realm) {
      return $http({
        method: "GET",
        url: "https://us.api.battle.net/wow/character/"+ realm +"/"+ name +"?locale=en_US&apikey=ktyuyzjtbwk9wd6bm6vvumc2yqypj7f3"
      })
    }


    // this.getBoss = function() {
    //   return $http({
    //     method: "GET",
    //     url: "https://us.api.battle.net/wow/boss/?locale=en_US&apikey=ktyuyzjtbwk9wd6bm6vvumc2yqypj7f3"
    //   })
    // }


})
