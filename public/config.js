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
                controllerAs: "model"
            })
    }
})();
