// chap 1 = const, var, let
// chap 2 = template string
// chap 3 = arrow function
// chap 4 = inhance object
// chap 5 = destructure arrey
// chap 6 = destructure object
// chap 7 = rest oparator
// chap 8 = spread oparator





//--------------------------- 1 const, var, let-----------------------------
// var, const, let do almost same job but there are defference also



// // var is changeble
// var a = 10
// a = 20
// console.log(a) // output 20 not 10



// // const is not changeble
// const a = 10
// a = 20
// console.log(a)  // error cause it is not changble




// let, var
// if statement is global with var 
// if statemet is not global with let
// var a = 20 
// if (true){
//     var a = 30
// }
// console.log(a) //output 30. cause if is global with var


// let a = 20 
// if (true){
//     let a = 30
// }
// console.log(a) //output 20. cause if is not global with let





//--------------------------------- 2 template string-----------------------
// // it works like python f"" 

// const names = 'Nayem Islam'
// const age = 24
// const mail = 'nayem@gmail.com'
// const details = ` Name =  ${names} age = ${age} mail = ${mail}`
// console.log(details)



//--------------------------------- 3 arrow function----------------------------

// const prints = () => {
//     console.log('Hello this is a arrow function')
// }

// prints()


// // if one argoment, parentheses not required 
// const prints = name => {
//     console.log(name)
// }

// prints('Nayem Islam')



// // if multiple argoments, parentheses must required 
// const prints = (name, age) => {
//     console.log(`My name is ${name} and age is ${age}`)
// }

// prints('Nayem Islam', 24)




// // if only one line code in arrow function
// // no need curly braces
// const sqr = x => x*x
// console.log(sqr(10))




//---------------------------- 4 inhance object-------------------------------

// let names = 'Nayem Islam'
// let email = 'nayem@gmail.com'

// const obj = {
//     names,  // not need to write names: names
//     email,  // not need to write email: email
//     prints(){    // not need to write prints: function() like this
//         return "hello this is a method"
//     }
    
// }


// console.log(obj.prints())




//------------------------------- 5 destructure arrey---------------------

// let arr = [1,5,6,34,97];

// var a = arr[2] 
// var b = arr[4]
// var c = arr[1]
// //this is es5 way

// let [f,c,a,,b] = arr; // this way is for es6  
// console.log(b)


//----------------------------- 6 destructure object---------------------

// const obj = {
//     names: 'Nayem Islam',
//     email: 'nayem@gmail.com',
// }

// let names = obj.name
// let email = obj.email
// // this is es5 way

// let { names, email } = obj;  // this way for es6

// console.log(names, email)




//------------------------------- 7 rest oparator--------------------------
// to sent uncountable argument to function 
// and will return arrey
// we use here reduce method

// function sum (...numbers){
//     return numbers.reduce((a,b) => a+b);
// }

// console.log(sum(39,58,89))


//------------------------------ 8 spread oparator------------------------



// let arr = [1,40,53,70]
// let arr2 = [arr, 65,21,61]

// // console.log(arr)//
// console.log(arr2)//
// console.log(...arr) // this is spread oparator

// let obj = {
//     names: 'Nayem Islam',
//     email: 'nayem@gmail.com',
// }

// let obj2 = {
//     ...obj,    //obg object will spread here
//     names: 'Sakib Islam', // Nayem Islam will be replace as Sakib Islam now
//     age: '24'  // new property adding
// }

// console.log(obj2)