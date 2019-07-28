//accumulator(num, op)
// function accumulator(num, op) {
//   var operators = {'+' : function(op1, op2) {
//                             return (op1+op2);
//                           },
//                    '-' : function(op1, op2) {
//                             return (op1-op2);
//                           },
//                    '*' : function(op1, op2) {
//                             return (op1 * op2);
//                                       },
//                   '/' : function (op1, op2) {
//                     return op1/op2;
//                               }
//                   } 
//   var fcn = operators[op];
//   var result = num;

//   for (var i = num-1; i > 0; i--) {
//     result = fcn(result, i);
//   }
//   return result
// }

function accumulator(num, op) {
  var operators = {'+':add, '-':subtract, '*':multiply, '/':divide}
  return (operators[op](num))
}
function add(num) {
  if (num == 1) {
    return (1);
  }
  return (num += add(num-1));
}
function subtract(num) {
  var res = num;
  num--;
  while (num > 0) {
    res -= num;
    num--;
  }
  return (res)
}
function multiply(num) {
  if (num == 1) {
    return (1);
  }
  return (num *= multiply(num-1));
}
function divide(num) {
  var res = num;
  num--;
  while (num > 0) {
    res /= num;
    num--;
  }
  return (res);
}

console.log(accumulator(5, '+'));
console.log(accumulator(5, '-'));
console.log(accumulator(5, '*'));
console.log(accumulator(5, '/'));
// console.log(5/4/3/2/1);
// console.log(5-4-3-2-1);

function fib(num) {
  var arr = [1,1];
  for (var i = 2 ; i <= num; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return (arr[num]);
}
// function fib(num) {
//   var prev2 = 1;
//   var prev1 = 1;
//   if (num <= 2) {
//     return (1);
//   }
//   var cur = prev1 + prev2;
//   num--;
//   while (num > 0) {
    
//     cur = prev1 + prev2;
//     prev2 = prev1;
//     prev1 = cur;
//     num--;
//   }
//   return (cur);
// }
//test cases
console.log(fib(3));
console.log(fib(5));
console.log(fib(8));












