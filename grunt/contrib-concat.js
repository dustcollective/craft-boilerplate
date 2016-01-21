module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			separator: ';',
		},
		dist: {
			src: [
				'<%= dirs.src %><%= dirs.js_build_folder %>js/main.js'
			],
			dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
		},
		dev: {
			src: [
				'bower_components/tota11y/build/tota11y.js',
				'<%= dirs.src %>js/main.js'
			],
			dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};
