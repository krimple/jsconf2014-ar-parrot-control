module.exports = function(config){
  config.set({

    basePath :'../..',

    files : [
      'api/**/*.js',
      'assets/bower_components/angular/angular.js',
      'assets/bower_components/angular-route/angular-route.js',
      'assets/bower_components/angular-mocks/angular-mocks.js',
      'assets/js/**/*.js',
      'test/spec/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

/*    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],
           */
    reporters: ['story']

  });
};
