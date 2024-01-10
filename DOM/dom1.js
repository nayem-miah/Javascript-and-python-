// //----------- to get a ID -----------------------------

// let text = document.getElementById('text')
// text.innerHTML = 'Hello this is a test'


// //----------- to get all tag --------------------------


// let allTag = document.getElementsByTagName('h1')



// // ----------- to get class --------------------------

// let allclass = document.getElementsByClassName('test')




// // ==================== background change ==========================

// let color = ['red','blue','green', 'yellow', 'orange', 'tomato','white']
// let i = 0
// let btn = document.getElementById('click-me')
// btn.addEventListener('click', function(){
//     let text = document.getElementById('color')
    
//     text.style.background = color[i]
//     text.innerHTML = color[i]
//     if (i >= color.length){
//         i = 0;
//     } else{
//         i++
//     }

// })



let ColorOb = ['tomato', 'white','blue','green','yellow']
let i = 0
let colorBtn = document.querySelector('#click-me')
let colorText = document.querySelector('#color')


colorBtn.addEventListener('click',function(){

    colorText.style.background = ColorOb[i]

    if (i >= ColorOb.length) {
         i = 0;
    }else{
        i++
    }

})



// // ---------------------- query selector for tag, class and id ---------------

// let qselector = document.querySelector('.container')
// console.log(qselector)



 
// // ---------------------- query selectorall for tag, class and id ---------------

// let qselector = document.querySelectorAll('div') // all div will be selected
// console.log(qselector)


// // ------------------------ style css in js----------------------------

// let h1 = document.querySelector('#my-h1') // this way works

// h1.style.background = 'tomato'
// h1.style.fontSize = '60px'
// h1.style.color = 'white'




// let h1 = document.querySelector('#my-h1') 

// let h1Style = {              // this way also works with object
//     background: 'tomato',
//     fontSize: '60',
//     color: 'blue',
//     textAlign: 'center'

// }

// Object.assign(h1.style, h1Style)



// // // ================= show hidden with event listeener ==================
// let bt = document.querySelector('#click-btn')
// let text = document.querySelector('#text')
// isShow = true
// bt.addEventListener('click', function(){
//      if (isShow){
//          text.style.visibility = 'visible'
//          isShow = false

//      }else{
//         text.style.visibility = 'hidden'
//         isShow = true

//      }
// })


const bt = document.querySelector('#click-btn')
const text = document.querySelector('#text')
isShow = true

bt.addEventListener('click', function (){
    if (isShow){
        text.style.visibility = 'visible'
        isShow = false
    }else{
        text.style.visibility = 'hidden'
        isShow = true
    }
})





// // --------------------- create DOM--------------------------


// let root = document.querySelector('#root')
// let jambotonDiv = document.createElement("div") // to create a div
// jambotonDiv.className = 'jumbotron' // to add a class 
// jambotonDiv.setAttribute('id', 'my-jam') // to add a attribute



// let h1 = document.createElement('h1')
// h1.className = 'text-center p-5'
// h1.innerHTML = 'This is a js hmtl'
// root.appendChild(jambotonDiv)
// jambotonDiv.appendChild(h1)





// // // ========================= input data ===============================
// let ulId = document.querySelector('#ul-id')
// let inputField = document.querySelector('#name-field')
// inputField.addEventListener('keypress', function(event){
//     if (event.keyCode === 13){
//         let name = event.target.value // to have tha data we entered
//         let li = document.createElement('li')
//         li.className = 'list-group-item'
//         li.innerHTML = name
//         ulId.appendChild(li)
//         event.target.value = ''
//     }
// })



// let nameField = document.querySelector('#nameField')
// let ul = document.querySelector('#ulId')



// nameField.addEventListener('keyPress', function (event) {
    
// }