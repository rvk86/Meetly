import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import style from 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from 'angular-ui-bootstrap';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Bootstrap
  ])

.config(($locationProvider) => {
  "ngInject";

  $locationProvider.html5Mode(true).hashPrefix('!');

})

.constant('config', {

  gapi_client_id: '1092950428665-vlb7p824fki51thi8u6n640h7ipta11q.apps.googleusercontent.com',
  gapi_scopes: ['https://www.googleapis.com/auth/calendar.readonly']

})
//
// .run(function($http, Gapi) {
//   "ngInject";
//   $http({
//     method: 'GET',
//     url: 'https://apis.google.com/js/client.js'
//   }).then(function successCallback(response) {
//   // this callback will be called asynchronously
//   // when the response is available
//     Gapi.auth(false);
//   }, function errorCallback(response) {
//   // called asynchronously if an error occurs
//   // or server returns response with an error status.
//   });
//
// })

.component('app', AppComponent);
