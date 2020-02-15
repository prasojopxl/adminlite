$(document).ready(function () {
    new WOW().init();
	$('#fullpage').fullpage({
		anchors: ['firstPage','dua','tiga','empat','lima'],
		autoScrolling: false,
		fitToSection: false,
	});
    
});

