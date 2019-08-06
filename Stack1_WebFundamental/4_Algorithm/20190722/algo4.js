// Given an array and a value Y, count and print the number of array values greater than Y.
function cntGreaterThan(arr, y) {
	var cnt = 0;
	for (var x of arr) {
		if (x > y) {
			cnt++;
		}
	}
	console.log("number of values greater than :" + y + " is : " + cnt);
}
cntGreaterThan([3,5,2,5,6],4);


// Given an array, print the max, min and average values for that array.
function getStats(arr) {
	if (arr.length < 1) {
		return false;
	}
	var sum = 0;
	var max = arr[0];
	var min = arr[0];

	for (var x of arr) {
		if (x > max) {
			max = x;
		} else if (x < min) {
			min = x;
		}
		sum+=x;
	}
	console.log("max : " + max);
	console.log("min: " + min);
	console.log("avg: " + sum/arr.length);

}
getStats([3,2,5,4])


// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNeg(arr) {
	var newArr = [];

	for (var x of arr) {
		if (x < 0) {
			newArr.push("Dojo");
		} else {
			newArr.push(x);
		}
	}
	return (newArr);
}
console.log(replaceNeg([1,2,-3,-5,5]))



// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr, start, end) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (i < start || i > end) {
			newArr.push(arr[i]);
		}
	}
	return (newArr);
}
console.log(removeVals([20,30,40,50,60,70],2,4))






















