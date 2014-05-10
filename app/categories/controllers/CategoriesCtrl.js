function CategoriesCtrl($scope, categories, $stateParams) {
    var currentCategory = categories.getCategoryByName($stateParams.category);

    var model = {
        categories: categories.getCategories(),
        currentCategory: currentCategory
    };

    categories.setCurrentCategory(currentCategory);

    $scope.model = model;
}

CategoriesCtrl.$inject = ['$scope', 'CategoriesService', '$stateParams'];