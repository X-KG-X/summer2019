//1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function Sigma(num){
	var sum = 0;
	for (var i = 1; i <= num; i++) {
		sum += i;
	}
	return (sum);
}
console.log(Sigma(3));

//2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function Factorial(num) {

	var res = 1;
	for (var i = 1; i <= num; i++) {
		res *= i;
	}
	return (res)
}
console.log(Factorial(5));

//using recursion
function Factorial2(num) {
	if (num == 1) {
		return 1;
	}

	num = num * Factorial2(num - 1);
	return (num);
}
console.log(Factorial2(5));

//3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function Fibonacci(num) {
	if (num == 0) {
		return (0);
	} else if (num == 1) {
		return (1);
	}
	return (Fibonacci(num-1) + Fibonacci(num-2));
}
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(4));
console.log(Fibonacci(5));
console.log(Fibonacci(6));
console.log(Fibonacci(7));

//4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function SecondToLast(arr) {
	if (arr.length < 2) {
		return null;
	}
	return (arr[arr.length-2]);
}
console.log(SecondToLast([42, true, 4, "Liam", 7]));


//5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function NthToLast(arr, n) {
	if (arr.length < n) {
		return null;
	}
	return (arr[arr.length-n]);
}
console.log(NthToLast([5,2,3,6,4,9,7],3));

//6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function SecondLargest(arr) {
	if (arr.length < 2) {
		return null;
	}

	var largest;
	var largest2;
	if (arr[0] > arr[1]) {
		largest = arr[0];
		largest2 = arr[1];
	} else {
		largest = arr[1];
		largest2 = arr[0];
	}
	if (arr.length > 2) {
		for (var i = 2; i < arr.length; i++) {
			var x = arr[i];
			if (x > largest) {
			largest = x;
			largest2 = largest;
			} else if (x > largest2) {
				largest2 = x;
			}
		}
	}
	return (largest2)
}
console.log(SecondLargest([42,1,4,3.14,7]));

//7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function DoubleTrouble(arr) {
	// var doubleArr = [];
	var n = arr.length;
	for (var i = n-1 ; i >= 0; i--) {
		arr[2*i + 1] = arr[i];
		arr[2*i] = arr[i];
	}
}
var arr1 = [4, "Ulysses", 42, false];
DoubleTrouble(arr1);
console.log(arr1);



































