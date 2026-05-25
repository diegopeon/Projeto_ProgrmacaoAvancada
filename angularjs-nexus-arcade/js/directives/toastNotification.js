(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .directive('toastNotification', function (toastService) {
      return {
        restrict: 'E',
        template:
          '<div class="toast-stack" aria-live="polite">' +
            '<div class="toast" ng-repeat="toast in toasts track by toast.id" ng-class="toast.type">' +
              '<button type="button" aria-label="Fechar notificação" ng-click="remove(toast)">×</button>' +
              '<strong>{{ toast.type | uppercase }}</strong>' +
              '<p>{{ toast.message }}</p>' +
            '</div>' +
          '</div>',
        link: function (scope) {
          scope.toasts = toastService.toasts;
          scope.remove = toastService.remove;
        }
      };
    });
})();
