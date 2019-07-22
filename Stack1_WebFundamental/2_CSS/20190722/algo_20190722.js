/*
2019/7/22
String
  : immutable
  : indexed
ex)
  x = "trash panda"
  x[0] = "R";
  => x will return "trash panda"
  
ex)
  var x = "hello";
  x+='Bob' => this destroys the original string and store the new String
  => x returns 'hello Bob'
  
Algo :
  1. RemoveSpaces(string) => return new String
  2. Acronym(string) => new string 
    - edge case '-'
*/

//1.RemoveSpaces(string) : remove spaces from string
var myStr = "Coding Dojo Seattle";

function RemoveSpaces(str){
  var newStr = str.split(" ").join("");
  return (newStr)  
  // return (str.split(" ").join(""));
}

console.log(RemoveSpaces(myStr))

//2.Acronym(string) : returns acronym of a given String
var myStr2 = "Coding-Dojo, Seattle";

function Acronym(str){
  //1. for loop
  // var strArr = str.replace("-", " ").split(" ");
  // var accr = ""
  // for (var word of strArr) {
  //   accr += word[0].toUpperCase();
  // }
  // return (accr);
  
  //2. regex
  var strArr = str.split(/[ -]/);
  var accr = ""
  for (var word of strArr){
    accr += word[0].toUpperCase();
  }
  return accr;
}
console.log(Acronym(myStr2))















