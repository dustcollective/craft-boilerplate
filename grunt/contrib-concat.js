module.exports = function(grunt) {

	grunt.config('concat', {
		options: {
			separator: ';',
		},
		default: {
			src: [
				'bower_components/lazysizes/lazysizes.js',
				'bower_components/picturefill/dist/picturefill.js',
				'<%= dirs.src %><%= dirs.js_build_folder %>main.js'
			],
			dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};
