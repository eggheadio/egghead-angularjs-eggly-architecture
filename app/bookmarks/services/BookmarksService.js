function BookmarksService($http, $q){
    var URLS = {
            FETCH: 'data/bookmarks.json'
        },
        bookmarks;

    // --------------------------------
    // Public Methods
    // --------------------------------
    var getBookmarks = function(){
        return (bookmarks) ? $q.when( bookmarks ) : $http.get(URLS.FETCH).then(cacheBookmarks);
    };

    var createBookmark = function(bookmark) {
        bookmark.id = bookmarks.length;
        bookmarks.push(bookmark);
    };

    var updateBookmark = function(bookmark) {
        var index = _.findIndex(bookmarks, function(b) { return b.id == bookmark.id });
        bookmarks[index] = bookmark;
    };

    var deleteBookmark = function(bookmark) {
        _.remove(bookmarks, function(b) { return b.id == bookmark.id; });
    };

    var getBookmarksForCategory = function(category) {
        _.filter(bookmarks, function(b) { return b.category == category; });
    };

    // --------------------------------
    // Private Methods
    // --------------------------------
    var extract = function (result) {
        return result.data;
    };

    function cacheBookmarks( result )
    {
        bookmarks = extract( result );
        return bookmarks;
    };

    // --------------------------------
    // API
    // --------------------------------
    return {
        getBookmarks: getBookmarks,
        createBookmark: createBookmark,
        updateBookmark: updateBookmark,
        deleteBookmark: deleteBookmark,
        getBookmarksForCategory: getBookmarksForCategory
    }
}

BookmarksService.$inject = ['$http', '$q'];