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

  gapi_script_id: 'MBCiR339XZjkctGCCU_95FaQDKs0hEEzk',
  gapi_client_id: '1092950428665-vlb7p824fki51thi8u6n640h7ipta11q.apps.googleusercontent.com',
  gapi_scopes: ['https://www.google.com/calendar/feeds',
                'https://www.googleapis.com/auth/calendar.readonly',
                'https://www.googleapis.com/auth/script.storage',
                'https://www.googleapis.com/auth/userinfo.email'],
  calendar_ids: ['0dnl1h7kt9hptdht8s7bn7v03k@group.calendar.google.com',
                 'qq8bksutglfverg08u02i5sqhk@group.calendar.google.com',
                 'lib9bj2af8i23r110m90f01oh4@group.calendar.google.com']

})

.component('app', AppComponent);
