angular.module('eggly.models.bookmarks', [

])
  .service('bookmarks', function BookmarksService($http, $q) {
    var URLS = {
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

    this.getBookmarks = function () {
      return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH).then(cacheBookmarks);
    };

    this.createBookmark = function (bookmark) {
      bookmark.id = bookmarks.length;
      bookmarks.push(bookmark);
    };

    this.updateBookmark = function (bookmark) {
      var index = _.findIndex(bookmarks, function (b) {
        return b.id == bookmark.id
      });
      bookmarks[index] = bookmark;
    };

    this.deleteBookmark = function (bookmark) {
      _.remove(bookmarks, function (b) {
        return b.id == bookmark.id;
      });
    };

    this.getBookmarksForCategory = function (category) {
      _.filter(bookmarks, function (b) {
        return b.category == category;
      });
    };
  })
;