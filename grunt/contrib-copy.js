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
		}


	});

	grunt.loadNpmTasks('grunt-contrib-copy');

};
