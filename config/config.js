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
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
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
        displayType: 'analog'
      }
    },
    {
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check-o",
            url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
          },
          {
            symbol: "calendar",
            url: "https://calendar.google.com/calendar/ical/aaron.ding%40gmail.com/private-2390b8aa2c881dd14a6ae5a848b9ed07/basic.ics"
          }
        ]
      }
    },
    {
      module: 'MMM-MBTA',
      position: 'top_left', // This can be any of the regions.
      header: "MBTA:",
      config: {
        apikey: 'hjnwdQLuhE6iOxQQNIC4zw',
        showOnly: ['Subway', 'Train', 'Bus'],
        stations: [ "Winchester" ]
      }
    },
    {

      module: 'MMM-Scrobbler',

      position: 'top_center',
      config: {
        username: 'aarondkk',
        apikey: '99deb2c2033ae44616de4cbd7d7d7e84',
        //time interval to search for new song (every 15 seconds)
        updateInterval: 15 * 1000,
        //how often should we try to retrieve a song if not listening
        delayCount: 5,
        //time interval to search for new song if the 5 times not listening is received.
        //set this to the same number as updateInterval to ignore this option
        delayInterval: 120*1000,
        animationSpeed: 1000,
        showAlbumArt: true,
        showMetaData: true,
        //Determines the position of the meta text. Possible values: top, bottom, left, right
        alignment: "bottom",
      }
    },
    // {
    //   module: "compliments",
    //   position: "lower_third"
    // },
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
