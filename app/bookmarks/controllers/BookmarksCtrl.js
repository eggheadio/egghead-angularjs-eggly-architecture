function BookmarksCtrl($scope, bookmarks, categories) {
    var model = {
        bookmarks: bookmarks.getBookmarks(),
        currentCategory: categories.getCurrentCategory()
    };

    $scope.$on('currentCategoryUpdated', function(){
        model.currentCategory = categories.getCurrentCategory();
    });

    $scope.model = model;
}

BookmarksCtrl.$inject = ['$scope', 'BookmarksService', 'CategoriesService'];