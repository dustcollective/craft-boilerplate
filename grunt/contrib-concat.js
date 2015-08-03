module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			separator: ';',
		},
		dist: {
			src: [
				'<%= dirs.src %>js/main.js'
			],
			dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};
