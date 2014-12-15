angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'eggly.models.categories',
    'eggly.models.bookmarks'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksListCtrl as bookmarksListCtrl'
                    }
                }
            })
        ;
    })
    .controller('BookmarksListCtrl', function ($stateParams, CategoriesModel, BookmarksModel) {
        var bookmarksListCtrl = this;

        CategoriesModel.setCurrentCategory();

        if ($stateParams.category) {
            CategoriesModel.getCategoryByName($stateParams.category)
                .then(function (category) {
                    CategoriesModel.setCurrentCategory(category);
                });
        }

        BookmarksModel.getBookmarks()
            .then(function (result) {
                bookmarksListCtrl.bookmarks = result;
            });

        bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
    })

;

