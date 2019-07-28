//1.print 1-255
function print(num) {
	for (var i = 1; i < num; i++) {
		console.log(i);
	}
}
print(255);

//2. print sum 0-255
function printSum(num) {
	var sum = 0;
	for (var i = 0; i < num; i++) {
		console.log(i + ", sum: " + sum);
	}
}
printSum(255);

//3. findAndPrintMax
function findAndPrintMax(arr) {
	if (arr.length < 1) {
		return (false);
	}
	var max = arr[0];
	for (var x of arr) {
		if (x > max) {
			max = x;
		}
	}
	return (max);
}
console.log(findAndPrintMax([2,3,41,2]));

//4. arrayWithOdds
function arrayWithOdds(num) {
	var arr = [];
	for (var i = 1; i <= num; i++) {
		if (i%2 == 1) {
			arr.push(i);
		}
	}
	return (arr)
}
console.log(arrayWithOdds(255));


//5. greaterThanY
function greaterThanY(arr, y) {
	var cnt = 0;
	for (var x of arr) {
		if (x > y) {
			cnt++;
		}
	}
	console.log(cnt);
	return (cnt);
}
console.log(greaterThanY([3,2,1,5,6,2],2))

//6. max, min, avg
function getStats(arr) {
	if (arr.length < 1) {
		return false;
	}
	var min = arr[0];
	var max = arr[0];
	var sum = 0;
	for (var x of arr) {
		if (x > max) {
			max = x;
		} else if (x < min) {
			min = x;
		}
		sum += x;
	}
	return ([max, min, sum/arr.length]);
}
console.log(getStats([1,2,3,4]))

//7. swap string for array negative values
function replaceNeg(arr, str) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = str
		}
	}
	return (arr);
}
console.log(replaceNeg([1,2,3,-4,3], 'Dojo'))

//8. printOdds1-255
function printOdds(num) {
	for (var i = 1 ; i <= num; i++) {
		if (i%2 == 1) {
			console.log(i)
		}
	}
}

printOdds(255);

//9. iterate and print array
function iterAndPrint(arr) {
	for (var x of arr) {
		console.log(x)
	}
}
iterAndPrint([3,4,1]);


//10. get and print avg
function getAvg(arr) {
	if (arr.length < 1) {
		return false;
	}
	var sum = 0;
	for (var x of arr) {
		sum += x;
	}
	var avg = sum / arr.length;
	console.log(avg);
	return avg;
}
getAvg([3,4,5]);

//11. square the values
function square(arr) {
	for (var i = 0 ; i < arr.length; i ++) {
		arr[i] = arr[i] * arr[i];
	}
	return (arr);
}
console.log(square([1,2,3]));


//12. zero out negative numbers
function setNegZero(arr) {
	for (var i =0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}
console.log(setNegZero([3,2,7,-2,3,-3]));


//13. shift array values
function shiftArr(arr) {
	for (var i = 0; i < arr.length-1; i++) {
		arr[i] = arr[i+1];
	}
	arr[arr.length-1] = 0;
	return (arr);
}
console.log(shiftArr([3,4,2,2]));
















































