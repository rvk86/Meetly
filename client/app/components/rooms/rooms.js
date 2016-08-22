import angular from 'angular';
import uiRouter from 'angular-ui-router';
import roomsComponent from './rooms.component';
import roomsController from './rooms.controller';

let roomsModule = angular.module('rooms', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('rooms', {
      url: '/rooms',
      component: 'rooms'
    });
})

.component('rooms', roomsComponent)

.name;

export default roomsModule;
