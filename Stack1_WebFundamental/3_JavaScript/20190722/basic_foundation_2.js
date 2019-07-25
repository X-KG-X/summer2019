// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function f1(arr) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > 0) {
			arr[i] = "big"
		}
	}
}
var arr1 = [-1,3,5,-5];
f1(arr1);
console.log(arr1);

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function f2(arr) {

	if (arr.length == 0) {
		return false;
	}
	var min = arr[0];
	var max = arr[0];

	for (var x of arr) {
		if (x > max) {
			max = x;
		} else if (x < min) {
			min = x;
		}
	}
	console.log("min : " + min);
	return (max);
}

console.log("max : " + f2([-1,3,5,-5]))

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function f3(arr) {

	console.log(arr[arr.length-2]);
	for (var x of arr) {
		if (x % 2 == 1) {
			return (x);
		}
	}
	return (false);
}

console.log(f3([0,2,3,7,6]))

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doubleArr(arr) {
	var newArr = []
	for (var i = 0 ; i < arr.length; i++) {
		newArr[i] = arr[i] * 2
	}
	return (newArr)
}
console.log(doubleArr([1,2,3]))

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPos(arr) {

	var cnt = 0;
	for (var x of arr) {
		if (x > 0) {
			cnt++;
		}
	}
	arr[arr.length-1] = cnt;
	return (arr)
}
var arr =[-1,1,1,1];
countPos(arr);
console.log(arr)


// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function printEvenOrOdd(arr) {

	var cntOdd = 0;
	var cntEven = 0;
	for (var x of arr) {
		console.log(x);
		if (x % 2 == 0 ) {
			cntEven++;
			if (cntEven >= 3) {
				console.log("Three Evens")
			}

			cntOdd = 0;
		}
		else { // odd
			cntOdd++;
			if (cntOdd >= 3) {
				console.log("Three Odds")
			}	

			cntEven = 0;
		}
	}
}
printEvenOrOdd([1,34,2,3,4,12,3,3,3,5,4,4,6,5,6,7,8,6,4]);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementSeconds(arr) {

	for (var i = 0; i < arr.length; i++) {
		if (i%2 == 1) {
			arr[i]+=1;
		}
	}
	console.log(arr);
	return (arr);
}
console.log(incrementSeconds([1,2,3,4,5,6]));

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function prevLen(arr) {
	for (var i = arr.length-1; i > 0; i--) {
		arr[i] = arr[i-1].length;
	}
	return (arr);
}
console.log(prevLen(["hello", "dojo", "awesome"]))

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function add7(arr) {
	var newArr = [];
	for (var x of arr) {
    // console.log(x);
		newArr.push(x+7);
	}
	return newArr;
}
console.log(add7([1,2,3]));

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArr(arr) {

	for (var i = 0 ; i < arr.length/2; i++) {
		var temp = arr[i];
		arr[i] =  arr[arr.length-(i+1)];
		arr[arr.length-(i+1)] = temp;

	}
	return (arr);
}
console.log(reverseArr([3,1,6,4,2,0]))

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function makeNegative(arr) {
	var negArr = [];

	for (var x of arr) {
		if (x < 0) {
			negArr.push(x);
		} else {
			negArr.push(x*-1);
		}
	}
	return (negArr);
}
console.log(makeNegative([1,-3,-5]))

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function printYummy(arr) {
	var cntFood = 0;
	for (var x of arr) {
		if (x === "food") {
			console.log("yummy");
			cntFood++;
		}
	}
	if (cntFood == 0) {
		console.log("I'm hungry")
	}
}
console.log(printYummy(["food", '3', '2','1']))
console.log(printYummy(['342,','34','3']))

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {

	for (var i = 0 ; i < arr.length/2; i++) {
		if (i %2 == 0) {
			var temp = arr[arr.length - (i+1)];
			arr[arr.length - (i+1)] = arr[i];
			arr[i] = temp;
		}
	}
}
arr1 = [true,42,"Ada",2,"pizza"];
swapTowardCenter(arr1);
console.log(arr1);

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr, num) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * 3
	}
	return (arr);
}
console.log(scaleArray([1,2,3],3))





































