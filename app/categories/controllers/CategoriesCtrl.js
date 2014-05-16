function CategoriesCtrl($scope, $stateParams, categories) {
    categories.getCategories()
        .then(function (result) {
            $scope.categories = result;
            $scope.currentCategory = categories.getCategoryByName($stateParams.category);
            categories.setCurrentCategory($scope.currentCategory);
        });
}

CategoriesCtrl.$inject = ['$scope', '$stateParams', 'CategoriesService'];