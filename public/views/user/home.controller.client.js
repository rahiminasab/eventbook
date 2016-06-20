(function () {
    angular
        .module("Eventbook")
        .controller("HomeController", HomeController);
    
    function HomeController($location, UserService, $rootScope) {
        var vm = this;
        vm.logout = logout;

        var id = $rootScope.currentUser._id;
        function init() {
            UserService
                .findUserById(id)
                .then(function(response){
                    vm.user = response.data;
                });
        }
        init();
        
        function logout() {
            console.log("HERE")
            UserService
                .logout()
                .then(
                    function(response) {
                        $location.url("/login")
                    },
                    function (err) {
                        $location.url("/login")
                    }
                )
        }
    }
})();