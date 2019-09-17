/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "localhost", // Address to listen on, can be:
                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                        // - another specific IPv4/6 to listen on a specific interface
                        // - "", "0.0.0.0", "::" to listen on any interface
                        // Default, when address config is left out, is "localhost"
  port: 8084,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.1/255"], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 24,
  units: "metric",
  electronOptions: {fullscreen: true, width: 800, height: 600},
  modules: [
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left",
      config: {
        // The config property is optional.
        // See 'Configuration options' for more information.
        // `digital`, `analog`, or `both` <br> **Default value:** `digital`
        displayType: 'analog',
        analogFace: 'face-010',
        displaySeconds: false
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Woburn",
        locationID: "4956032",  //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "046da1784c6eab7f9e95c28d1bc20e44",
        units: "imperial",
        degreeLabel: "true"
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Woburn",
        locationID: "4956032",  //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "046da1784c6eab7f9e95c28d1bc20e44",
        units: "imperial",
        degreeLabel: "true"
      }
    },
    {
      module: 'MMM-xiaomi',
      position: 'top_left',
      header: 'Temperature / Humidity',  // This is optional
      config: {
        gatewayIP: '192.168.1.75',
        gatewayToken: '38f23cda57f2a22963338f03aa4d0b59',
        outsideSensorId: '158d000223f705',
        showWindow: true,
        celcius: false,
        showVentilation: true,
        showLights: false,
        audioNotifications: false,
        showTrend: true,
        rooms: [
          {
            name: 'Outside',
            sortOrder: 1,
            devices: ['158d000223f705']
          },
          {
            name: 'Master',
            sortOrder: 2,
            devices: ['158d0001f2abe2']
          },
          {
            name: 'Kayley',
            sortOrder: 3,
            devices: ['158d00019cbad8']
          },
          {
            name: 'Guest',
            sortOrder: 4,
            devices: ['158d0001c1578c']
          },
          {
            name: 'Grandparents',
            sortOrder: 5,
            devices: ['158d0001f515ec']
          },
          {
            name: 'Kitchen',
            sortOrder: 6,
            devices: ['158d00016ffb90']
          },
          {
            name: 'Living',
            sortOrder: 7,
            devices: ['158d0001f4effe']
          },
          {
            name: 'Family',
            sortOrder: 8,
            devices: ['158d000223f56e']
          }
        ]
      }
    },
    // {
    //   module: 'MMM-Scrobbler',
    //   position: 'top_right',
    //   config: {
    //     username: 'aarondkk',
    //     apikey: '99deb2c2033ae44616de4cbd7d7d7e84',
    //     //time interval to search for new song (every 15 seconds)
    //     updateInterval: 15 * 1000,
    //     //how often should we try to retrieve a song if not listening
    //     delayCount: 5,
    //     //time interval to search for new song if the 5 times not listening is received.
    //     //set this to the same number as updateInterval to ignore this option
    //     delayInterval: 120*1000,
    //     animationSpeed: 1000,
    //     showAlbumArt: true,
    //     showMetaData: true,
    //     //Determines the position of the meta text. Possible values: top, bottom, left, right
    //     alignment: "bottom",
    //   }
    // },
    {
      module: 'MMM-Trello',
      header: 'Home Reminder',
      position: 'top_right', // This can be any of the regions, best results in center regions.
      config: {
        // See 'Configuration options' for more information.
        api_key: "18483816fc662cc173f0a69bd0513a1c",
        token: "2f373e422105b4e923559b538190063441d588d09da980a0613a5ae2378ca613",
        list: "5a240991f714c6bf237857c3",
        wholeList: 'true',
      }
    },
    {
      //disabled:true,
      module: 'MMM-CalendarExt',
      position: "fullscreen_below",
      config: {
        system: {
          show: ["daily", "upcoming"],
          locale: 'en',
          redrawInterval:60000,
        },
        views: {
          daily: {
            position:'bottom_bar',
            counts:7,
          },
          upcoming: {
            position:'top_left',
            limit:5
          },
        },
        defaultCalendar: {
          maxEntries:50,
          maxDays:30,
          interval: 1000*60*5,
        },
        calendars :[
          {
            name: "holiday",
            symbol: "calendar-o",
            styleName: "style1",
            url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
          },
          {
            name: "holiday",
            symbol: "calendar-o",
            styleName: "style1",
            url: "https://calendar.google.com/calendar/ical/aaron.ding%40gmail.com/private-2390b8aa2c881dd14a6ae5a848b9ed07/basic.ics"
          },
          {
            name: "holiday",
            symbol: "calendar-o",
            styleName: "style1",
            url: "https://calendar.google.com/calendar/ical/8ftqk3rhmin9lv0s2g1rmjepe0%40group.calendar.google.com/private-524fa3044e654b38a05b2cb5751731a9/basic.ics"
          },
        ],
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "NFL",
            url: "http://www.espn.com/espn/rss/nfl/news",
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
