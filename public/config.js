(function () {
    angular
        .module("Eventbook")
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/login"
            })
            .when("/login", {
                templateUrl: "./views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/home", {
                templateUrl: "./views/user/home.view.client.html",
                controller: "HomeController",
                controllerAs: "model",
                resolve: {
                    loggedIn: checkLoggedIn
                }
            });
        
        function checkLoggedIn(UserService, $location, $q, $rootScope) {

            var deferred = $q.defer();
            UserService
                .loggedIn()
                .then(
                    function(response) {
                        var user = response.data;
                        if(user == '0') {
                            $rootScope.currentUser = null;
                            deferred.reject();
                            $location.url("/login");
                        } else {
                            $rootScope.currentUser = user;
                            deferred.resolve();
                        }
                    },
                    function (err) {
                        $location.url("/login");
                    }
                );
            return deferred.promise;
        }
    }
})();
