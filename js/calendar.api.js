/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'AIzaSyB_mOnvJ1QUaczjZt7EkalItkAwM0MKrks',
        // clientId and scope are optional if auth is not required.
        'clientId': '879518249139-skmvnu8dkr5uh1d2es9lorp03dlc8n6a.apps.googleusercontent.com',
        'scope': 'profile',
    });
}
;
// 1. Load the JavaScript client library.
gapi.load('client', start);

function saveDate()
{
    var eventData = {
        'summary': 'Wedding of Sumit and Nisha',
        'location': 'Patel Samaj, Station road, Maliya Hatina - 362245',
        'description': '',
        'start': {
            'dateTime': '2018-02-11T09:00:00-00:00',
            'timeZone': 'Asia/Kolkata'
        },
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
            ]
        }
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': eventData
    });

    request.execute(function (event) {
        appendPre('Event created: ' + event.htmlLink);
    });
}

