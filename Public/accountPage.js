const { default: axios } = require("axios")//this auto popped do i need it?

const shoulderbtn = document.getElementById('shoulders')
const chestandtribtn = document.getElementById('chestandtri')
const legsbtn = document.getElementById('legs')
const backandbisbtn = document.getElementById('backandbi')



function randomShoulder (obj) {
    let arr = []
    let keys = Object.keys(obj)
    let placeHolder = Math.floor(Math.random() * keys.length)
    arr.push(obj[keys[placeHolder]])
    console.log(arr)
}

function getShoulderWrkout () {
    axios.get(`http://localhost:4005/shoulders`)
    .then(res => {
        // console.log(res.data)
        randomShoulder(res.data[0])
    })
}

function randomChestAndTri (obj) {
    let arr = []
    let keys = Object.keys(obj)
    let placeHolder = Math.floor(Math.random() * keys.length)
    arr.push(obj[keys[placeHolder]])
    console.log(arr)
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

