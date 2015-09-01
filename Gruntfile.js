module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Global configuration variables
		dirs: {
			src: 'src',
			dest: 'public',
			css_build_folder: '/assets/css/',
			js_build_folder: '/assets/js/',
			img_build_folder: '/assets/img/'
		}
	});

	// Load config-less tasks
	grunt.loadNpmTasks('grunt-newer');

	// Load per-task config from separate files.
	grunt.loadTasks('grunt');

	// Default task(s)
	grunt.registerTask('default', '', [
		// do nothing.
	]);

	grunt.registerTask('styles', 'Do your styles.', [
		'sass:dist'
	]);

	grunt.registerTask('scripts', 'Do your scripts.', [
		'concat',
		'uglify'
	]);

	grunt.registerTask('images', 'Do your images.', [
		'imagemin:all'
	]);

	grunt.registerTask('dev', 'Rebuild everything.', [
		'sass:dev',
		'concat:dev',
		'images'
	]);

	grunt.registerTask('build', 'Rebuild everything.', [
		'styles',
		'scripts',
		'images'
	]);

};
