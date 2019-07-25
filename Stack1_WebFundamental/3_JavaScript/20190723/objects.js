var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)

var paragraphs = document.getElementByTagName('p');
console.log(paragraphs);
for (var i = 0 ; i < paragraphs.length; i++) {
	console.log(paragraphs[i].addEventListener);
	paragraphas[i].addEventListener('click', function(){
		this.style.background='blue';
	})
}