(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('PlayerPreviewController', PlayerPreviewController);

    PlayerPreviewController.$inject = ['PlayerService', 'dataService'];

    function PlayerPreviewController(PlayerService, dataService) {
        const vm = this;
        let check = PlayerService.getUserProperties();
        if(check.username.length === 0){
            vm.hide = true;
        } else {
            vm.hide = false;
        }
        vm.playerInfo = PlayerService.getPlayerInfo();
        let date = new Date(vm.playerInfo.dob);
        vm.dob = (date.getMonth() + 1).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
        vm.submit = () => {
            dataService.updatePlayerInfo(vm.playerInfo.username, vm.playerInfo);
        }
    }
})();
