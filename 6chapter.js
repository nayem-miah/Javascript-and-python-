// 1 functional programming
// 2 pure functional
// 3 higher order functions
// 4 higher order functions
// 5 functions callback

//-----------------functional programming-----------------

//there are three terms in functional program
//     1: pure function
//     2: first class function
//     3: higher order functions



//----------------- pure functional -----------------

// it returns same result if arguments are same
// it does not have site efect


// function multi(n){
//     return n*n
// }

// console.log(multi(3))
// console.log(multi(3))
// console.log(multi(3))

// here same argument same result
// and afect to others codes




//---------------------higher order functions----------------


// // Higher-order function that takes a function as an argument
// function higherOrderFunction(func, value) {
//     return func(value);
//   }
  
//   // Function to be passed as an argument to the higher-order function
// function square(x) {
//     return x * x;
//   }
  
//   // Passing 'square' function as an argument to the higher-order function
//   const result = higherOrderFunction(square, 5);
//   console.log(result); // Output: 25
  
  
  
//--------------------- functions callback ----------------



// function test (a,b,cb){
//     var c = a+b
//     var d = a-b
//     return cb(c, d)

// }

// function sum (a, b){
//     return a+b
// }

// var result = test(5,7,sum)
// console.log(result)


// var result = test(5,7, function(s,g){  // here this function is called Anonymous function. it is used here as a argument of cb perameter of test function
//     return s-g
// })
// console.log(result)