(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('MainController', MainController);

    MainController.$inject = ['PlayerService'];

    function MainController(PlayerService) {
        PlayerService.reset();
    }
})()
