angular.module('WhiteTreeGaming').controller('gamesCtrl', function($scope, gamesService) {

$scope.getCharInfo = function(name, realm) {
  gamesService.getCharInfo(name, realm).then(function(response) {

    switch(response.data.class) {
      case 1:
      response.data.class = "Warrior"
      break;
      case 2:
      response.data.class = "Paladin"
      break;
      case 3:
      response.data.class = "Hunter"
      break;
      case 4:
      response.data.class = "Rogue"
      break;
      case 5:
      response.data.class = "Priest"
      break;
      case 6:
      response.data.class = "Death Knight"
      break;
      case 7:
      response.data.class = "Shaman"
      break;
      case 8:
      response.data.class = "Mage"
      break;
      case 9:
      response.data.class = "Warlock"
      break;
      case 10:
      response.data.class = "Monk"
      break;
      case 11:
      response.data.class = "Druid"
      break;
      case 12:
      response.data.class = "Demon Hunter"
      break;
    }
    switch(response.data.race) {
      case 1:
      response.data.race = "Human"
      break;
      case 11:
      response.data.race = "Draenai"
      break;
      case 3:
      response.data.race = "Dwarf"
      break;
      case 7:
      response.data.race = "Gnome"
      break;
      case 4:
      response.data.race = "Night Elf"
      break;
      case 24:
      response.data.race = "Pandaren"
      break;
      case 25:
      response.data.race = "Pandaren"
      break;
      case 26:
      response.data.race = "Pandaren"
      break;
      case 22:
      response.data.race = "Worgen"
      break;
      case 10:
      response.data.race = "Blood Elf"
      break;
      case 9:
      response.data.race = "Goblin"
      break;
      case 2:
      response.data.race = "Orc"
      break;
      case 6:
      response.data.race = "Tauren"
      break;
      case 8:
      response.data.race = "Troll"
      break;
      case 5:
      response.data.race = "Undead"
      break;
    }
    switch(response.data.gender) {
      case 0:
      response.data.gender = "Male"
      break;
      case 1:
      response.data.gender = "Female"
      break;
    }

    $scope.charInfo = response.data;
  })
}
$scope.getCharInfo()


// $scope.getBoss = function() {
//   gamesService.getBoss().then(function(response) {
//     $scope.bossInfo = response.data
//     return response.data
//   })
// }
// $scope.getBoss();
})
