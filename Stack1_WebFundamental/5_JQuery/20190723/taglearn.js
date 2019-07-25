
$(document).ready(function() {
	console.log($('h1').text());

	//1. hide() //20. click()
	$('#button1').click(function(){
		$('p').hide();
	});

	//2. show()
	$('#button2').click(function(){
		$('p').show();
	});

	//3. toggle()
	$('h1').hover(function(){
		$('p').toggle();
	})

	//4. slideUp()

	//5. slideDown()

	//6. slideToggle()

	//7. fadeOut()

	//8. fadeIn()


	//9. addClass()

	//10. removeClass()

	//11. css()

	//12. after()

	//13. append()

	//14. prepend()

	//15. attr()

	//16. before()

	//17. html()

	//18. text()

	//19. val()

	

	//21. on()

	//22. live() - deprecated?

	//23. hover()
});
