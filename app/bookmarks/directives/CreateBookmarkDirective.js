function CreateBookmarkDirective(bookmarks) {
    var controller = function ($scope) {
        $scope.isCreating = false;
        $scope.newBookmark = {
            title: '',
            url: '',
            category: $scope.currentCategory.name
        };

        function toggleCreating() {
            $scope.isCreating = !$scope.isCreating;
        }

        function cancelCreating() {
            $scope.isCreating = false;
            resetForm();
        }

        function createBookmark() {
            bookmarks.createBookmark($scope.newBookmark);
            resetForm();
        }

        function resetForm() {
            $scope.newBookmark = {
                title: '',
                url: '',
                category: $scope.currentCategory.name
            };
        }

        $scope.toggleCreating = toggleCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.createBookmark = createBookmark;
    };

    return {
        controller: controller,
        templateUrl: 'create.bookmark.tmpl.html',
        scope: {
            currentCategory:'='
        }
    }
}

CreateBookmarkDirective.$inject = ['BookmarksService'];
