(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .directive('accordion', function () {
      return {
        restrict: 'E',
        scope: { items: '=' },
        template:
          '<div class="accordion">' +
            '<div class="accordion-item" ng-repeat="item in items track by $index">' +
              '<button class="accordion-trigger" type="button" ng-click="toggle($index)">' +
                '<span>{{ item.title }}</span><span>{{ openIndex === $index ? "−" : "+" }}</span>' +
              '</button>' +
              '<div class="accordion-content" ng-class="{ open: openIndex === $index }">' +
                '<p>{{ item.content }}</p>' +
              '</div>' +
            '</div>' +
          '</div>',
        link: function (scope) {
          scope.openIndex = 0;

          // Mantém apenas um item aberto por vez, como solicitado na atividade.
          scope.toggle = function (index) {
            scope.openIndex = scope.openIndex === index ? null : index;
          };
        }
      };
    });
})();
