(() => {
    'use strict';

    const app = angular.module('AthleteProfile');
    app.service('PlayerService', PlayerService);

    function PlayerService() {
        const vm = this;
        let playerSettings = {
            username: '',
            alreadyExists: false
        };
        let playerInfo = {};

        vm.setBasicInfo = ({ username, name, sports, nationality, gender, dob}) => {
            playerInfo.username = username;
            playerInfo.name = name;
            playerInfo.sports = sports;
            playerInfo.nationality = nationality;
            playerInfo.gender = gender;
            playerInfo.dob = dob;
        };

        vm.setAboutInfo = ({ association, team, about, interest, charities, pets, alchol, married }) => {
            playerInfo.association = association;
            playerInfo.team = team;
            playerInfo.about = about;
            playerInfo.interest = interest;
            playerInfo.charities = charities;
            playerInfo.pets = pets;
            playerInfo.alchol = alchol;
            playerInfo.married = married;
        };

        vm.setMediaInfo = ({ facebook, twitter, instagram, snapchat, linkedin, twitch }) => {
            playerInfo.facebook = facebook;
            playerInfo.twitter = twitter;
            playerInfo.instagram = instagram;
            playerInfo.snapchat = snapchat;
            playerInfo.linkedin = linkedin;
            playerInfo.twitch = twitch;
        };

        vm.getPlayerInfo = () => {
            return playerInfo;
        }

        vm.reset = () => {
            playerInfo = {};
            playerSettings = {
                username: '',
                alreadyExists: false
            };
        };

        vm.setUserProperties = ({ username, value }) => {
            playerSettings.username = username;
            playerSettings.alreadyExists = value;
        };

        vm.getUserProperties = () => {
            return playerSettings;
        }
    }
})();
