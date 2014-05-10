function CategoriesService($rootScope) {
    var categories = [
        {id: 0, name: 'Development'},
        {id: 1, name: 'Design'},
        {id: 2, name: 'Exercise'},
        {id: 3, name: 'Humor'}
    ];

    var currentCategory = null;

    var getCategories = function () {
        return categories;
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
        return _.find(categories, function(c) {
            return c.name == categoryName;
        });
    };

    return {
        getCategories: getCategories,
        createCategory: createCategory,
        deleteCategory: deleteCategory,
        getCurrentCategory: getCurrentCategory,
        setCurrentCategory: setCurrentCategory,
        getCategoryByName: getCategoryByName
    }
}

CategoriesService.$inject = ['$rootScope'];