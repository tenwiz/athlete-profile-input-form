(() => {
    'use strict';

    const app = angular.module('AthleteProfile');

    app.config(RouterConfig);

    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('/', {
            url: '/',
            templateUrl: './public/html/main.html',
            controller: 'MainController as vm'
        })

        $stateProvider.state('list', {
            url: '/list',
            templateUrl: './public/html/list.html',
            controller: 'PlayerListController as vm',
            resolve: {
                data: ['dataService', (dataService) => {
                    return dataService.getPlayers();
                }]
            }
        })

        $stateProvider.state('listOne', {
            url: '/list/{username}',
            templateUrl: './public/html/details.html',
            controller: 'PlayerDetailsController as vm',
            resolve: {
                data: ['dataService', '$stateParams', (dataService, $stateParams) => {
                    return dataService.getPlayerInfo($stateParams.username);
                }]
            }
        })

        $stateProvider.state('basic', {
            url: '/new/basic',
            templateUrl: './public/html/basic.html',
            controller: 'PlayerBasicController as vm'
        })

        $stateProvider.state('about', {
            url: '/new/about',
            templateUrl: './public/html/about.html',
            controller: 'PlayerAboutController as vm'
        })

        $stateProvider.state('media', {
            url: '/new/media',
            templateUrl: './public/html/social.html',
            controller: 'PlayerSocialController as vm'
        })

        $stateProvider.state('preview', {
            url: '/new/preview',
            templateUrl: './public/html/preview.html',
            controller: 'PlayerPreviewController as vm'
        })
    }
})();
