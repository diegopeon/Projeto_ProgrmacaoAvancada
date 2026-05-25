(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .directive('dropdownMenu', function ($document) {
      return {
        restrict: 'E',
        scope: {
          options: '=',
          onSelect: '&'
        },
        template:
          '<div class="dropdown">' +
            '<button class="dropdown-button" type="button" ng-click="toggle($event)">Filtrar humor ▾</button>' +
            '<div class="dropdown-list" ng-if="isOpen">' +
              '<button class="dropdown-item" type="button" ng-repeat="option in options" ng-click="select(option)">{{ option.label }}</button>' +
            '</div>' +
          '</div>',
        link: function (scope, element) {
          scope.isOpen = false;

          scope.toggle = function (event) {
            event.stopPropagation();
            scope.isOpen = !scope.isOpen;
          };

          scope.select = function (option) {
            scope.onSelect({ option: option });
            scope.isOpen = false;
          };

          function closeOnOutsideClick(event) {
            if (!element[0].contains(event.target)) {
              scope.$applyAsync(function () {
                scope.isOpen = false;
              });
            }
          }

          $document.on('click', closeOnOutsideClick);
          scope.$on('$destroy', function () {
            $document.off('click', closeOnOutsideClick);
          });
        }
      };
    });
})();
