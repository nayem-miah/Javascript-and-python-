
// we covered here
// 1 arrey and some method
// 2 arrey traversing
// 3 arrey searching
// 4 multi dimentional arrey
// 5 arrey method



//--------------------- 1 arrey and some method------------------------------


var arr = [1,3,4,7,9]
// arr[5] = 56  // to entry new element or modify the previus element
// arr.splice(2, 0, 67) // 2 is indexing, 0 means no data remove, 67 is insert new data
// arr[2] = undefined // index 2 will be undefined or blacked not removed

// arr.reverse()  // to reverce indexing


// console.log(arr) // to see the arrey
// console.log(arr[2]) // to see the specific element of the arrey
// console.log(arr.length) // to see the length of the arrey


// var arr2 = Array(1,4,2) // this way is also worked to asign a arrey



//--------------------- 2 arrey traversing------------------------------


// var arr = [1,3,4,7,9,34,75]

// for (var i = 0; i < arr.length; i++){
//      console.log(arr[i])
// }


//---------------------3  arrey searching------------------------------

// var arr = [3,4,7,5,45,85,234,75,4,32,71]


// var find = 5
// var isFound = false
// for (var i = 0; i < arr.length; i++){

//      if (arr[i]===find){
          
//           console.log('We found '+arr[i])
//           isFound = true
      
//      } 
// }

// var found = false
// var arr = [23,53,43,64,234,645]
// var finding = 53

// for(var i=0; i<arr.length; i+=1 ){
//     if (arr[i]==finding){
//         console.log('Finally we got ther finding number...'+arr[i])
//         found = true
//     }
// }
// if (!found){
//     console.log('Not found')
// }



// if (!isFound){
//    console.log('No Data Found')
// }



//--------------------- 4 multi dimentional arrey------------------------------


var arr = [
     [78, 69, 90,57],
     [75, 66, 90,58],
     [88, 69, 93,47]

]

// // console.log(arr[1][1])

// for (var i = 0; i < arr.length; i++){
  
//      for (var j = 0; j< arr[i].length; j++){
        
//           console.log(arr[i][j])

//      }
// }



// var arr = [
//     [9,4,65,65,],
//     [34,54,34,4],
//     [23,43,54,67]
// ]

// for(var i=0; i<arr.length; i++){

//     for(var j=0; j<arr[i].length; j++){
//         console.log(arr[i][j])
//     }

// }


//--------------------- 5 arrey method ------------------------------



// console.log(arr) // to print the arrey without any breaket
// console.log(arr.fill('3')) // to fill  the whole arrey with 2
// console.log(Array.isArray(arr)) // to check is it arrey or not
// Array.from(arr)  // to create a new arrey like the existing arrey