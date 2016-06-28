module.exports = function(grunt) {

	grunt.config('copy', {
		fonts: {
			files: [{
				expand: true,
				cwd: '<%= dirs.src %>/assets/fonts/',
				src: ['*'],
				dest: '<%= dirs.dest %>/assets/fonts/',
				flatten: false
			}]
		},
		pluginanchor: {
			files: [{
				expand: true,
				cwd: 'bower_components/craft-anchor/anchor/',
				src: ['**'],
				dest: 'craft/plugins/anchor/',
				flatten: false
			}]
		},
		plugincachey: {
			files: [{
				expand: true,
				cwd: 'bower_components/craft-cachey/cachey/',
				src: ['**'],
				dest: 'craft/plugins/cachey/',
				flatten: false
			}]
		},
		pluginemailwrap: {
			files: [{
				expand: true,
				cwd: 'bower_components/craft-emailwrap/emailwrap/',
				src: ['**'],
				dest: 'craft/plugins/emailwrap/',
				flatten: false
			}]
		},
		pluginrefreshstring: {
			files: [{
				expand: true,
				cwd: 'bower_components/craft-refreshstring/refreshstring/',
				src: ['**'],
				dest: 'craft/plugins/refreshstring/',
				flatten: false
			}]
		},
		plugintypogrify: {
			files: [{
				expand: true,
				cwd: 'bower_components/typogrify/typogrify/',
				src: ['**'],
				dest: 'craft/plugins/typogrify/',
				flatten: false
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

};
