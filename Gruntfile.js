module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                files: {
                    'dist/css/style.css': 'less/style.less',
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
                    'node_modules/font-awesome/css/font-awesome.css',
                ],
                dest: 'dist/css/style.css'
            },
            dist_js: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
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
        copy: {
            fontAwesome: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome/',
                        src: ['fonts/*'],
                        dest: 'dist/'
                    }

                ]
            }
        },
        watch: {
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
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['less', 'concat', 'cssmin', 'uglify']);
    grunt.registerTask('copy-assets', ['copy']);

};
