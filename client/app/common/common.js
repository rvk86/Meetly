import angular from 'angular';
import Gapi from './gapi/gapi';

let commonModule = angular.module('app.common', [
  Gapi
])

.name;

export default commonModule;
