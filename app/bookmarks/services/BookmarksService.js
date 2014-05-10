function BookmarksService(){
    var bookmarks = [
        {id:0, title:'AngularJS', url:'http://angularjs.org', category:'Development' },
        {id:1, title:'Egghead.io', url:'http://angularjs.org', category:'Development' },
        {id:2, title:'A List Apart', url:'http://alistapart.com/', category:'Design' },
        {id:3, title:'One Page Love', url:'http://onepagelove.com/', category:'Design' },
        {id:4, title:'MobilityWOD', url:'http://www.mobilitywod.com/', category:'Exercise' },
        {id:5, title:'Robb Wolf', url:'http://robbwolf.com/', category:'Exercise' },
        {id:6, title:'Senor Gif', url:'http://memebase.cheezburger.com/senorgif', category:'Humor' },
        {id:7, title:'Wimp', url:'http://wimp.com', category:'Humor' },
        {id:8, title:'Dump', url:'http://dump.com', category:'Humor' }
    ];

    var getBookmarks = function(){
        return bookmarks;
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

    return {
        getBookmarks: getBookmarks,
        createBookmark: createBookmark,
        updateBookmark: updateBookmark,
        deleteBookmark: deleteBookmark,
        getBookmarksForCategory: getBookmarksForCategory
    }
}