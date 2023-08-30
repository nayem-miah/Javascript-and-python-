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




// const searchInput = document.querySelector('.input')
// const prints = document.querySelector('.print')


// printFunction = function(){

//     prints.innerHTML = this.value
// }

// searchInput.addEventListener('keyup', printFunction);




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

// let { name: names} = user2 // we can define a new name like names here

// console.log(names)



// //-------------------------bringing nested objects ----------------

// let {spring: {seOne: x}} = user2 // we also can bring nested objects

// console.log(x)


// //--------------------------- arrey destucturing------------------------------

// let user3 = ['nayem',4,6,7,9]

// // let [a,b]=user3// nayem and 4 in a and b
// let [,a,,b]=user3 // 4 and 7 in a and b

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







// console.log('this is the line one...');


// // setTimeout function takes two peramiter 1 is a callback function and another is a milisecond tim

// setTimeout(function(){
//     console.log('this is the line two');
//  }, 3000)

// console.log('this is the line three...');
// console.log('this is the line four ...');
// console.log('this is the line five ...');
// console.log('this is the line six...');
// console.log('this is the line seven...');
// console.log('this is the line eight...');
// console.log('this is the line nine...');
// console.log('this is the line ten...');


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


// function certificate(){
//     console.log('Preparing certificate...');
//     setTimeout(function(){
//         console.log('your certificate is ready for you just download it now...');
//     },2000)
// }



// enrollment(function(){
//     progress(certificate)
// })

// // The above function words with callback function it has 3 leyer of functions here
// // when we have more leyer of functions, we need to use promise function


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


// //----------------------------------async and await--------------------------






// const marks = 90
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

// async function course(){
//     try {
//     await enrollment();
//     await Progress();
//     const messege = await GetCertificate();
//     console.log(messege);
//     } catch(err){
//        console.log(err);
//     }
// }
// course();


// callback < promise < async-await best 