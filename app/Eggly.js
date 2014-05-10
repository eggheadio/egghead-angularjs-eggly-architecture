angular.module('Eggly', ['ngAnimate', 'ui.router', 'Categories', 'Bookmarks'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('index', {
                url: '',
                views: {
                    'categories': {
                        controller: 'CategoriesCtrl',
                        templateUrl: 'app/categories/templates/categories.tmpl.html'
                    },
                    'bookmarks': {
                        controller: 'BookmarksCtrl',
                        templateUrl: 'app/bookmarks/templates/bookmarks.tmpl.html'
                    }
                }
            })
            .state('categories', {
                url: '/:category',
                views: {
                    'categories': {
                        controller: 'CategoriesCtrl',
                        templateUrl: 'app/categories/templates/categories.tmpl.html'
                    },
                    'bookmarks': {
                        controller: 'BookmarksCtrl',
                        templateUrl: 'app/bookmarks/templates/bookmarks.tmpl.html'
                    }
                }
            });
    });