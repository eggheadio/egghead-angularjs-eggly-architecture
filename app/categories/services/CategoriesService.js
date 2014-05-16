function CategoriesService($rootScope, $http, $q) {
    var URLS = {
            FETCH: 'data/categories.json'
        },
        categories,
        currentCategory;

    // --------------------------------
    // Public Methods
    // --------------------------------
    var getCategories = function () {
        return (categories) ? $q.when( categories ) : $http.get(URLS.FETCH).then(cacheCategories);
    };

    var getCurrentCategory = function () {
        return currentCategory;
    };

    var setCurrentCategory = function (category) {
        currentCategory = category;
        $rootScope.$broadcast('currentCategoryUpdated');
    };

    var createCategory = function (category) {
        category.id = categories.length;
        categories.push(category);
    };

    var deleteCategory = function (category) {
        _.remove(categories, function (c) {
            return c.id == category.id;
        });
    };

    var getCategoryByName = function (categoryName) {
        return _.find(categories, function (c) {
            return c.name == categoryName;
        });
    };

    // --------------------------------
    // Private Methods
    // --------------------------------
    var extract = function (result) {
        return result.data;
    };

    function cacheCategories(result) {
        categories = extract(result);
        return categories;
    };

    // --------------------------------
    // API
    // --------------------------------
    return {
        getCategories: getCategories,
        createCategory: createCategory,
        deleteCategory: deleteCategory,
        getCurrentCategory: getCurrentCategory,
        setCurrentCategory: setCurrentCategory,
        getCategoryByName: getCategoryByName
    }
}

CategoriesService.$inject = ['$rootScope', '$http', '$q'];