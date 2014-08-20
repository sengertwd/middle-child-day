module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          cacheLocation: '/tmp/sass-cache'
        },
        files: {
          "css/main.css": "scss/main.scss"
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      single_file: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    watch: {
      css: {
        files: ['./scss/**'],
        tasks: ['sass','autoprefixer'],
        option: {
          debounceDelay: 100,
          livereload: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};