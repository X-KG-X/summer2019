$(document).ready(function() {
	console.log('document is ready');

	//click
	$('#btn_addclass').click(function() {
		$('#p_addclass').css('background-color', 'red');
	})

	//hide & show
	$('#btn_hide').click(function() {
		// console.log($('#btn_hide').text() );
		if ($('#btn_hide').text() === 'Hide') {
			$('#p_hide').hide();
			$('#btn_hide').text('Unhide');
		} else if ($('#btn_hide').text() === 'Unhide') {
			$('#p_hide').show();
			$('#btn_hide').text('Hide');
		}
	})

	//toggle
	$('#btn_toggle').click(function() {
		$('#p_toggle').toggle();
	})

	//slideDown & slideUp & slideToggle
	$('#btn_slidetoggle').click(function() {
		if ($('.st').is(":hidden")) {

			// $('.st').slideDown();
			// $('.st').slideUp();
			$('.st').slideToggle();
		} else {
			console.log("not hidden");
			$('.st').hide();
		}
		
	})

	// fadeIn and fadeOut
	$('#btn_fadein').click(function() {
		if ($('#p_fadein').is(":hidden")) {
			$('#p_fadein').fadeIn();
		} else {
			$('#p_fadein').fadeOut();
		}
	})

	//.addClass
	$('#btn_addclass').click(function() {
		$(this).addClass('btn_blue');
	})

	//before and after
	// $('#btn_append').click(function() {
	// 	$('#p_append').before("<p>This comes before</p>");
	// 	$('#p_append').after("<p>This comes after</p>");
	// })

	//append
	// $('#btn_append').click(function() {
	// 	$('#p_append').append("<p>Appending this</p>");
	// })

	//html
	$('#btn_append').click(function() {
		$('#p_append').html('Replacing paragraph');
	})

	//attr
	$('#btn_append').click(function() {
		$('#p_append').html('Attr :' + $('btn_append').attr('background-color'));
	})

	$('#btn_append').click(function() {
		console.log($('input').val());
		console.log($('input').val('change value'));
		$('#p_append').text('<p>text</p>');
	})





})





















