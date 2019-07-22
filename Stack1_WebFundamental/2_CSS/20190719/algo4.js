//1.
function f1(arr, y){

	var cnt = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > y) {
			cnt++;
			console.log(arr[i])
		}
	}
	console.log("cnt : " + cnt);
}

var cnt1 = f1([3,6,2,4,8], 5);

//2.
function f2(arr){
	if (arr.length == 0){
		return false;
	} 
	var max = arr[0];
	var min = arr[0];
	var sum = 0;
	for (var i = 0 ; i < arr.length; i++){
		var x = arr[i];

		if (x > max) {
			max = x;
		}
		if (x < min) {
			min = x;
		}
		sum+=x;
	}
	var avg = sum / arr.length;
	console.log("max : " + max);
	console.log("min : " + min);
	console.log("avg : " + avg);
}
f2([1,2,3,4,5,6,7,8]);


//3.
function f3(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 'Dojo';
		}
	}
}

var arr1 = [3,1,2,-3,2,4,-5];
f3(arr1)
console.log(arr1);

//4. 
function f4(arr, start, end){

	for (var i = start; i < end; i++) {
		// console.log(i, i+(end-start))
		arr[i] = arr[i+(end-start)+1];
	}
	arr.length = arr.length - (end-start+1);
}
var arr1 = [3,1,2,-3,2,4,-5];
f4(arr1,2,4);
console.log(arr1);













