class HomeController {
  constructor($location, $rootScope, Gapi) {
    'ngInject';

    this.rootScope = $rootScope;
    this.gapi = Gapi;

    if(!Gapi.initialized) {
      $location.path('/')
    } else {
      this.setCalendars();
    }

  }


  setCalendars() {

    this.gapi.run('getCalendars', [this.gapi.calendar_ids]).then((result) => {
      console.log('setCalendars');
      console.log(result);
      this.rootScope.$apply(() => {
        this.calendars = result.result;
      });
    }, (error) => {
      console.log(error);
      throw error;
    });

  }


  startMeeting(calendarId) {

    this.gapi.run('startMeeting', [calendarId]).then((result) => {
      console.log('startMeeting');
      console.log(result);
      this.setCalendars();
    }, (error) => {
      console.log(error);
      throw error;
    });

  }


  stopMeeting(calendarId) {

    this.gapi.run('stopMeeting', [calendarId]).then((result) => {
      console.log('stopMeeting');
      console.log(result);
      this.setCalendars();
    }, (error) => {
      console.log('error');
      console.log(error);
      throw error;
    });

  }

}

export default HomeController;