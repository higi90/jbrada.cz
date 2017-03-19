module.exports = function(grunt) {

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    less: {
      compile: {
        files: {
          'dist/css/style.css' : 'less/style.less',
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        processImport: false
      },
      target: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css'],
        }
      }
    },
    concat: {
      dist_css: {
        src: [
          'dist/css/style.css',
          'bower_components/components-font-awesome/css/font-awesome.css',
        ],
        dest: 'dist/css/style.css'
      },
      dist_js: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/typed.js/dist/typed.min.js',
          'bower_components/smoothscroll-for-websites/smoothscroll.js',
          'js/**/*.js'
        ],
        dest: 'dist/js/javascript.js'
      },
    },
    uglify: {
      target: {
        files: {
          'dist/js/javascript.min.js': ['dist/js/javascript.js']
        }
      }
    },
    bowercopy: {
      scripts: {
        files: {
          'dist/js/selectivizr.js': 'selectivizr/selectivizr.js',
          'dist/js/html5shiv.min.js': 'html5shiv/dist/html5shiv.min.js',
          'dist/fonts': 'components-font-awesome/fonts'
        }
      }
    },
    svg_sprite: {
      target: {
        src			: ['svg/*.svg'],
        dest		: 'dist',
        options				: {
          mode			: {
            css			: {
              render	: {
                css	: true
              }
            }
          }
        }
      },
    },
    watch:{
      less: {
        files: ['less/**/*.less'],
        tasks: ['less', 'concat', 'cssmin']
      },
      uglify: {
        files: ['js/**/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-svg-sprite');


  grunt.registerTask('default', ['svg_sprite', 'less', 'concat', 'cssmin', 'uglify']);
  grunt.registerTask('bower-update', ['bowercopy']);

};
