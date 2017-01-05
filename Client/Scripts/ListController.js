(function (app) {

    var ListController = function ($scope, clientService) {

        var removeClientById = function(id) {
            for (var i = 0; i < $scope.clients.length; i++) {
                if ($scope.clients[i].id == id) {
                    $scope.clients.splice(i, 1);
                }
            }
        };

        clientService.getAll().success(function(clients) {
            $scope.clients = clients;
        });

        $scope.create = function () {
            $scope.edit = { client: { firstName: "", lastName: "", doB: "12/12/1964" } };
        };
    
        $scope.delete = function (client) {
            clientService.delete(client)
                .success(function() {
                    removeClientById(client.id);
                });
        };
    };
    ListController.$inject = ["$scope", "clientService"];

    app.controller("ListController", ListController);

}(angular.module("RDACLient")));