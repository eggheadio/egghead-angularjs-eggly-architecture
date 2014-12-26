angular.module('categories.bookmarks.create', [

])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.create', {
                url: '/bookmarks/create',
                //target the un-named 'ui-view' in PARENT states template
                templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
                controller: 'CreateBookMarkCtrl as createBookmarkCtrl'
            })
        ;
    })
    .controller('CreateBookMarkCtrl', function() {

    });