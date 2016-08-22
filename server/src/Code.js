var scriptProps = PropertiesService.getScriptProperties();
var user = Session.getEffectiveUser().getEmail();


function startMeeting(calendarId) {

  var calendars = JSON.parse(scriptProps.getProperty('calendars'));
  
  if(!calendars) {
    calendars = {};
  }
  
  calendars[calendarId] = {user: user, started: new Date()};
  scriptProps.setProperty('calendars', JSON.stringify(calendars));
  
  return calendars;
  
}


function stopMeeting(calendarId) {

  var calendars = JSON.parse(scriptProps.getProperty('calendars'));
  
  var cal = CalendarApp.getCalendarById(calendarId);
  cal.createEvent("Meetly meeting by " + user, new Date(calendars[calendarId]['started']), new Date());
  
  delete calendars[calendarId];
  scriptProps.setProperty('calendars', JSON.stringify(calendars));
  
  return calendars;
  
}


function getCalendarStatus(calendarId) {

  var calendars = JSON.parse(scriptProps.getProperty('calendars'));
  if(!calendars) return false;

  return calendars[calendarId];
  
}


function getUser() {
  
  return user;
  
}


function getCalendars(calendarIds) {

  var calendars = [];
  for(var c in calendarIds) {
    var cal = CalendarApp.getCalendarById(calendarIds[c]);
    
    calendars.push({
      id: calendarIds[c],
      name: cal.getName(),
      occupied: getCalendarStatus(calendarIds[c])
    });
  }

  return calendars;
  
}