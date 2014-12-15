angular.module('categories.bookmarks.create', [

])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.create', {
                url: '/bookmarks/create',
                views: {
                    '@eggly.categories.bookmarks': {
                        templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
                        controller: 'CreateBookMarkCtrl as createBookmarkCtrl'
                    }
                }
            })
        ;
    })
    .controller('CreateBookMarkCtrl', function() {

    });