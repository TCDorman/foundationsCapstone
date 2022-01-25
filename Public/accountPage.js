// const { default: axios } = require("axios")//this auto popped do i need it?

const shoulderbtn = document.getElementById('shoulders')
const chestandtribtn = document.getElementById('chestandtri')
const legsbtn = document.getElementById('legs')
const backandbibtn = document.getElementById('backandbi')

function addRandomShoulder (array) {
    const workout = document.createElement('li')
    const shoulderWorkout = document.createElement('ul')

    array.forEach((ex) => {
        const exOne = document.createElement('div')
        exOne.innerHTML = `<br> <li>${ex.workout_name} </li>
        <br> 
        <li>${ex.workout_description}</li>`
        document.body.appendChild(exOne)
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
    axios.get(`http://localhost:4005/shoulders`)
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
        placeHolderThree = Math.floor(math.random() * array.length)
    }
    if (placeHolderFour === placeHolder || placeHolderTwo || placeHolderThree) {
        placeHolderFour = Math.floor(math.random() * array.length)
    }
    arr.push(array[placeHolder])
    arr.push(array[placeHolderTwo])
    arr.push(array[placeHolderThree])
    arr.push(array[placeHolderFour])
    console.log(arr)
    addRandomChestAndTri(arr)

}

function getChestAndTriWorkout () {
    axios.get(`http://localhost:4005/chestandtri`) //**** not sure if ending is correct with chestandtri */
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
    })
}


function randomLegs (obj) {
    let arr = []
    let placeHolder = Math.floor(Math.random() * array.length)
    let placeHolderTwo = Math.floor(Math.random() * array.length)
    let placeHolderThree = Math.floor(Math.random() * array.length)
    let placeHolderFour = Math.floor(Math.random() * array.length)
    if (placeHolderTwo === placeHolder) {
        placeHolderTwo = Math.floor(Math.random() * array.length)
    } 
    if (placeHolderThree === placeHolder || placeHolderTwo) {
        placeHolderThree = Math.floor(math.random() * array.length)
    }
    if (placeHolderFour === placeHolder || placeHolderTwo || placeHolderThree) {
        placeHolderFour = Math.floor(math.random() * array.length)
    }
    arr.push(array[placeHolder])
    arr.push(array[placeHolderTwo])
    arr.push(array[placeHolderThree])
    arr.push(array[placeHolderFour])
    console.log(arr)
    addRandomLegs(arr)
}

function getLegsWorkout () {
    axios.get(`http://localhost:4005/legs`) 
    .then(res => {
        randomLegs(res.data)
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addRandomBackAndBi (array) {
    const workout = document.createElement('li')
    const legsWorkout = document.createElement('ul')

    array.forEach((ex) => {
        const exOne = document.createElement('div')
        exOne.innerHTML = `<br> <li>${ex.workout_name} </li>
        <br> 
        <li>${ex.workout_description}</li>`
        document.body.appendChild(exOne)
    })
}


function randomBackAndBi(obj) {
    let arr = []
    let placeHolder = Math.floor(Math.random() * array.length)
    let placeHolderTwo = Math.floor(Math.random() * array.length)
    let placeHolderThree = Math.floor(Math.random() * array.length)
    let placeHolderFour = Math.floor(Math.random() * array.length)
    if (placeHolderTwo === placeHolder) {
        placeHolderTwo = Math.floor(Math.random() * array.length)
    } 
    if (placeHolderThree === placeHolder || placeHolderTwo) {
        placeHolderThree = Math.floor(math.random() * array.length)
    }
    if (placeHolderFour === placeHolder || placeHolderTwo || placeHolderThree) {
        placeHolderFour = Math.floor(math.random() * array.length)
    }
    arr.push(array[placeHolder])
    arr.push(array[placeHolderTwo])
    arr.push(array[placeHolderThree])
    arr.push(array[placeHolderFour])
    console.log(arr)
    addRandomBackAndBi(arr)
}

function getBackAndBiWorkout () {
    axios.get(`http://localhost:4005/backandbi`) 
    .then(res => {
        randomBackAndBi(res.data)
    })
}

shoulderbtn.addEventListener('click', getShoulderWorkout)
chestandtribtn.addEventListener('click', getChestAndTriWorkout)
legsbtn.addEventListener('click', getLegsWorkout)
backandbibtn.addEventListener('click', getBackAndBiWorkout)

