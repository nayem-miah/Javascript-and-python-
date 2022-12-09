// //--------------------reduce method -----------------------
// // it can work with two value

// var arr = [2,5,36,77,54]

// var sum = arr.reduce(function(prev, curr){
//        return prev + curr
// })

// console.log(sum)




// //-------------------reduce maximum value--------------------


// var arr = [2,5,36,77,54]

// var max = arr.reduce(function(prev, curr){
//        return Math.max(prev, curr)
// })

// console.log(max)





// //-------------------------find method------------------
// // it will give us value
// var arr = [2,4,3,5,6,8,7,9]

// var result = arr.find(function(value, index){
//      return value === 4
// })

// console.log(result)


// //-----------------------findIndex method-------------------
// // it will give us just index number not value
// var arr = [2,4,3,5,6,8,7,9]

// var result = arr.findIndex(function(value){
//      return value === 5
// })

// console.log(result)




// //----------------------------sort method---------------------
// // to maintain sequence 


// var arr = [2,4,9,4,2,6,8,7,1]

// var test = arr.sort()
// console.log(test)




// var arr1 = [2,-5,-9, -1, 4,9,4,2,6,8,7,1]

// var test = arr1.sort(function(b,c){
               
//    if (b>c){  // to make perfectly perfect

//      return 1

//    }
//    else if (b<c){
//       return -1
//    } else{
//         return 0
//    }
// })
// console.log(test)





//-----------------------every method--------------------
// it will return booliion value true or false
// to check all are even or not . or all are positive or not
// if all value is true it will say true 

// checking even or not
// var arr = [2,5,3,534,6,3,6,8]

// var test = arr.every(function(value){
//      return value % 2 === 0
// })
// console.log(test)




// // checking positive or not
// var arr2 = [0,2,5,3,534,6,3,6,8]

// var test2 = arr2.every(function(value){
//      return value >= 0 
// })

// console.log(test2)



//-------------------------------some method-----------------
// it will return boolion value
// if one value is true it will say true

// var arr = [2,8,3,34,6,10,6,8]

// var test = arr.some(function(value){
//      return value % 2 === 1
// })
// console.log(test)


//---------------------------recursive function---------
// it works like loop 

// function sayHi(n){
//      if (n===0){
//            return
//      }
//      console.log('Hi, Im calling')
//      sayHi(n-1)
// }
// sayHi(10)




//----------------------------function composition-----------------
// output of a function acts as input of another's function



// function pri(inp){
//       console.log(inp)
// }


// function multiply(n){
//       return n*5
// }

// function add(a,b){
//       return a+b
// }


// pri(multiply(add(3,2)))