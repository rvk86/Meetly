import angular from 'angular';
import Home from './home/home';
import Rooms from './rooms/rooms';

let componentModule = angular.module('app.components', [
  Home,
  Rooms
])

.name;

export default componentModule;
