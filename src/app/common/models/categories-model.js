angular.module('eggly.models.categories', [

])
  .service('categories', function CategoriesService($http, $q) {
    var URLS = {
        FETCH: 'data/categories.json'
      },
      categories,
      currentCategory;

    function extract(result) {
      return result.data;
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    this.getCategories = function () {
      return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    };

    this.getCurrentCategory = function () {
      return currentCategory;
    };

    this.setCurrentCategory = function (category) {
      currentCategory = category;
    };

    this.createCategory = function (category) {
      category.id = categories.length;
      categories.push(category);
    };

    this.deleteCategory = function (category) {
      _.remove(categories, function (c) {
        return c.id == category.id;
      });
    };

    this.getCategoryByName = function (categoryName) {
      return _.find(categories, function (c) {
        return c.name == categoryName;
      });
    };

  })
;
