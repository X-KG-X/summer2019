// - reverseArray(array) -> array
// - coinChange(cents) => optimize. 112cents => {dollars:?, quarters"?, dimes:?, ?:?, ?:?}
// - clockHands(time) -> string. '9:05' -> angle from 12. (12-> 0 deg),..

//1
function reverseArray(arr) {
	var n = arr.length;
	for (var i = 0; i < n/2; i++) {
		var temp = arr[i];
		arr[i] = arr[n-(i+1)];
		arr[n-(i+1)] = temp;
	}
	return (arr);
}
console.log(reverseArray([4,3,21,2,5]));

//2
function coinChange(cents) {

	var dollars = Math.floor(cents / 100);
	cents = cents % 100;

	var quarters = Math.floor(cents / 25);
	cents = cents % 25;

	var dimes = Math.floor(cents / 10);
	cents = cents % 10;

	var nickles = Math.floor(cents / 5) ;
	cents = cents % 5;

	var pennies = cents;

	res = {dollars: dollars, quarters: quarters, dimes: dimes, nickles: nickles, pennies: pennies }
	return (res)
}

console.log(coinChange(321));

//3
function clockHands(time) {
  // console.log(time);

	var hrs = time.split(':')[0];
	var mins = time.split(':')[1];

	hrs = parseInt(hrs);
	mins = parseInt(mins);

	var res = {h_angle: 30 * hrs + (mins/60) * 30, m_angle: 6 * mins};
  return (res);
}

console.log(clockHands('9:30'));
console.log(clockHands('9:05'));