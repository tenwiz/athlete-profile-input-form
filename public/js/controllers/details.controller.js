(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('PlayerDetailsController', PlayerDetailsController);

    PlayerDetailsController.$inject = ['data'];

    function PlayerDetailsController(data) {
        const vm = this;
        vm.data = Object.keys(data).map((key) => {
            let value;
            if (key == "dob") {
                let date = new Date(data[key]);
                value = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
            } else if (key == "sports") {
                value = data[key].join(",");
            } else {
                value = data[key];
            }
            return {
                key,
                value
            }
        });
    }
})();
