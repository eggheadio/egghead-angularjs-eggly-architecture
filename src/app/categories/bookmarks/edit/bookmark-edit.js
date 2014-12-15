angular.module('categories.bookmarks.edit', [

])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.edit', {
                url: '/bookmarks/:bookmarkId/edit',
                views: {
                    '@eggly.categories.bookmarks': {
                        templateUrl: 'app/categories/bookmarks/edit/bookmark-edit.tmpl.html',
                        controller: 'EditBookmarkCtrl as editBookmarkCtrl'
                    }
                }
            })
        ;
    })
    .controller('EditBookmarkCtrl', function(){

    })
;
