angular.module('bookmarks.edit', [
  'eggly.models.bookmarks'
])
  .directive('editBookmark', function EditBookmarkDirective() {
    return {
      controller: 'EditBookmarkCtrl',
      scope: {
        bookmark: '='
      },
      templateUrl: '/app/bookmarks/edit/edit.bookmark.tmpl.html'
    }
  })

  .controller('EditBookmarkCtrl', function ($scope, bookmarks) {
    function toggleEditing() {
      $scope.isEditing = !$scope.isEditing;
    }

    function updateBookmark() {
      $scope.bookmark = angular.copy($scope.editedBookmark);
      bookmarks.updateBookmark($scope.editedBookmark);
    }

    function cancelEditing() {
      $scope.isEditing = false;
    }

    $scope.editedBookmark = angular.copy($scope.bookmark);
    $scope.isEditing = false;

    $scope.toggleEditing = toggleEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.updateBookmark = updateBookmark;
    $scope.deleteBookmark = bookmarks.deleteBookmark;
  })

;
