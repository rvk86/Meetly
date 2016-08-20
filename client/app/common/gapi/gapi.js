import angular from 'angular';
import GapiService from './gapi.service';

let gapiModule = angular.module('gapi', [])

.service('Gapi', GapiService)

.name;

export default gapiModule;
