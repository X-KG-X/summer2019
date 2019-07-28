/*-----------------
 20190724.
 String
- 1. validParens(string) => boolean
	ex) '()' -> true, '())' -> false, '())()' -> false
- 2. validBrackets 
	using {}, [], (), ..
------------------*/

//1. validParens(string) => boolean
function ValidParens(str, openToClose, closeToOpen) {

	var openArr = [];
	for (ch of str) {
		if (openToClose[ch]) { // if ch exists as a key in openToClose
			openArr.push(ch);
		} else if (closeToOpen[ch]) {// if ch exists as a key in closeToOpen
			if (openArr.pop() !== closeToOpen[ch]) { //check if last element in openArr and ch are matching pair
				return false;
			}
		}
	}
	return (openArr.length === 0); // if openArr is not empty -> false
}

var openToClose = {'(' : ')'};
var closeToOpen = {')' : '('};

//test cases
console.log(ValidParens('()', openToClose, closeToOpen));
console.log(ValidParens('(()', openToClose, closeToOpen));
console.log(ValidParens('(', openToClose, closeToOpen));
console.log(ValidParens(')', openToClose, closeToOpen));
console.log(ValidParens('', openToClose, closeToOpen));
console.log(ValidParens('(()(2))', openToClose, closeToOpen));
console.log(ValidParens('(()())', openToClose, closeToOpen));

//2. validBrackets
// can just use ValidParens with different openToClose/closeToOpen
function ValidBrackets(str, openToClose, closeToOpen) {
	return (ValidParens(str, openToClose, closeToOpen));
}

var openToClose = {'(' : ')', '{' : '}', '[' : ']'};
var closeToOpen = {')' : '(', '}': '{', ']' : '['};

//test cases
console.log(ValidBrackets('({})', openToClose, closeToOpen));
console.log(ValidBrackets('({)}', openToClose, closeToOpen));
console.log(ValidBrackets('({23})', openToClose, closeToOpen));
console.log(ValidBrackets('({[]})', openToClose, closeToOpen));
console.log(ValidBrackets('({[})]', openToClose, closeToOpen));



