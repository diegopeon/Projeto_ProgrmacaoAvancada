(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .directive('progressBar', function () {
      return {
        restrict: 'E',
        scope: { progress: '=' },
        template:
          '<div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="{{ normalizedProgress }}">' +
            '<div class="progress-fill" ng-style="{ width: normalizedProgress + \'%\' }">{{ normalizedProgress }}%</div>' +
          '</div>',
        link: function (scope) {
          // Normaliza o valor para evitar porcentagens menores que 0 ou maiores que 100.
          scope.$watch('progress', function (value) {
            scope.normalizedProgress = Math.max(0, Math.min(100, Number(value) || 0));
          });
        }
      };
    });
})();
