// jQuery lecture note

//JQuery = JavaScript library
// To get started with jQuery, 
// go to google's hosted jQuery library and copy the link from there.
//  This is the address we will tell our browser to import the library from.
//   Next, in the <head> portion of your HTML document, 
//   include the link you just copied:

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

// Notice that what we are doing is adding a 'source' attribute to our JavaScript.
//  We are effectively telling our page: 
// "take all the code hosted at this URL and allow me to use it on this page."


// Effects (functions to do some cool animation effects)
// .hide()
// .show()
// .toggle()
// .slideUp() - not available in the slim version
// .slideDown() - not available in the slim version
// .slideToggle() - not available in the slim version
// .fadeOut() - not available in the slim version
// .fadeIn() - not available in the slim version
// CSS (adding or removing a class for any HTML element/DOM)
// .addClass()
// .removeClass()
// .css()
// Manipulation (retrieving or setting value or text in any HTML element)
// .after()
// .append()
// .prepend()
// .attr()
// .before()
// .html()
// .text()
// .val()
// Events (functions to handle an event)
// .click()
// .hover()

// javascript interpreter (behind the scence) update html/css (dom). and browser renders the
// updated files.

//jQuery (https://getbootstrap.com/docs/4.0/examples/pricing/)
// modify Console.
$('h1, h4, li, p').hide() // grab h1, h4, .. then hide them.

<-> different
$('h1 h4 li p').hide() // nested. p in li in h4 in h1


//show
$('h1, h4, li, p').show()

//
$(p.sp)  
	//:  p that has a class special. ex)<p class="sp"></p>
$(p .sp) 
	//:  class special inside p tag. ex) <p><div class="sp'></div</p>"


$('h1').addClass('bg-primary') // add class to h1
$('h1').removeClass('bg-primary')

$('h1').addClass('bg-danger') 
$('h1').removeClass('bg-danger')

$('h1').text('Hello Dojo') // change text

$('li').text('Coding');

//text <-> html
$('li').text('<b>Coding</b>'); //appears exactly this text including <>. text: put exactly what I typed
$('li').html('<b>Coding</b>'); //<b> not on page
$('li').html('<p>Coding</p><p>Dojo</p>') // inserts two paragraphs. replace content inside 'li'

//want to add something after h1
$('h1').after('Michael') // -> not inside
$('h1').before('Michael')

$('h1').append('Choi') //inside
$('h1').prepend('Choi')

//want to update text in placeholde of email
//https://getbootstrap.com/docs/4.0/examples/checkout
$('#email').attr('placeholder') //grab by email, attribute: placeholder -> returns value

//reference: api.jquery.com

$('h1').addClass('bg-primary');
$('h1').removeClass('bg-primary');

//want to change features when clicked
$('h1').click(function() {
	$('p').toggle(); //shown->hide, hide->shown
}); // pass function in () => do fcn when h1 is clicked


$('li').click(function() {$('li').hide();});
$('li').show();

$('li').click(function() { $(this).addClass('btn btn-primary');}); // this : the element that triggered the fcn

$('h4').click(function() {$(this).hide();});

// call parent (li clicked -> do something to ul)
$('li').click(function() { console.log($(this).parent().parent()); })

$('li').click(function() { 
	console.log($(this).parent().parent()); 
	$(this).parent().parent().addClass('bg-primary');
})























