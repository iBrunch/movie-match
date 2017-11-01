(function() {
  function game() {
    return {
      templateUrl: '/templates/directives/game.html',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attributes) {
          
      }
    };
  }
  angular
    .module('movieMatch')
    .directive('game', [game]);
})();
