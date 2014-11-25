angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'eggly.models.categories',
    'eggly.models.bookmarks'
])
    .config(function($stateProvider){
        $stateProvider
            .state('eggly.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksCtrl as bookmarks'
                    }
                }
            })
        ;
    })
    .controller('BookmarksCtrl', function ($stateParams) {
        var bookmarks = this;
        bookmarks.currentCategoryName = $stateParams.category;
    })
;
