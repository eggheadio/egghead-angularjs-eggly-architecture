angular.module('categories', [
    'eggly.models.categories'
])
    .config(function($stateProvider){
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    },
                    'bookmarks@': {
                        controller: 'BookmarksCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    }
                }
            })
    })
    .controller('CategoriesCtrl', function CategoriesCtrl(){

    })
    .controller('BookmarksCtrl', function BookmarksCtrl() {

    })
;
