module.exports = function(grunt) {

	grunt.config('modernizr', {
		dist: {
			"devFile" : "bower_components/modernizr/modernizr.js",
			"dest" : "<%= dirs.dest %><%= dirs.js_build_folder %>vendor/modernizr-custom.js",
			"extra" : {
				"shiv" : true,
				"printshiv" : false,
				"load" : false,
				"mq" : false,
				"cssclasses" : true
			},
			// true will attempt to match user-contributed tests
			"matchCommunityTests" : true,

			"parseFiles" : true,
			"files" : {
				"src" : ['src/assets/**/*.{js,css,scss}']
			}
		}
	});

	grunt.loadNpmTasks('grunt-modernizr');

};
