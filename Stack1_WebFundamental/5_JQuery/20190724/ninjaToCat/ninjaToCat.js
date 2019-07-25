
$(document).ready(function() {
	console.log('ready');

	$(".image").click(function() {
		// console.log($(this).attr('src'));
		// $(this).
		if ($(this).attr('char') == 'ninja') {

			// console.log($(this).attr('char'));
			$(this).attr('char','cat');
			var src = $(this).attr('src');
			// console.log(src.replace('ninja', 'cat'));
			$(this).attr('src', src.replace('ninja', 'cat'));

		} else if ($(this).attr('char') == 'cat') {
			
			$(this).attr('char','ninja');
			var src = $(this).attr('src');
			$(this).attr('src', src.replace('cat', 'ninja'));
		}

		// console.log(src);
		// $(this).attr('src', src);

	})
})