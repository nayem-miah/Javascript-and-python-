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
// if function is used as argoment its called high order function

// function add(a,b){
//     return a+b
// }


// function manipulate(a,b,func){
//    var c = a+b
//    var d = a-b

//    function multiply(){
//      var m = func (a,b)
//      return c*d*m
//    }

//    return multiply

// }

// var multi = manipulate(3, 4, add)
// console.log(multi())


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