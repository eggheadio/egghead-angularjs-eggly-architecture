angular.module('eggly.models.bookmarks', [])
    .service('BookmarksModel', function ($http, $q) {
        var model = this,
            URLS = {
                FETCH: 'data/bookmarks.json'
            },
            bookmarks;

        function extract(result) {
            return result.data;
        }

        function cacheBookmarks(result) {
            bookmarks = extract(result);
            return bookmarks;
        }

        function findBookmark(bookmarkId) {
            return _.find(bookmarks, function (bookmark) {
                return bookmark.id === parseInt(bookmarkId, 10);
            })
        }

        model.getBookmarks = function () {
            // A much more concise way to write what was in the lesson
            return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH).then(cacheBookmarks);
        };

        model.getBookmarkById = function (bookmarkId) {
            var deferred = $q.defer();
            if (bookmarks) {
                deferred.resolve(findBookmark(bookmarkId))
            } else {
                model.getBookmarks().then(function () {
                    deferred.resolve(findBookmark(bookmarkId))
                })
            }
            return deferred.promise;
        };

        model.createBookmark = function (bookmark) {
            bookmark.id = bookmarks.length;
            bookmarks.push(bookmark);
        };

        model.updateBookmark = function (bookmark) {
            var index = _.findIndex(bookmarks, function (b) {
                return b.id == bookmark.id
            });

            bookmarks[index] = bookmark;
        };
    })

;
