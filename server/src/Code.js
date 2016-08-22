function startMeeting(user, calendarId) {
  
  var scriptProps = PropertiesService.getScriptProperties();
  var calendars = JSON.parse(scriptProps.getProperty('calendars'));
  
  if(!calendars) {
    calendars = {};
  }
  
  calendars[calendarId] = {user: user, started: new Date()};
  
  var json = JSON.stringify(calendars);
  scriptProps.setProperty('calendars', json);
  
  return json;
  
}


function stopMeeting(user, calendarId) {

  var scriptProps = PropertiesService.getScriptProperties();
  var calendars = JSON.parse(scriptProps.getProperty('calendars'));
  
  var cal = CalendarApp.getCalendarById(calendarId);
  cal.createEvent("Meetly meeting by " + user, new Date(calendars[calendarId]['started']), new Date());
  
  delete calendars[calendarId];
  
  var json = JSON.stringify(calendars);
  scriptProps.setProperty('calendars', json);
  
  return json;
  
}


function getCalendarStatus(calendarId) {

  var scriptProps = PropertiesService.getScriptProperties();
  var calendars = JSON.parse(scriptProps.getProperty('calendars'));
  if(!calendars) return false;

  return calendars[calendarId];
  
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