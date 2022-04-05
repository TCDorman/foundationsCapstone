// const form = [...document.querySelector('.form').children];
// let one = 1
// form.forEach((item, one) => {
//     setTimeout(() => {
//         item.style.opacity = one;
//     }, i*100);
// })


let dropbtn = document.getElementsByClassName('dropbtn')[0]
let dropdown = document.getElementsByClassName('dropdown-content')[0]
dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('hide')
})

var objPeople = [
    {
        username:'Sam',
        password: 'codify'
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for ( i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password){
            console.log(username + " is logged in!")
        } 
    }
}

function login() {
    var username = 
}