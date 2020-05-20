(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('PlayerListController', PlayerListController);

    function PlayerListController(data) {
        const vm = this;
        vm.players = Object.keys(data).map((key) => ({
            name: data[key].name,
            sport: data[key].sports,
            twitter: data[key].twitter,
            username: key,
        }));
    };
})();
