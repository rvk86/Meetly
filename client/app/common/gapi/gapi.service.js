import moment from 'moment';
import './client.js';

class GapiService {

  constructor($location, $rootScope, config) {
    'ngInject';

    this.script_id = config.gapi_script_id;
    this.client_id = config.gapi_client_id;
    this.scopes = config.gapi_scopes;
    this.calendar_ids = config.calendar_ids;
    this.rootScope = $rootScope;
    this.location = $location;

  }

  auth(immediate, location='') {

    gapi.auth.authorize({
      'client_id': this.client_id,
      'scope': this.scopes.join(' '),
      'immediate': immediate
    }, (authResult) => {

      if (authResult && !authResult.error) {

          this.run('getUser').then((result) => {
            this.rootScope.$apply(() => {
              this.user = result.result;
              this.initialized = true;
              this.location.path(location);
            });
          });

      } else {

        throw 'We are sorry, the Google authentication failed!';

      }

    });

  }


  run(method, args=[]) {

    var request = {
      'function': method,
      'parameters': args,
      // 'devMode': true
    };

    return gapi.client.request({
      'root': 'https://script.googleapis.com',
      'path': 'v1/scripts/' + this.script_id + ':run',
      'method': 'POST',
      'body': request
    }).then((result) => {

      return result.result.response;

    }, (error) => {

      return error;

    });

  }

}

export default GapiService;
