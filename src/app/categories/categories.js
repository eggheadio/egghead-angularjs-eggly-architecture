angular.module('categories', [
    'eggly.models.categories'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    //target the ui-view named 'categories' in ROOT state (eggly)
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    },
                    //target the ui-view named 'bookmarks' in ROOT state (eggly)
                    //to show all bookmarks for all categories
                    'bookmarks@': {
                        controller: 'BookmarksListCtrl as bookmarksListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
        var categoriesListCtrl = this;

        CategoriesModel.getCategories()
            .then(function (result) {
                categoriesListCtrl.categories = result;
            });
    })
;
