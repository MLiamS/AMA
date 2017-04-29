/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'a-m-a',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

      firebase: {
        apiKey: "AIzaSyBmMZURP_Syyp-lW8P6E5fcE3ezBk4dkgc",
        authDomain: "a-m-a-ad47b.firebaseapp.com",
        databaseURL: "https://a-m-a-ad47b.firebaseio.com",
        projectId: "a-m-a-ad47b",
        storageBucket: "a-m-a-ad47b.appspot.com",
        messagingSenderId: "524309362968"
      },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
