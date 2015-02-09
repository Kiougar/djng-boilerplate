(function() {
    'use strict';

    angular
        .module('djng', [
            'djng.routes',
            'djng.config'
        ]);

    angular
        .module('djng.routes', ['ngRoute']);

    angular
        .module('djng.config', []);

    //////////////////////

    angular
        .module('djng')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

    /////////////////////
})();