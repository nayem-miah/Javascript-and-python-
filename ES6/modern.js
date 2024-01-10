// Here we learn
// forEach
//ternary operator



// //--------------use of this and forEach-----------------------

// var javascript =  {
//     name: 'javascript',
//     libraries: ['React', 'Angular', 'vue','React native'],
//     printLibraries: function() {

//             this.libraries.forEach((a)=>
//                 console.log(`${this.name} loves ${a}`)
//              )
    
//     }

// }

// javascript.printLibraries()



// var js = {
//     name: 'Norul Islam',
//     child: ['Nayem Islam', 'Ayesha Islam', 'Amena Islam', 'Halima Islam', 'Saima Islam'],
//     printChild: function(){
//        this.child.forEach((p)=>
//        console.log(this.name+ " loves", p))
//     }
// }

// js.printChild()





// //-----------------------ternary operator-------------------

// // normal if condition..
// var age = 17
// if (age >= 18 ){
//     console.log('You are adult now')
// }
// else {
//     console.log('You are not adult now')
// }

// // here ternary operator
// var age = 18
// var life_step = (age >= 18)? console.log('you are mature') : console.log('you are being mature')



// let norul= {
    
//     son1:"Nayem",
//     son2:"Ayesha",
//     son3:"Amena",
//     son4:"Halima",
//     son5:"Saima",

// }

// keys = Object.keys(norul);
// values = Object.values(norul);
// entries = Object.entries(norul);
// console.log(keys)
// console.log(values)
// console.log(entries)


// //------------speard operator------------


// let numbers = [2,5,3,6,9,34];

// let newNumber = [...numbers,90,30,50]

// console.log(newNumber)


// //--------------rest operator------------


// function restOperator(...params){

//     console.log(params)

// }

// restOperator(1,211,12,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35)



// //--------------------------- object destucturing------------------------------

// let user = {
//     id:339,
//     name: 'sakib',
//     age:35,
// }

// // -----------------normal destructuring----------------------

// names = user['name']
// console.log(names)

// //------------es6---------------
// let {name} = user
// console.log(name)

// let user2 = {
//     name:'Nayem Islam',
//     id: 19112042,
//     age: 48,
//     spring: {
//         foOne: "Nadir",
//         seOne: "Tasniya",

//     }
// }

// let { name: nameu} = user2 // we can define a new name like names here

// console.log(nameu)

// // //-------------------------bringing nested objects ----------------

// let {spring: {seOne: x}} = user2 // we also can bring nested objects

// console.log(x)





// //--------------------------- arrey destucturing------------------------------

// let user3 = ['nayem',4,6,7,9]

// let [a,b]=user3// nayem and 4 in a and b
// // let [,a,,b]=user3 // 4 and 7 in a and b

// console.log(a,b)


// let user4 = [5,45,67,[400,500,340],68,80]

// let [,,,[,a,b]] = user4 // 500 and 340 in a and b
// console.log(a,b)



// // ----------------------------Swap--------------------

// let a = 1;
// let b = 2;

// [a,b]=[b,a]

// console.log(a,b)


// const SetCheck = new Set();
// SetCheck.add('Nyaem islam')

// console.log(SetCheck)










// setTimeout function takes two peramiter 1 is a callback function and another is a milisecond time
// this is asynchronous function

// setTimeout(function(){
//     console.log('Hello world');
//  }, 3000)

// console.log('this is the line three...');
// console.log('this is the line four ...');
// console.log('this is the line five ...');
// console.log('this is the line six...');
// console.log('this is the line seven...');
// console.log('this is the line eight...');
// console.log('this is the line nine...');
// console.log('this is the line ten...');




// //--------------------here we learn about call back functions------------
// const paymentSucceed = true;
// const marks = 80
// function enrollment(callback){
//      console.log('enrollment is proccessing...');
//     setTimeout(function(){
        
//         if(paymentSucceed){
//             console.log('payment successfully completed');
//             callback()
//         }else{
//             console.log('payment rejected')
//         }
     
//     },
//     2000)
// }


// function progress(callback){
//     console.log('result is geting ready for you...');
//     setTimeout(function(){
//          if (marks >= 80){
//             callback()
//          }else{
//             console.log('You failed');
//          }
//     },3000)
    
// }


// function certificate(callback){
//     console.log('Preparing certificate...');
//     setTimeout(function(){
//         callback()
//     },2000)
// }

// function result(){
//     console.log('here is a certificate...');
// }


// enrollment(function(){
//         progress(function(){
//             certificate(result)
//         })
//     }
// )

// // enrollment will call progress, progress will call certificate, progress will call result
// //This way we can do asynchronous tasks one after the other
// // reference or more  = https://www.youtube.com/watch?v=atQ0PNxT3Qc
// // The above function words with callback function it has 4 leyer of functions here
// // when we have more leyer of functions, we need to use promise function, and promise is the better option
// // when we have so mnay leyers, it's hard to understand when we call all these functions. its called callback hell
// // therefore, to get rid of the callback hell problem, we need to use promise 




// //----------------------------------------promise---------------------------------

// activeStatus = true;
// console.log('task 1')

// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if (activeStatus){
//             resolve('task 2')
//         } else{
//             reject('failure')
//         }
//     }, 3000)


// });

// console.log('task 3')


// // promise calling here 
// promise
//     .then(function(value,err){
//         console.log(value);
//     })
//     .catch (function(err){
//         console.log(err);
//     })
    





// const marks = 80
// const payment = true

// function enrollment(){

//     promise = new Promise(function(resolve,reject){
        
//         console.log(' payment is proccessing...');
//         setTimeout(function(){
//             if (payment){
//                 resolve()
//             }else{
//                 reject('Payment failed')
//             }
//         },3000);
    
   
//     })
//     return promise

// }


// function Progress(){
//     promise = new Promise(function(resolve,reject){

//         console.log(' result is preparing...');
         
//         setTimeout(function(){
//           if (marks >= 80){
//              resolve()
//           }else{
//             reject('You did not get enough marks to get certificate')
//           }
//         },2000)
//     })
//     return promise
// };

// function GetCertificate(){

//     promise = new Promise(function(resolve){

//         console.log('Certificate is preparing...');
//         setTimeout(function(){
               
//             resolve('Congrat! you passed just download certificate')

//         },3000)

//     })
//     return promise
// }

// // promises are calling here
// enrollment()
//    .then(Progress)
//    .then(GetCertificate)
//    .then(function(value) {
//         console.log(value)
//    })
//    .catch(function(err){
//         console.log(err)
//    })

//// to see more details https://youtu.be/RLurk_AL6GM?si=-Uyt7YZGRs2uzH3M



// //----------------- async functions---------------------------------------------------------------

// const hasMeeting = false
// const meeting =  new Promise ((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: "Technical meeting",
//             location: "Google meet",
//             time: "10:00 PM",
//         };
//         resolve(meetingDetails)

//     }
//     else{
//         reject(new Error("meeting has already been scheduled"));
//     }
// });


// const addToCalendar = (meetingDetail)=>{
//     const calender =   `${meetingDetail.name} was scheduled 
//                        on ${meetingDetail.location} at ${meetingDetail.time}`

//     return Promise.resolve(calender)

// };


// async function myMeeting(){
//     const meetingDetail = await meeting
//     const cal =   await addToCalendar(meetingDetail)
//     console.log(cal)
//   }

// myMeeting()



