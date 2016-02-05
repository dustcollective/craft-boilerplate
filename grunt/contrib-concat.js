module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			separator: ';',
		},
		dist: {
			src: [
				'bower_components/lazysizes/lazysizes.js',
				'<%= dirs.src %><%= dirs.js_build_folder %>main.js'
			],
			dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
		},
		dev: {
			src: [
				'bower_components/lazysizes/lazysizes.js',
				'bower_components/tota11y/build/tota11y.js',
				'<%= dirs.src %><%= dirs.js_build_folder %>main.js'
			],
			dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};
