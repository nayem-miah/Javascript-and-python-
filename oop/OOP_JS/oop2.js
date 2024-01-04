// chap 1 = factory pattern
// chap 2 = Constractor pattern
// chap 3 = call method
// chap 4 = apply method
// chap 5 = bind method
// chap 6 = call by value call by referance
// chap 7 = pass by value pass by referance




// var test = {
//    a : 'Norul Islam',
//    b : 'Nayem Islam',

//    hello: function(){
//        console.log(this.a, this.b)
//        this.printTest()
//    },
   
//    printTest: function(){
//        console.log('this is a Print method')
//    },


// }

// test.hello()







// var test = {
//     a : 'Norul Islam',
//     b : 'Nayem Islam',
 
//     hello: function(){
//         console.log(this.a, this.b)
//         this.printTest()
//     },
    
//     printTest: function(){
//         console.log('this is a Print method')
//     },
 
 
//  }
 
//  console.log('a = '+test.a+' b = '+ test.b)



//----------------------------- 1 factory pattern--------------------
// ES5 doesn't have class. Alternatives are factory pattern and constractor pattern






// var fact_function = function(a,b){  // here fact_function is factory pattern


//       return{
//         a : a ,
//         b : b ,
    
//         hello: function(){
//             console.log(this.a, this.b)
//             this.printTest()
//         },
        
//         printTest: function(){
//             console.log('this is a Print method')
//         },
    
//     }
  
    
// }



// var obj = fact_function(39, 49)  // here obj is a object
// obj.hello()

// var obj2 = fact_function('Norul Islam', 'Nayem Islam') // here obj2 is a object
// obj2.hello()









//----------------------------- 2 Constractor pattern---------------------
// it also behaves like a class


// var Con1 = function(a,b){

//         this.a = a 
//         this.b = b 
    
//         this.hello = function(){
//             console.log(this.a, this.b)
//             this.printTest()
//         }
        
//        this. printTest = function(){
//             console.log('this is a Print method')
//         }

// }

// var obj3 = new Con1('constractor a ', ' constractor2') // here new is for being constractor
// obj3.hello()

// var obj4 = new Con1(20,50)
// obj4.hello()





//---------------------------------- 3 call method-------------------------



// function test(c,d){
    
//     console.log(this.a + this.b)
//     console.log(c+d)
    

// }


// // test.call({}) // here it will return a empty string
// test.call({a:300, b:38})
// test.call({a:300, b:38}, 7,90) // here 7 = c and 90 = d
//  // here call will sent a and b. and this keyword receive them

// // test.apply({a:30, b:50})








//----------------------------------4 apply method-------------------------


// function test(c,d){
    
//     console.log(this.a + this.b)
//     console.log(c+d)
    

// }



// test.apply({a:300, b:38}, [7,90]) // here 7 = c and 90 = d 
 




//----------------------------- 5 bind method-------------------------------

// function test(c,d){
    
//     console.log(this.a + this.b)
//     console.log(c+d)
    

// }

// test.bind({a:7, b: 3}, 30, 50) 
// // bind method will bind but not call.
// // if u want to call store the bind method in a varible and call the varible like given below
// var bindCall = test.bind({a:7, b:3}, 30,50)
// bindCall()

// // 2nd way to call

// var bCall = test.bind({a:8,b:9})

// bCall(40,70) // 40 = c, 70 = d





//--------------------------- 6 call by value call by referance-----------

// var n = 10 // it is a primitive datatype

// function change(n){
//     n = 100+n
//     console.log(n)
// }

// change(n)

// console.log(n) 
//  // output is 10 though in function n = 110 
//  //cause  varible n was a primitive data type.
//  // if primitive datatype enter to a function globally it has no access
// // it is called call by value call by referance




//  //--------------------------- 7 pass by value pass by referance-----------

// var obj = {
//     a: 10,
//     b: 20,
// }

// console.log(obj.a) // here output is 10

// function test(obj){
//       obj.a += 100
      
//       console.log(obj.a) 
// }

// test(obj)   // output is 110
// // console.log(obj.a) 
// // here output is 110. Here obj.a is from the function not the object.
// // if object datatye enter to a function globally it has access
// // it is called pass by value pass by referance
// // it is also called mutuble object



