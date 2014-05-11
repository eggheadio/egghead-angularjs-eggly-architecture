function CreateBookmarkDirective(bookmarks) {
    var controller = function ($scope) {
        var model = {
            isCreating: false,
            newBookmark: {
                title: '',
                url: '',
                category: $scope.currentCategory.name
            }
        };

        function toggleCreating() {
            model.isCreating = !model.isCreating;
        }

        function cancelCreating() {
            model.isCreating = false;
            resetForm();
        }

        function createBookmark() {
            bookmarks.createBookmark(model.newBookmark);
            resetForm();
        }

        function resetForm() {
            model.newBookmark = {
                title: '',
                url: '',
<<<<<<< HEAD
                category: $scope.currentCategory.name || ''
=======
                category: $scope.currentCategory.name
>>>>>>> refs/heads/gh-pages
            };
        }

        $scope.model = model;
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
