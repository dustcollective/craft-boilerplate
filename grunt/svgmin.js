module.exports = function(grunt) {

	grunt.config('svgmin', {
		logos: {
			options: {
				plugins: [
				]
			},
			files: [{
				expand: true,
				cwd: '<%= dirs.src %><%= dirs.img_build_folder %>',
				src: [
					'**/*.svg',
					'!svg-icons/*'
				],
				dest: '<%= dirs.dest %><%= dirs.img_build_folder %>'
			}]
		},
		icons: {
			files: [{
				expand: true,
				cwd: '<%= dirs.src %><%= dirs.img_build_folder %>svg-icons/',
				src: [
					'*.svg'
				],
				dest: 'temp/svg-icons/'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-svgmin');

};
