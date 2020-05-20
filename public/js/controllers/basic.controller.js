(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.controller('PlayerBasicController', PlayerBasicController);

    PlayerBasicController.$inject = ['PlayerService', 'dataService'];

    function PlayerBasicController(PlayerService, dataService) {
        const vm = this;

        vm.options = ["Golf", "Tennis", "Cricket", "Basketball", "Baseball", "American Football", "Aquatics", "Archery", "Automobile Racing", "Badminton", "Beach Volleyball", "Bobsleigh", "Body Building", "Boxing", "Cross Country Running", "Cross Country Skiing", "Curling", "Cycling", "Darts", "Decathlon", "Down Hill Skiing", "Equestrianism", "eSports", "Fencing", "Field Hockey", "Figure Skating", "Gymnastics", "Ice Hockey", "Martial Arts", "Mixed Martial Arts", "Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo", "Racquetball", "Rowing", "Rugby", "Sailing", "Softball", "Shooting", "Skateboarding", "Skeet Shooting", "Skeleton", "Snow Boarding", "Soccer (Football)", "Squash", "Surfing", "Swimming", "Track and Field"];

        vm.genderOptions = ["Male", "Female"];

        const playerInfo = PlayerService.getPlayerInfo();
        vm.name = playerInfo.name;
        vm.username = playerInfo.username;
        vm.sports = playerInfo.sports;
        vm.nationality = playerInfo.nationality;
        vm.gender = playerInfo.gender;
        vm.dob = playerInfo.dob;

        vm.submit = () => {
            const info = {
                name: vm.name,
                username: vm.username,
                sports: vm.sports,
                nationality: vm.nationality,
                gender: vm.gender,
                dob: vm.dob
            };

            PlayerService.setBasicInfo(info);
            PlayerService.setUserProperties({
                username: vm.username,
                value: false
            });

            dataService.createPlayer(info);
        }
    }
})();
