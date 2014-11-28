angular.module('eggly.models.categories', [

])
    .service('CategoriesModel', function () {
        var model = this,
            categories = [
                {"id": 0, "name": "Development"},
                {"id": 1, "name": "Design"},
                {"id": 2, "name": "Exercise"},
                {"id": 3, "name": "Humor"}
            ];

        model.getCategories = function() {
            return categories;
        }
    })
;
