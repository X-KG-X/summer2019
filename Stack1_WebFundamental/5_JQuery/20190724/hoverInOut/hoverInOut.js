$(document).ready(function() {
	// console.log('ready');

	function loadImg() {
		var grid = [[1,1],[1,1],[1,1],[1,1]];
		var imgs = [[1,2],[2,1],[3,4],[4,3]];
		var output = "";
		for (var i = 0; i < grid.length; i++) {
			output += "<div class='row'>";
			for (var j = 0; j < grid[i].length; j++) {
				var src = 'koala' + imgs[i][j] + ".jpg";
				output += "<img src=" + src + " alt='' class='img'>"
				// output += "<div class='imgdiv img" + (j+1) + "'></div>"
			}
			output += "</div>";
		}
		// console.log(output);
		$('#imageboard').html(output);
	};
	loadImg();


	var mirr = {1:2, 2:1, 3:4, 4:3};

	//hover
	$('.img').hover(function(){
		// console.log('hover in');
		var picNum = $(this).attr('src').match(/\d+/)[0];
		var newSrc = $(this).attr('src').replace(picNum, mirr[picNum]);
		$(this).attr('src', newSrc);
	}, function(){
		var picNum = $(this).attr('src').match(/\d+/)[0];
		var newSrc = $(this).attr('src').replace(picNum, mirr[picNum]);
		$(this).attr('src', newSrc);
	})

})