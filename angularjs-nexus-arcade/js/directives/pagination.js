(function () {
  'use strict';

  angular.module('nexusArcadeApp')
    .directive('pagination', function () {
      return {
        restrict: 'E',
        scope: {
          currentPage: '=',
          totalPages: '=',
          onPageChange: '&'
        },
        template:
          '<div class="pagination" aria-label="Paginação">' +
            '<button type="button" ng-disabled="currentPage === 1" ng-click="goTo(currentPage - 1)">Anterior</button>' +
            '<button type="button" ng-repeat="page in pages track by $index" ng-class="{ active: currentPage === page }" ng-click="goTo(page)">{{ page }}</button>' +
            '<button type="button" ng-disabled="currentPage === totalPages" ng-click="goTo(currentPage + 1)">Próxima</button>' +
          '</div>',
        link: function (scope) {
          function buildPages() {
            scope.pages = [];
            for (var i = 1; i <= scope.totalPages; i++) {
              scope.pages.push(i);
            }
          }

          scope.goTo = function (page) {
            if (page < 1 || page > scope.totalPages) return;
            scope.onPageChange({ page: page });
          };

          scope.$watch('totalPages', buildPages);
        }
      };
    });
})();
