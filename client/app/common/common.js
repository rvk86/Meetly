import angular from 'angular';
import Navbar from './navbar/navbar';
import Gapi from './gapi/gapi';

let commonModule = angular.module('app.common', [
  Navbar,
  Gapi
])

.name;

export default commonModule;
