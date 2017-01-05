(function(app) {

    var clientService = function ($http, clientApiUrl) {

        var getAll = function() {
            return $http.get(clientApiUrl);
        };

        var getById = function(id) {
            return $http.get(clientApiUrl + id);
        };

        
        var create = function(client) {
            return $http.post(clientApiUrl, client);
        };

        var destroy = function(client) {
            return $http.delete(clientApiUrl +  client.id);
        };

        return {
            getAll: getAll,
            getById: getById,
            create: create,
            delete: destroy
        };
    };
   
    clientService.$inject = ["$http", "clientApiUrl"];

    app.factory("clientService", clientService);

}(angular.module("RDACLient")))