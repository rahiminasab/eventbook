(function () {
    angular
        .module('Eventbook')
        .factory('UserService', UserService);
    
    function UserService($http) {
        var api = {
            findUserById : findUserById,
            logout: logout,
            loggedIn: loggedIn
        };
        return api;
        

        function findUserById(id) {
            var url = "/api/user/"+id;
            return $http.get(url);
        }
        
        function logout() {
            return $http.post("/api/logout"); 
        }
        
        function loggedIn() {
            return $http.get("/api/loggedIn");
        }
    }
})();