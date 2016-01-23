angular.module('Eggly', [
    'ui.router',
    'categories',
    'categories.bookmarks'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('eggly', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
    .controller('MainCtrl', function ($state) {
        var main = this;

        main.isCreating = false;
        main.isEditing = false;
        main.currentCategory = null;
        main.editedBookmark = null;

        function isCurrentCategory(category) {
            return main.currentCategory !== null && category.name === main.currentCategory.name;
        }

        function setCurrentCategory(category) {
            main.currentCategory = category;

            // $state.go('eggly.categories.bookmarks', {category:category.name});

            cancelCreating();
            cancelEditing();
        }

        main.isCurrentCategory = isCurrentCategory;
        main.setCurrentCategory = setCurrentCategory;

        function setEditedBookmark(bookmark) {
            main.editedBookmark = angular.copy(bookmark);
        }

        function isSelectedBookmark(bookmarkId) {
            return main.editedBookmark !== null && main.editedBookmark.id === bookmarkId;
        }

        main.setEditedBookmark = setEditedBookmark;
        main.isSelectedBookmark = isSelectedBookmark;

        function resetCreateForm() {
            main.newBookmark = {
                title: '',
                url: '',
                category: main.currentCategory
            };
        }

        //-------------------------------------------------------------------------------------------------
        // CRUD
        //-------------------------------------------------------------------------------------------------
        function createBookmark(bookmark) {
            bookmark.id = main.bookmarks.length;
            main.bookmarks.push(bookmark);

            resetCreateForm();
        }

        function updateBookmark(bookmark) {
            var index = _.findIndex(main.bookmarks, function (b) {
                return b.id == bookmark.id
            });
            main.bookmarks[index] = bookmark;

            main.editedBookmark = null;
            main.isEditing = false;
        }

        function deleteBookmark(bookmark) {
            _.remove(main.bookmarks, function (b) {
                return b.id == bookmark.id;
            });
        }

        main.createBookmark = createBookmark;
        main.updateBookmark = updateBookmark;
        main.deleteBookmark = deleteBookmark;

        //-------------------------------------------------------------------------------------------------
        // CREATING AND EDITING STATES
        //-------------------------------------------------------------------------------------------------
        function shouldShowCreating() {
            return main.currentCategory && !main.isEditing;
        }

        function startCreating() {
            main.isCreating = true;
            main.isEditing = false;
            resetCreateForm();
        }

        function cancelCreating() {
            main.isCreating = false;
        }

        main.shouldShowCreating = shouldShowCreating;
        main.startCreating = startCreating;
        main.cancelCreating = cancelCreating;

        function shouldShowEditing() {
            return main.isEditing && !main.isCreating;
        }

        function startEditing() {
            main.isCreating = false;
            main.isEditing = true;
        }

        function cancelEditing() {
            main.isEditing = false;
            main.editedBookmark = null;
        }

        main.startEditing = startEditing;
        main.cancelEditing = cancelEditing;
        main.shouldShowEditing = shouldShowEditing;
    })
;