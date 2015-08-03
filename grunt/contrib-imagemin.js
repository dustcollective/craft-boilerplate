module.exports = function(grunt) {

	var mozjpeg = require('imagemin-mozjpeg');

	grunt.config('imagemin', {
		all: {
			options: {                       // Target options
				optimizationLevel: 3,
				progressive: true,
				use: [mozjpeg()]
			},
			files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: '<%= dirs.src %>/assets/img/',                   // Src matches are relative to this path
				src: ['**/*.{jpg,png}'],   // Actual patterns to match
				dest: '<%= dirs.dest %>/assets/img/'                  // Destination path prefix
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');

};
