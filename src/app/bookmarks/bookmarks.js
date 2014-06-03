angular.module('bookmarks', [
  'bookmarks.edit',
  'bookmarks.create',
  'eggly.models.categories',
  'eggly.models.bookmarks'
])

  .controller('BookmarksCtrl', function BookmarksCtrl($scope, $rootScope, bookmarks, categories) {
    bookmarks.getBookmarks()
      .then(function (result) {
        $scope.bookmarks = result;
      });

    $scope.getCurrentCategory = categories.getCurrentCategory;
  })
;

