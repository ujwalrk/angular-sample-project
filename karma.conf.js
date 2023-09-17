module.exports = function(config) {
  config.set({

    basePath: './app',

    customLaunchers: {
     ChromeHeadlessNoSandbox: {
         base: 'ChromeHeadless',
         flags: [
            '--no-sandbox',
            '--disable-setuid-sandbox']
     }
    },

    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'core/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['ChromeHeadlessNoSandbox'],

    singleRun: true,

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
