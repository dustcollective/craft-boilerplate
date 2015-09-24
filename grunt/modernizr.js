module.exports = function(grunt) {

	grunt.config('modernizr', {
		dist: {
			"devFile" : "bower_components/modernizr/modernizr.js",
			"outputFile" : "<%= dirs.dest %><%= dirs.js_build_folder %>vendor/modernizr-custom.js",
			"extra" : {
				"shiv" : true,
				"printshiv" : false,
				"load" : false,
				"mq" : false,
				"cssclasses" : true
			},
			// true will attempt to match user-contributed tests
			"matchCommunityTests" : true
		}
	});

	grunt.loadNpmTasks('grunt-modernizr');

};
