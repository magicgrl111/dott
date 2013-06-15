module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    meta : {
      pkg : grunt.file.readJSON('package.json'),
    },
    watch: {
      css: {
        files: [
          'app/**/*.js',
          'app/**/*.handlebars',
          'app/**/*.css',
          'app/**/*.less'
        ],
        options: {
          livereload: true
        },
      },
    },
  });

  // Load third-party modules
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Define default task
  grunt.registerTask('default', ['watch']);
};
