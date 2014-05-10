function EditBookmarkDirective(bookmarks) {
    var linker = function(scope, elem, attrs) {

    };

    var controller = function($scope) {
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
    };

    return {
        controller: controller,
        link: linker,
        scope: {
            bookmark: '='
        },
        templateUrl: 'edit.bookmark.tmpl.html'
    }
}

EditBookmarkDirective.$inject = ['BookmarksService'];
