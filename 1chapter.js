// chap 1 = console.log,
// chap 2 = Naming convention
// chap 3 = data type
// chap 4 = data type conversion
// chap 5 = Arithmetic oparator
// chap 6 = assignment oparator
// chap 7 = comparison oparator
// chap 8 = ternary oparator
// chap 9 = for loop
// chap 10 = while loop
// chap 11 = DO while loop
// chap 12 = string comparison
// chap 13 = play with string




// node -v    to check node version
// npm -v     to check node management pack npm version



//------------------------1 varible and console.log()--------------------
//-----------------------------------------------------------------------

// console.log('Hello world')
// console.log('My name is Nayem Islam')
// console.log('Im recently learning Javascript newly')

// var names = 'Nayem Islma'
// var age = 23

// console.log(names + ' is only ' + age + ' years old guy')


//-------------------------2 Naming conventions----------------------

// var page_number = 'thi is called Snakecase. Snakecase: Words are delimited by an underscore. In Python Snakecase is popular'
// var pageNumber = 'thi is called Camelcase. Words are delimited by capital letters, except the initial word. In javascript Camelcase is popular.
// var PageNumber = 'thi is called Pascalcase. In javascript Camelcase is popular.


//-----------------------------3 data type--------------------------------

//there are two type of data type 1. primitive  2. object
// 1. primitive = number, String, Boolean, null, undefined
// 2. object = Array, Object, Function



//---------------------------4 data type conversion---------------

// var age = '23'
// var age2 = 10
// console.log(Number(age))  //string to number
// console.log((age2.toString()))  // number to string 

// a = 10
// console.log(typeof (a))     //to check type


//----------------------------5 Arithmetic oparator--------------------


// + - * /   

//  % = modulus operator

// var a = 10
// var b = 3
// console.log(a % b) 

//  ++ = increamental oparator.  there are two increamental oparator 1 is pre increamental another is post increamental
//  -- = decreamental oparator.  there are two decreamental oparator 1 is pre decreamental another is post decreamental




//------------------------------- 6 assignment oparator---------------------

// = +=  -=  *=  /=   %=

// a = 10
// b = 20

// a += b

// console.log(a)

// a = 10
// b = 20

// a -= b

// console.log(a)

// a = 10
// b = 20

// a *= b   

// console.log(a)

// a = 10
// b = 20

// a /= b

// console.log(a)

// a = 10
// b = 20

// a %= b

// console.log(a)



//----------------------------7 comparison oparator ----------------------


//  ==   !=   >    <  >=   <=   ===  !== 


// a = 20
// b = 25

// console.log(a == b)  // false
// console.log(a !== b)  // true
// console.log(a == b)  // false
// console.log(a > b)  // false
// console.log(a < b)  // true
// console.log(a >= b)  // False
// console.log(a <= b)  // true
// console.log(a < b)  // true

// a = '50'
// b = 50
// console.log(a == b) // it will say true though it is not cause  == can not identify data type
// console.log(a === b) // it will return False === can identify data type. If the value is equal it return True
// console.log(a !== b) // it will return True 



// ---------------------------   8 ternary oparator  ----------------------

// ternary structure  =  condition ? true side : false side

// var a = 20
// var b = 20

// var result = a===b ? 'matched' : 'not matched'

// console.log(result)


// ---------------------------------9 for loop  ----------------------


// for (var i=0; i<10; i=i+1){
//     console.log('This is Nayem here')
// }


// --------------------------------- 10 while loop  ----------------------

// var i = 1
// while(i<20){
//   console.log('this is while loop')
//   i++

// }

// var i = 0

// while (i < 10){
//     console.log('This is while..'+i)
//     i+=1
// }





// --------------------------------- 11 DO while loop  ----------------------

// var isRuning = false

// do {
//   console.log('Im runing')
// } while(isRuning)


// --------------------------------- 12 string comparison ----------------------


// lower case is greater than upper case.
// last one is greater than the first one. example is z


// var a = 'a'
// var b = 'c'

// console.log(b > a)



// --------------------------------- 13 play with string  ----------------------

// var a = 'This is Nayem Islam'


// //startWith is used to match the starting word
// console.log(a.startsWith('This'))


// // chartAt is used to see the exact charrecter. 
// console.log(a.charAt(2))


// //endstWith is used to match the ending word
// console.log(a.endsWith('Islam'))


// // concat is used to add string at the end
// console.log(a.concat('24'))


// // to make uppercase
// console.log(a.toUpperCase())


// //to make lowercase
// console.log(a.toLowerCase())


// // to make the string as arrey with a space or latter
// console.log(a.split(' '))


// // to see the string length
// console.log(a.length)




