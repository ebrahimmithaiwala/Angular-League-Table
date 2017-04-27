angular.module('app').controller('MainController', function(){
  var vm = this;
  vm.title = 'Ping Pong Leaderboard';
  vm.searchInput = '';
  vm.contestants = [
    {
      name: 'George',
      wins: 25,
    },
    {
      name: 'Mike',
      wins: 23,
    },
    {
      name: 'Anna',
      wins: 18,
    },
    {
      name: 'Ismael',
      wins: 6,
    },
    {
      name: 'Lucy',
      wins: 2,
    }
  ];
  vm.games = [
    {
      names: 'George vs Steve',
      winner: 'George'
    },
    {
      names: 'Mike vs Jessica',
      winner: 'Anna'
    },
    {
      names: 'Lucy vs Ismael',
      winner: 'Ismael'
    },
    {
      names: 'George vs Lucy',
      winner: 'George'
    },
    {
      names: 'Mike vs George',
      winner: 'George'
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
  vm.addGame = function() {
    vm.games.push(vm.new);
    vm.new = {};
  };
});
