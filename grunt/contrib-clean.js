module.exports = function(grunt) {

	grunt.config('clean', {
		default: [
			'temp'
		]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');

};
