angular.module('Bookmarks', ['Categories'])
    .factory('BookmarksService', BookmarksService)
    .directive('createBookmark', CreateBookmarkDirective)
    .directive('editBookmark', EditBookmarkDirective)
    .controller('BookmarksCtrl', BookmarksCtrl);

