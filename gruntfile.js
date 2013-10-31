module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      jade: {
        files: ['app/views/**'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: ['public/scripts/**', 'app/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true,
        },
      },
      html: {
        files: ['public/views/**'],
        options: {
          livereload: true,
        },
      },
      css: {
        files: ['public/css/**'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['public/sass/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      }
    },
    jshint: {
      all: ['gruntfile.js', 'public/scripts/**/*.js', 'test/**/*.js', 'app/**/*.js']
    },
    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          args: [],
          ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
          watchedExtensions: ['js'],
          watchedFolders: ['app', 'config'],
          debug: true,
          delayTime: 1,
          env: {
              PORT: 3000
          },
          cwd: __dirname
        }
      }
    },
    concurrent: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.js']
    },
    compass: {
      options: {
        sassDir: 'public/sass',
        cssDir: 'public/styles',
        generatedImagesDir: 'public/images/generated',
        imagesDir: 'public/images',
        javascriptsDir: 'public/scripts',
        fontsDir: 'public/fonts',
        importPath: 'public/lib',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/fonts',
        relativeAssets: false,
        require: ['zurb-foundation'],
        force:true,
        assetCacheBuster:false
      },
      dist: {
        options: {
          debugInfo: false
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },
  });

  //Load NPM tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  //Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  //Default task(s).
  grunt.registerTask('default', ['jshint', 'concurrent','compass']);

  //Test task.
  grunt.registerTask('test', ['mochaTest']);
};
