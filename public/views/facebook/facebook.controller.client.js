(function () {
    angular
        .module('Eventbook')
        .controller('FacebookController', FBController);
    
    function FBController() {

        function init() {
            window.fbAsyncInit = function() {
                FB.init({
                    appId      : '149347282142765',
                    xfbml      : true,
                    version    : 'v2.6'
                });

                FB.api('/me', {fields: 'last_name'}, function(response) {
                    console.log(response);
                });
            };

            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
        init();

    }
})();