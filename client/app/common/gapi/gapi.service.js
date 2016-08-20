class GapiService {

  constructor($location, $rootScope, config) {
    'ngInject';

    this.client_id = config.gapi_client_id;
    this.scopes = config.gapi_scopes;
    this.rootScope = $rootScope;
    this.location = $location;

  }

  auth(immediate, location) {

    gapi.auth.authorize(
      {
        'client_id': this.client_id,
        'scope': this.scopes.join(' '),
        'immediate': immediate
      }, (authResult) => {

        if (authResult && !authResult.error) {
          this.rootScope.$apply(() => {

            this.location.path(location);

          })
        } else {
          throw 'We are sorry, the Google authentication failed!';
        }

      });

  }


  loadCalendarApi() {

    gapi.client.load('calendar', 'v3');

  }

}

export default GapiService;
