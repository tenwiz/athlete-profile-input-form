(() => {
    'use strict';

    const app = angular.module('data');
    app.service('dataService', dataService);
    dataService.$inject = ['$q', '$http'];

    function dataService($q, $http) {
        const vm = this;
        vm.getPlayers = () => {
            return $http.get('/list').then((response) => {
                return response.data;
            }).catch((err) => {
                return err;
            });
        }

        vm.getPlayerInfo = (username) => {
            return $http.get('/list/' + username).then((response) => {
                return response.data;
            }).catch((err) => {
                return err;
            });
        }

        vm.createPlayer = (object) => {
            let req = {
                method: 'POST',
                url: '/new',
                data: object
            };

            return $http(req).then((response) => {
                return response.data;
            }).catch((err) => {
                return err;
            });
        }

        vm.updatePlayerInfo = (username, object) => {
            return $http.put('/new/' + username, object).then((response) => {
                return response.data;
            }).catch((err) => {
                return err;
            })
        }
    }
})();