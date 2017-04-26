// angular.module('app').controller("MainController", function(){
//   var vm = this;
//   vm.title = 'AngularJS Tutorial Example';
//   vm.searchInput = '';
//   vm.artists = [
//     {
//       name: 'Miles Davis',
//       genre: 'Jazz',
//       favourite: true
//     },
//     {
//       name: 'Tom Misch',
//       genre: 'New jazz',
//       favourite: true
//     },
//     {
//       name: 'J Dilla',
//       genre: 'Hip Hop',
//       favourite: false
//     },
//     {
//       name: 'Chet Faker',
//       genre: 'Hip Hop',
//       favourite: true
//     },
//     {
//       title: 'Snarky Puppy',
//       genre: 'Jazz/Neo Soul',
//       favourite:
//     }
//   ];
//
//   vm.orders = [
//     {
//       id: 1,
//       artist: 'Name Ascending',
//       key: 'name',
//       reverse: false
//     },
//     {
//       id: 2,
//       artist: 'Name Descending',
//       key: 'name',
//       reverse: true
//     }
//   ];
//   vm.order = vm.orders[0];
//   vm.new = {};
//   vm.addArtist = function() {
//     vm.artists.push(vm.new);
//     vm.new = {};
//   };
// });


angular.module('app').controller('MainController', function(){
  var vm = this;
  vm.title = 'Ping Pong Leaderboard';
  vm.searchInput = '';
  vm.contestents = [
    {
      name: 'George',
      wins: 25,
      favorite: true
    },
    {
      name: 'Mike',
      wins: 23,
      favorite: false
    },
    {
      name: 'Anna',
      wins: 18,
      favorite: true
    },
    {
      name: 'Ismael',
      wins: 6,
      favorite: true
    },
    {
      name: 'Lucy',
      wins: 2,
      favorite: false
    }
  ];
  vm.orders = [
    {
      id: 1,
      name: 'Wins Descending',
      key: 'wins',
      reverse: true
    },
    {
      id: 2,
      name: 'Wins Ascending',
      key: 'wins',
      reverse: false
    }
  ];
  vm.order = vm.orders[0];
  vm.new = {};
  vm.addContestent = function() {
    vm.contestents.push(vm.new);
    vm.new = {};
  };
});
