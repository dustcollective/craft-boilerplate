module.exports = function(grunt) {

	grunt.config('sass', {
		dist: {
			options: {
				outputStyle: 'compressed',
				sourceMap: false
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.css': '<%= dirs.src %>/assets/scss/main.scss'
			}
		},
		dev: {
			options: {
				outputStyle: 'expanded',
				sourceMap: true
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.css': '<%= dirs.src %>/assets/scss/main.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');

};
