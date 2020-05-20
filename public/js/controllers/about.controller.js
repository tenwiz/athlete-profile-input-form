(() => {
    const app = angular.module('AthleteProfile');

    app.controller('PlayerAboutController', PlayerAboutController);

    PlayerAboutController.$inject = ['PlayerService', 'dataService'];

    function PlayerAboutController(PlayerService, dataService) {
        const vm = this;
        vm.option = ["Yes", "No"];
        let check = PlayerService.getUserProperties();
        if (check.username.length === 0) {
            vm.hide = true;
        } else {
            vm.hide = false;
        }

        let playerInfo = PlayerService.getPlayerInfo();

        vm.association = playerInfo.association;
        vm.team = playerInfo.team;
        vm.about = playerInfo.about;
        vm.interest = playerInfo.interest;
        vm.charities = playerInfo.charities;
        vm.pets = playerInfo.pets;
        vm.alchol = playerInfo.alchol;
        vm.married = playerInfo.married;

        vm.submit = () => {
            let info = {
                association: vm.association,
                team: vm.team,
                about: vm.about,
                interest: vm.interest,
                charities: vm.charities,
                pets: vm.pets,
                alchol: vm.alchol,
                married: vm.married
            };

            PlayerService.setAboutInfo(info);
        }
    }
})();