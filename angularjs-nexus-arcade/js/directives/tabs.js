(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .directive('tabs', function () {
      return {
        restrict: 'E',
        scope: { tabs: '=' },
        template:
          '<div class="tabs">' +
            '<div class="tabs-nav" role="tablist">' +
              '<button class="tab-button" type="button" ng-repeat="tab in tabs track by $index" ng-class="{ active: activeIndex === $index }" ng-click="selectTab($index)">{{ tab.title }}</button>' +
            '</div>' +
            '<div class="tab-panel"><p>{{ tabs[activeIndex].content }}</p></div>' +
          '</div>',
        link: function (scope) {
          scope.activeIndex = 0;
          scope.selectTab = function (index) {
            scope.activeIndex = index;
          };
        }
      };
    });
})();
