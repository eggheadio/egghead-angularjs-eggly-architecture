angular.module('categories', [
  'eggly.models.categories'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('eggly.categories', {
        url: ':category',
        views: {
          'categories@': {
            controller: 'CategoriesCtrl',
            templateUrl: 'app/categories/categories.tmpl.html'
          }
        }
      });
  })

  .controller('CategoriesCtrl', function CategoriesCtrl($scope, $stateParams, categories) {
    categories.getCategories()
      .then(function (result) {
        $scope.categories = result;
        $scope.currentCategory = categories.getCategoryByName($stateParams.category);
        categories.setCurrentCategory($scope.currentCategory);
      });
  })
;