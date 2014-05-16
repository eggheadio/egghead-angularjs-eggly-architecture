function BookmarksCtrl($scope, bookmarks, categories) {
    bookmarks.getBookmarks()
        .then(function (result) {
            $scope.bookmarks = result;
        });

    $scope.$on('currentCategoryUpdated', function(){
        $scope.currentCategory = categories.getCurrentCategory();
    });
}

BookmarksCtrl.$inject = ['$scope', 'BookmarksService', 'CategoriesService'];