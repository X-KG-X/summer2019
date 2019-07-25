// console.log("dfd");

$(document).ready(function() {
	loadImgs();
	$('.koalaimg').click(function() {
		// console.log("clicked");
		$(this).hide();
	})

	$('#btn_restore').click(function() {
		location.reload();
		// restore();
	})

	function loadImgs() {

		var grid = [
					[1,1,1,1],
					[1,1,1,1]
					];
		var output = "";
		for (var i = 0; i < grid.length; i++) {
			for (var j = 0; j < grid[i].length; j++) {
				output += "<img class='koalaimg' alt='koala img' src='koala.jpg'>";
			}
		}
		// console.log(output);

		$('#images').html(output);
	}

})
