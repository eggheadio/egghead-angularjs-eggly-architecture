angular.module('eggly.models.categories', [

])
    .service('CategoriesModel', function ($http) {
        var model = this,
            URLS = {
                FETCH: 'data/categories.json'
            },
            categories;

        function extract(result) {
            return result.data;
        }

        function cacheCategories(result) {
            categories = extract(result);
            return categories;
        }

        model.getCategories = function() {
            return $http.get(URLS.FETCH).then(cacheCategories);
        }
    })
;
