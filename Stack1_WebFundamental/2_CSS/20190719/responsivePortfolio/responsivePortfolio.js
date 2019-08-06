// console.log("test");
$(document).ready(function() {
	// console.log("test");
	$(window).resize(function() {
		console.log($('.image').height());
		$('.abouttext').height($('.image').height());
	})
	
});
