(function (app) {

    var EditController = function ($scope, clientService) {

        var updateMovie = function () {
            clientService.update($scope.edit.client)
                .success(function () {
                    angular.extend($scope.client, $scope.edit.client);
                    $scope.edit.client = null;
            });
        };

        var createMovie = function () {
            clientService.create($scope.edit.client)            
                .success(function (client) {
                    $scope.movies.push(client);
                    $scope.edit.client = null;
                });
        };

        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.client;
        };

        $scope.cancel = function () {
            $scope.edit.client = null;
        };

        $scope.save = function () {
            if ($scope.edit.client.id) {
                updateMovie();
            } else {
                createMovie();
            }
        };
    };
    EditController.$inject = ["$scope", "clientService"];

    app.controller("EditController", EditController);

}(angular.module("RDACLient")));