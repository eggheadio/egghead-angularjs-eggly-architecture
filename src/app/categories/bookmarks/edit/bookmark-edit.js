angular.module('categories.bookmarks.edit', [

])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.edit', {
                url: '/bookmarks/:bookmarkId/edit',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'app/categories/bookmarks/edit/bookmark-edit.tmpl.html',
                controller: 'EditBookmarkCtrl as editBookmarkCtrl'
            })
        ;
    })
    .controller('EditBookmarkCtrl', function(){

    })
;
