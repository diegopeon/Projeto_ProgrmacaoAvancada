(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .factory('toastService', toastService);

  toastService.$inject = ['$timeout'];

  function toastService($timeout) {
    var toasts = [];

    return {
      toasts: toasts,
      show: function (type, message) {
        var toast = {
          id: Date.now(),
          type: type || 'info',
          message: message || 'Operação concluída.'
        };

        toasts.push(toast);

        // Remove automaticamente a notificação após alguns segundos.
        $timeout(function () {
          var index = toasts.indexOf(toast);
          if (index >= 0) {
            toasts.splice(index, 1);
          }
        }, 3500);
      },
      remove: function (toast) {
        var index = toasts.indexOf(toast);
        if (index >= 0) {
          toasts.splice(index, 1);
        }
      }
    };
  }
})();
