
// এসিনক্রোনাস ফাংশন এসেছে অর্ডার মেইনটেইন করার জন্য 
// কোন ফাংশনটা পরে কোন ফাংশনটা কাজ করবে
// আমরা সেগুলো callBack function দিয়ে করতে পারি
// promise দিয়েও করতে পারি
// আবার async await দিয়েও করতে পারি
// call back function বর্তমানে ব্যবহার কম হয়






// //--------------------call back functions------------

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















// //----------------------------------------promise--------------------------------------------

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
    





// const marks = 40
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

















// //----------------------------------async and await--------------------------


// // mailnly promise call system is a problem, there are then then the and then. So to solve the problem, here comes the async and qwait 
// // in only asycn function, we can write await.
// // async function always returns a promise


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

// // to understant more:  https://youtu.be/93kW8DI54W8?si=WkCrNPdFIRGd_rlQ
// // callback < promise < async-await best 





// //-------------------------------- async functions---------------------------------------------------------------

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
