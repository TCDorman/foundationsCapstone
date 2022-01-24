// const { default: axios } = require("axios")//this auto popped do i need it?

const shoulderbtn = document.getElementById('shoulders')
const chestandtribtn = document.getElementById('chestandtri')
const legsbtn = document.getElementById('legs')
const backandbisbtn = document.getElementById('backandbi')

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


function getShoulderWrkout () {
    axios.get(`http://localhost:4005/shoulders`)
    .then(res => {
        
        randomShoulder(res.data)
    })
}

function randomChestAndTri (obj) {
    let arr = []
    let keys = Object.keys(obj)
    let placeHolder = Math.floor(Math.random() * keys.length)
    arr.push(obj[keys[placeHolder]])
    console.log(arr)
    console.log(placeHolder)
}

function getChestAndTriWrkout () {
    axios.get(`http://localhost:4005/chestandtri`) //**** not sure if ending is correct with chestandtri */
    .then(res => {
        randomChestAndTri(res.data[0])
    })
}

function randomLegs (obj) {
    let arr = []
    let keys = Object.keys(obj)
    let placeHolder = Math.floor(Math.random() * keys.length)
    arr.push(obj[keys[placeHolder]])
    console.log(arr)
}

function getLegsWrkout () {
    axios.get(`http://localhost:4005/legs`) 
    .then(res => {
        randomLegs(res.data[0])
    })
}

function randomBackAndBis(obj) {
    let arr = []
    let keys = Object.keys(obj)
    let placeHolder = Math.floor(Math.random() * keys.length)
    arr.push(obj[keys[placeHolder]])
    console.log(arr)
}

function getBackAndBisWrkout () {
    axios.get(`http://localhost:4005/backandbis`) 
    .then(res => {
        randomBackAndBis(res.data[0])
    })
}

shoulderbtn.addEventListener('click', getShoulderWrkout)
chestandtribtn.addEventListener('click', getChestAndTriWrkout)
legsbtn.addEventListener('click', getLegsWrkout)
backandbisbtn.addEventListener('click', getBackAndBisWrkout)

