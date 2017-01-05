(function (app) {

    var DetailsController = function ($scope, $routeParams, clientService) {
        var zones = [
            { Id: 1, Description: "Zone1:BayView/Hunters Pt" },
            { Id: 2, Description: "Zone2:Mission" }
        ];
        $scope.zones = zones;
        
        var housingStatus =  [
            { Id: 1, Description: "Permanent" },
            { Id: 2, Description: "Temporary" },
            { Id: 3, Description: "Homeless" }
        ];
        $scope.housingStatus = housingStatus;

        clientService.getById($routeParams.id)
                    .success(function(client) {
                        $scope.client = client;
                    });

        $scope.edit = function () {
            $scope.edit.client = angular.copy($scope.client);
        };        
    };
    DetailsController.$inject = ["$scope", "$routeParams", "clientService"];

    app.controller("DetailsController", DetailsController);

}(angular.module("RDACLient")));