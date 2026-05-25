(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .factory('gameService', gameService);

  function gameService() {
    var games = [
      { title: 'Hollow Signal', genre: 'RPG', mood: 'História', price: 89.9, description: 'Uma estação orbital que revela memórias esquecidas.', gradient: 'linear-gradient(135deg, #312e81, #0891b2)' },
      { title: 'Cozy Planet', genre: 'Simulação', mood: 'Relaxar', price: 39.9, description: 'Construa uma pequena colônia em um planeta gentil.', gradient: 'linear-gradient(135deg, #166534, #0e7490)' },
      { title: 'Neon Warden', genre: 'Ação', mood: 'Desafio', price: 119.9, description: 'Combates rápidos em uma cidade neon hostil.', gradient: 'linear-gradient(135deg, #7f1d1d, #6d28d9)' },
      { title: 'Iron Pact', genre: 'Estratégia', mood: 'Cooperativo', price: 59.9, description: 'Forme alianças táticas em missões de alto risco.', gradient: 'linear-gradient(135deg, #374151, #b45309)' },
      { title: 'Velvet Dungeon', genre: 'Roguelike', mood: 'Desafio', price: 49.9, description: 'Masmorras elegantes, perigosas e sempre mutáveis.', gradient: 'linear-gradient(135deg, #581c87, #be123c)' },
      { title: 'Moon Harbor', genre: 'Aventura', mood: 'Relaxar', price: 29.9, description: 'Explore ilhas lunares em uma jornada contemplativa.', gradient: 'linear-gradient(135deg, #0f172a, #2563eb)' }
    ];

    return {
      getGames: function () {
        return games;
      }
    };
  }
})();
