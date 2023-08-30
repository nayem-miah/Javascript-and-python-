// chap 1 = mathe function
// chap 2 = date
// chap 3 = If, else if, else conditions
// chap 4 = switch statement
// chap 5 = logical oparator



//---------------------------1 mathe function-----------------------------


// console.log(Math.E)
// console.log(Math.PI)
// var n = 4.189

// console.log(Math.abs(n)) //4.189  absolute number
// console.log(Math.floor(n)) //4  which is after . wil not show
// console.log(Math.ceil(n))  //5  if there is number after . , it will count the next number
// console.log(Math.round(n)) //4   if it is 4.500 then show 5



// console.log(Math.max(144, 599, 45,564)) // it will return the max number
// console.log(Math.min(144, 599, 45)) // it will return the min number
// console.log(Math.pow(3, 3)) // it will return the power 
// console.log(Math.random()) // it will return a random number


// //----------------------------2 Date---------------

// var date = new Date()

// console.log(date) //return date and time 
// console.log(date.toDateString()) // return date time and day name
// console.log(date.toTimeString()) // retrun local time
// console.log(date.getFullYear()) // return year
// console.log(date.getMonth()) // return month
// console.log(date.getDate()) // only date no month and year
// console.log(date.getHours()) // only hour
// console.log(date.getMinutes()) // only minutes
// console.log(date.getSeconds()) // only seconds

// here new Date() is an object and getFullYear() is a method under new Date object


// //--------------------------3 If, else if, else conditions---------------


// var a = 20
// var b = 20

// if (a > b) {
//     console.log('A is greater than B')
// }

// else if (b > a) {
//     console.log('B is greater than A')
// }

// else {
//     console.log('A and B is equal')
// }


//------------------------------4 switch statement------------------------

// //The switch expression is evaluated once.
// //The value of the expression is compared with the values of each case.
// //If there is a match, the associated block of code is executed.
// //If there is no match, the default code block is executed.
// // It is up to the user if they would like to use if else or switch as they both serve the same purpose.
// //Both if-else and switch have their own set of advantages over one another.
// //It is ideal to use if else when checking if a condition is true or false.
// //It is ideal to use a switch instead of using nested if-else statements as
// // it is faster due to the creation of a jump table.


// var date = new Date()
// var today = date.getDay()


// switch (today) {

//     case 0:
//         console.log('Sunday')
//         break

//     case 1:
//         console.log('Monday')
//         break

//     case 2:
//         console.log('Tuesday')
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log('Thursday')
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log('Saturday')
//         break
//     default: console.log('Not a valid number')

// }




// --------------------- 5 logical oparator------------------------


// there are 3 logical oparator 
// && = and oparator
// || = or oparator
//  ! = not oparator
// a = 10
// b = 30
// c = 50
// if (a < b && b == c) {
//     console.log('They are not eqaul')
// }

// else console.log('they are equal')

// if (a < b || b == c) {
//     console.log('They are not eqaul')
// }

// else console.log('they are equal')



// var check = !(a > b)
// console.log(check)