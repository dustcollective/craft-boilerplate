module.exports = function(grunt) {

	grunt.config('favicons', {
		favicons: {
			options: {
				html : 'craft/templates/_partials/favicons.html',
				HTMLPrefix : '{{ craft.config.rootUrl }}/assets/img/favicons/'
			},
			src: 'src/assets/img/favicon.png',
			dest: 'public/assets/img/favicons/'
		}
	});

	grunt.loadNpmTasks('grunt-favicons');

};
