// const { default: axios } = require("axios")//this auto popped do i need it?

const message = document.querySelector('#message')
const shoulderbtn = document.getElementById('shoulders')
const chestandtribtn = document.getElementById('chestandtri')
const legsbtn = document.getElementById('legs')
const backandbibtn = document.getElementById('backandbi')


let dropbtn = document.getElementsByClassName('dropbtn')[0]
let dropdown = document.getElementsByClassName('dropdown-content')[0]
dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('hide')
})

function resetWorkout(event) {
    let target = event.target.parentNode
    target.parentNode.removeChild(target)
}


function addRandomShoulder (array) {
    const workout = document.createElement('li')
    const shoulderWorkout = document.createElement('ul')

    array.forEach((ex) => {
        const exOne = document.createElement('div')
        exOne.innerHTML = `<br> <li>${ex.workout_name} </li>
        <br> 
        <li>${ex.workout_description}</li>`
        document.body.appendChild(exOne)
        
        const resetBtn = document.createElement('button')
        resetBtn.textContent = 'Remove'
    
        exOne.appendChild(resetBtn)
        resetBtn.addEventListener('click', resetWorkout)
    })
}



function randomShoulder (array) {
    let arr = []
    let placeHolder = Math.floor(Math.random() * array.length)
    let placeHolderTwo = Math.floor(Math.random() * array.length)
    if (placeHolderTwo === placeHolder) {
        placeHolderTwo = Math.floor(Math.random() * array.length)
    } 
    arr.push(array[placeHolder])
    arr.push(array[placeHolderTwo])
    console.log(arr)
    addRandomShoulder(arr)



}
function getShoulderWorkout () {
    axios.get(`/shoulders`)
    .then(res => {
        
        randomShoulder(res.data)
    })
}
////////////////////////////////////////////////////////////////////////////////

function addRandomChestAndTri (array) {
    const workout = document.createElement('li')
    const chestAndTriWorkout = document.createElement('ul')

    array.forEach((ex) => {
        const exOne = document.createElement('div')
        exOne.innerHTML = `<br> <li>${ex.workout_name} </li>
        <br> 
        <li>${ex.workout_description}</li>`
        document.body.appendChild(exOne)

        const resetBtn = document.createElement('button')
        resetBtn.textContent = 'Remove'
    
        exOne.appendChild(resetBtn)
        resetBtn.addEventListener('click', resetWorkout)
    })
}

function randomChestAndTri (array) {
    let arr = []
    let placeHolder = Math.floor(Math.random() * array.length)
    let placeHolderTwo = Math.floor(Math.random() * array.length)
    let placeHolderThree = Math.floor(Math.random() * array.length)
    let placeHolderFour = Math.floor(Math.random() * array.length)
    if (placeHolderTwo === placeHolder) {
        placeHolderTwo = Math.floor(Math.random() * array.length)
    } 
    if (placeHolderThree === placeHolder || placeHolderTwo) {
        placeHolderThree = Math.floor(Math.random() * array.length)
    }
    if (placeHolderFour === placeHolder || placeHolderTwo || placeHolderThree) {
        placeHolderFour = Math.floor(Math.random() * array.length)
    }
    arr.push(array[placeHolder])
    arr.push(array[placeHolderTwo])
    arr.push(array[placeHolderThree])
    arr.push(array[placeHolderFour])
    console.log(arr)
    addRandomChestAndTri(arr)

}

function getChestAndTriWorkout () {
    axios.get(`/chestandtri`) //**** not sure if ending is correct with chestandtri */
    .then(res => {
        randomChestAndTri(res.data)
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////


function addRandomLegs (array) {
    const workout = document.createElement('li')
    const legsWorkout = document.createElement('ul')

    array.forEach((ex) => {
        const exOne = document.createElement('div')
        exOne.innerHTML = `<br> <li>${ex.workout_name} </li>
        <br> 
        <li>${ex.workout_description}</li>`
        document.body.appendChild(exOne)

        const resetBtn = document.createElement('button')
        resetBtn.textContent = 'Remove'
    
        exOne.appendChild(resetBtn)
        resetBtn.addEventListener('click', resetWorkout)
    })
}


function randomLegs (array) {
    let arr = []
    let placeHolder = Math.floor(Math.random() * array.length)
    let placeHolderTwo = Math.floor(Math.random() * array.length)
    let placeHolderThree = Math.floor(Math.random() * array.length)
    let placeHolderFour = Math.floor(Math.random() * array.length)
    if (placeHolderTwo === placeHolder) {
        placeHolderTwo = Math.floor(Math.random() * array.length)
    } 
    if (placeHolderThree === placeHolder || placeHolderTwo) {
        placeHolderThree = Math.floor(Math.random() * array.length)
    }
    if (placeHolderFour === placeHolder || placeHolderTwo || placeHolderThree) {
        placeHolderFour = Math.floor(Math.random() * array.length)
    }
    arr.push(array[placeHolder])
    arr.push(array[placeHolderTwo])
    arr.push(array[placeHolderThree])
    arr.push(array[placeHolderFour])
    console.log(arr)
    addRandomLegs(arr)
}

function getLegsWorkout () {
    axios.get(`/legs`) 
    .then(res => {
        randomLegs(res.data)
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addRandomBackAndBi (array) {
    const workout = document.createElement('li')
    const backAndBiWorkout = document.createElement('ul')

    array.forEach((ex) => {
        const exOne = document.createElement('div')
        exOne.innerHTML = `<br> <li>${ex.workout_name} </li>
        <br> 
        <li>${ex.workout_description}</li>`
        document.body.appendChild(exOne)

        const resetBtn = document.createElement('button')
        resetBtn.textContent = 'Remove'
    
        exOne.appendChild(resetBtn)
        resetBtn.addEventListener('click', resetWorkout)
    })
}


function randomBackAndBi(array) {
    let arr = []
    let placeHolder = Math.floor(Math.random() * array.length)
    let placeHolderTwo = Math.floor(Math.random() * array.length)
    let placeHolderThree = Math.floor(Math.random() * array.length)
    let placeHolderFour = Math.floor(Math.random() * array.length)
    if (placeHolderTwo === placeHolder) {
        placeHolderTwo = Math.floor(Math.random() * array.length)
    } 
    if (placeHolderThree === placeHolder || placeHolderTwo) {
        placeHolderThree = Math.floor(Math.random() * array.length)
    }
    if (placeHolderFour === placeHolder || placeHolderTwo || placeHolderThree) {
        placeHolderFour = Math.floor(Math.random() * array.length)
    }
    arr.push(array[placeHolder])
    arr.push(array[placeHolderTwo])
    arr.push(array[placeHolderThree])
    arr.push(array[placeHolderFour])
    console.log(arr)
    addRandomBackAndBi(arr)
}

function getBackAndBiWorkout () {
    axios.get(`/backandbi`) 
    .then(res => {
        randomBackAndBi(res.data)
    })
}

shoulderbtn.addEventListener('click', getShoulderWorkout)
chestandtribtn.addEventListener('click', getChestAndTriWorkout)
legsbtn.addEventListener('click', getLegsWorkout)
backandbibtn.addEventListener('click', getBackAndBiWorkout)

