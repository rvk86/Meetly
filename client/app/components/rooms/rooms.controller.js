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

    console.log('setCalendars');
    this.gapi.run('getCalendars', [this.gapi.calendar_ids]).then((result) => {
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

    console.log('startMeeting');
    this.gapi.run('startMeeting', [this.gapi.user, calendarId]).then((result) => {
      console.log(result);
      this.setCalendars();
    }, (error) => {
      console.log(error);
      throw error;
    });

  }


  stopMeeting(calendarId) {

    console.log('stopMeeting');
    this.gapi.run('stopMeeting', [this.gapi.user, calendarId]).then((result) => {
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