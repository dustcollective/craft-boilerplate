module.exports = function(grunt) {

	grunt.config('criticalcss', {
		default: {
			options: {
				url: 'http://example.com',
				filename: 'public/assets/css/main.css',
				width: 1040,
				height: 900,
				outputfile: 'craft/templates/_partials/inline/critical.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-criticalcss');

};
