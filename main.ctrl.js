angular.module('app').controller('MainController', function(){
  var vm = this;
  vm.title = 'Ping Pong Leaderboard';
  vm.searchInput = '';
  vm.contestants = [
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
  vm.addContestant = function() {
    vm.contestants.push(vm.new);
    vm.new = {};
  };
});
