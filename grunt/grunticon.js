module.exports = function(grunt) {

	grunt.config('grunticon', {
		default: {
			files: [{
				expand: true,
				cwd: '<%= dirs.src %><%= dirs.img_build_folder %>icons',
				src: ['*.svg'],
				dest: '<%= dirs.dest %><%= dirs.img_build_folder %>icons'
	        }],
	        options: {
				datasvgcss: 'icons.data.svg.scss',
				datapngcss: 'icons.data.png.scss',
				urlpngcss: 'icons.fallback.scss',
				cssprefix: '.icon--',
				template: 'grunt/grunticon-css.hbs'
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-grunticon');

};
