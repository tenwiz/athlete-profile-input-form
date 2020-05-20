(() => {
    const app = angular.module('AthleteProfile');

    app.controller('PlayerSocialController', PlayerSocialController);

    PlayerSocialController.$inject = ['PlayerService'];

    function PlayerSocialController(PlayerService) {
        const vm = this;
        let playerInfo = PlayerService.getPlayerInfo();
        let check = PlayerService.getUserProperties();
        if (check.username.length === 0) {
            vm.hide = true;
        } else {
            vm.hide = false;
        }

        vm.facebook = playerInfo.facebook;
        vm.twitter = playerInfo.twitter;
        vm.instagram = playerInfo.instagram;
        vm.snapchat = playerInfo.snapchat;
        vm.linkedin = playerInfo.linkedin;
        vm.twitch = playerInfo.twitch;
        vm.submit = () => {
            let info = {
                facebook: vm.facebook,
                twitter: vm.twitter,
                instagram: vm.instagram,
                snapchat: vm.snapchat,
                linkedin: vm.linkedin,
                twitch: vm.twitch
            }
            PlayerService.setMediaInfo(info);
        }
    }
})();