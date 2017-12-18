/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function saveDate()
{
    if(signInFlag===false)
    {
        gapi.auth2.getAuthInstance().signIn().then(createEvent);
    }
    else
    {
        createEvent();
    }
    
    
}
function createEvent()
{
     var eventData = {
        'summary': 'Wedding of Sumit and Nisha',
        'location': 'Patel Samaj, Maliya Hatina - 362245',
        'description': '',
        'start': {
            'dateTime': '2018-02-10T18:30:00-00:00',
            'timeZone': 'Asia/Kolkata'
        },
        'end': {
            'dateTime': '2018-02-11T18:29:59-00:00',
            'timeZone': 'Asia/Kolkata'
        },
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 48 * 60},
                {'method': 'popup', 'minutes': 10}
            ]
        }
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': eventData
    });

    request.execute(function (event) {
        //appendPre('Event created: ' + event.htmlLink);
    }); 
}
var signInFlag=false;
 var CLIENT_ID = '879518249139-skmvnu8dkr5uh1d2es9lorp03dlc8n6a.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyB_mOnvJ1QUaczjZt7EkalItkAwM0MKrks';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/calendar";

      

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
            gapi.auth2.getAuthInstance().isSignedIn.listen(function(isSignedIn){
                if(isSignedIn)
                {
                    signInFlag=true;
                }
                else
                {
                    signInFlag=false;
                }
            });
        });
      }

      

      

