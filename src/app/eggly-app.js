angular.module('Eggly', [
  'ngAnimate',
  'ui.router',
  'categories',
  'bookmarks'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('eggly', {
        url: '/',
        views: {
          'categories': {
            controller: 'CategoriesCtrl',
            templateUrl: 'app/categories/categories.tmpl.html'
          },
          'bookmarks': {
            controller: 'BookmarksCtrl',
            templateUrl: 'app/bookmarks/bookmarks.tmpl.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  })

;