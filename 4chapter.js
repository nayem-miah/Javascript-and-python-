// chap 1 = object in JS
// chap 2 = compare between 2 objects
// chap 3 = in oparator and iterate object



//--------------------- 1 object in js ------------------------------
// there are three way to assign an object
// we say object in JS but in Python we say Dictionary



//1st way to assign a object called object constructor pattern----------

// var obj =  Object()
// obj.b = 50
// obj.f = 76
// console.log(obj)




//-----------2nd way to assign a object called object constructor pattern----------
// var obj2 = new Object()
// obj2.a = 'Ayesha'
// obj2.b = 'Amena'
// obj2.c = 'Halima'
// console.log(obj2)





// //-----------3rd way to assign a object called object literal ----------
// var poin = {
//     nayem: 'Honours',
//     shakib: 'seven'
// }
// console.log(poin)
// poin.shakib = 'Eight' // to update the existing property
// poin['shakib'] = 'Eight' // to update existing property with arrey notation
// poin.saiful = 'two'  // to add a new property
// poin['saiful'] = 'two'  // to add a new property with arrey notation
// poin.sabbir = 'five'  // to insert a new property
// poin.shakib = undefined // to undefine the value of the property
// delete poin.shakib  // to delete the property


// console.log(poin.nayem) // to see the value it's called dot notation
// console.log(poin['nayem']) // to see the value it's called arrey notation


// var obj = {
//     e: 30,
//     y: 53,
//     s: 24
// }

// console.log(Object.keys(obj)) // to see the keys or property of the object
// console.log(Object.values(obj)) // to see the values of the key or property
// console.log(Object.entries(obj)) // to make the object as multi dimential arrey
// var obj2 = Object.assign({}, obj)  // to clone/create a new object
// console.log(obj2)

//--------------------  2 compare between 2 objects ----------------


var obj = {
    a: 10,
    b: 20
}

var obj2 = {
    a : 10,
    b : 20
}


// console.log(obj === obj2)  // it won't work 
// console.log(obj.a === obj2.a && obj.b === obj2.b) // it will work to compare

// console.log(JSON.stringify(obj)===JSON.stringify(obj2)) // this way is also works to compare. here we make the object as string


//--------------------------- 3 in oparator and iterate object ----------------

// var obj = {
//     a: 10,
//     n: 30,
//     g: 53
// }

// console.log('g' in obj) // to check the property exist or not

// for (var i in obj) {
//     console.log(obj[i])
// }
// // this is how we can iterate or see any object's property's value