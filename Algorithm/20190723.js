//1. isPalindrome
var str = "ABCBA"
function isPalindrome(str) {
  var str1 = str.toLowerCase();
  var mid = (str.length - (str.length%2))/2 ;
    for (var i = 0; i <= mid; i++) {
      if (str1[mid-i] != str1[mid+i]) {
        return false;
      }
    }
    return true;
}
console.log(isPalindrome(str));

//2. isSuper
function isSuper(string){
  // var countA = 0;
  var lower = string.toLowerCase();
  var arrVoy = [0,0,0,0,0];
  for (var i = 0; i < string.length; i++) {
    if (lower[i] == "a") {
      arrVoy[0] = 1;
    } else if (lower[i] == "e") {
      arrVoy[1] = 1;
    } else if (lower[i] == "i") {
      arrVoy[2] = 1;
    } else if (lower[i] == "o") {
      arrVoy[3] = 1;
    } else if (lower[i] == "u") {
      arrVoy[4] = 1;
    } 
  }
  var sum = arrVoy[0] + arrVoy[1] + 
      arrVoy[2] + arrVoy[3] +arrVoy[4];
  // console.log(sum);
  if (sum < 5) {
    return false;
  } 
  return true;
}
console.log(isSuper("sequioa"));

function isSuper2(str) {
  str = str.toLowerCase();
  var cnt = {a:0, e:0, i:0, o:0, u:0};
  for (ch of str){
    if(ch in cnt) {
      cnt[ch]++;
    }
  }
  // console.log(cnt);
  for (c in cnt) {
    if (cnt[c] == 0) {
      return false;
    }
  }
  return true;
}
console.log(isSuper2("sequioaa"));






