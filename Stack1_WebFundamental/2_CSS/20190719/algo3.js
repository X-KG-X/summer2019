
/*---------
 PART 1
 ---------*/
//1.
function a(x,y){
  return 5;
}
console.log(a(5,5))

/*Expected------------
5
---------------------*/

//2.
function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));

/*Expected------------
[2,2,5]
[2,2,5]
[6,8,5]
[6,8,5]
---------------------*/

//3.
function a(x){
   z = [];
   z.push(x);
   z.pop();
   z.push(x);
   z.push(x);
   return z;
}
y = a(2);
y.push(5);
console.log(y);
/*Expected------------
[2,2,5]
---------------------*/

//4.
function a(x){
   if(x[0] < x[1]) {
      return true;
   }
   else {
      return false;
   }
}
b = a([2,3,4,5])
console.log(b);
/*Expected------------
true
---------------------*/

//5.
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = 'Coding';
      }
    }
    return x;
}
console.log(a([1,2,3,4]))
/*Expected------------
["Coding","Coding","Coding","Coding"]
---------------------*/

//6.
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = 'Coding';
      }
      else if(x[i] < 0){
           x[i] = 'Dojo';
      }
    }
    return x;
}
console.log(a([5,7,-1,4]))
/*Expected------------
[5,"Coding","Dojo",4]
---------------------*/

//7.
function a(x){
   if(x[0] > x[1]) {
    return x[1];
   }
   return 10;
}
b = a([5,10])
console.log(b);
/*Expected------------
10
---------------------*/

//8.
function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
/*Expected------------
no return
---------------------*/


/*---------
 PART 2
 ---------*/
//1.
function printAverage(x){
   sum = 0;
   // your code here
   if (x.length == 0) {
   	return 0;
   }
   for (var i = 0; i < x.length; i++) {
   	sum+=x[i];
   }
   return (sum/x.length)
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5

//2.
function returnOddArray(){
   // your code here
   var oddArr = [];
   for (var i = 1; i <= 255; i++) {
   	if (i%2 == 1) {
   		oddArr.push(i);
   	}
   }
   return oddArr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]
/*Expected------------
---------------------*/

//3.
function squareValue(x){
   // your code here
   
   for (var i = 0 ; i < x.length; i++) {
   	x[i] = x[i] * x[i];
   }
   return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]
/*Expected------------

---------------------*/






























