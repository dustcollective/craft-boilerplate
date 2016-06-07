module.exports = function(grunt) {

	grunt.config('svgmin', {
		icons: {
			files: [{
				expand: true,
				cwd: '<%= dirs.src %><%= dirs.img_build_folder %>icons/',
				src: [
					'*.svg'
				],
				dest: 'craft/templates/_partials/snippets/svg/'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-svgmin');

};
