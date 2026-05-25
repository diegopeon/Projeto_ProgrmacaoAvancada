(function () {
  'use strict';

  // Módulo principal exigido pela atividade AngularJS.
  angular.module('nexusArcadeApp', [])
    .controller('MainController', MainController);

  MainController.$inject = ['gameService', 'toastService', '$filter'];

  function MainController(gameService, toastService, $filter) {
    var vm = this;

    vm.currentPage = 1;
    vm.itemsPerPage = 3;
    vm.progress = 42;
    vm.selectedMood = 'Todos';
    vm.games = gameService.getGames();
    vm.libraryTags = ['Continuar jogando', 'Indies favoritos', 'Campanhas longas', 'Coop para amigos', 'Jogos rápidos'];

    vm.moodOptions = [
      { label: 'Todos', value: 'Todos' },
      { label: 'Relaxar', value: 'Relaxar' },
      { label: 'Desafio', value: 'Desafio' },
      { label: 'História', value: 'História' },
      { label: 'Cooperativo', value: 'Cooperativo' }
    ];

    vm.faqItems = [
      {
        title: 'O que torna a Nexus Arcade diferente?',
        content: 'A plataforma recomenda jogos pela intenção do jogador, não apenas por gênero ou preço.'
      },
      {
        title: 'Como funciona a curadoria por humor?',
        content: 'O usuário informa se quer relaxar, competir, explorar ou viver uma narrativa, e a vitrine muda conforme essa intenção.'
      },
      {
        title: 'Este protótipo usa AngularJS?',
        content: 'Sim. Os componentes visuais foram implementados como diretivas AngularJS, usando bindings, eventos e serviço de toast.'
      }
    ];

    vm.profileTabs = [
      {
        title: 'Perfil',
        content: 'Jogador explorador, com preferência por RPGs narrativos, indies atmosféricos e jogos cooperativos.'
      },
      {
        title: 'Conquistas',
        content: '23 conquistas raras desbloqueadas, 4 campanhas finalizadas e 2 jogos platinados.'
      },
      {
        title: 'Recomendações',
        content: 'Com base no perfil, a plataforma sugere Hollow Signal, Cozy Planet e Neon Warden.'
      }
    ];

    vm.changePage = function (page) {
      vm.currentPage = page;
      updateVisibleGames();
    };

    vm.selectMood = function (option) {
      vm.selectedMood = option.value;
      vm.currentPage = 1;
      updateVisibleGames();
      vm.showToast('info', 'Filtro aplicado: ' + option.label);
    };

    vm.advanceProgress = function () {
      vm.progress = vm.progress >= 100 ? 0 : vm.progress + 14;
      vm.showToast('success', 'Progresso atualizado para ' + vm.progress + '%.');
    };

    vm.showToast = function (type, message) {
      toastService.show(type, message);
    };

    function updateVisibleGames() {
      var filtered = vm.selectedMood === 'Todos'
        ? vm.games
        : $filter('filter')(vm.games, { mood: vm.selectedMood });

      vm.totalPages = Math.ceil(filtered.length / vm.itemsPerPage) || 1;
      var start = (vm.currentPage - 1) * vm.itemsPerPage;
      vm.visibleGames = filtered.slice(start, start + vm.itemsPerPage);
    }

    // Inicialização do controlador: demonstra uso de dados e filtros locais.
    updateVisibleGames();
  }
})();
