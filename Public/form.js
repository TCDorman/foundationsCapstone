const form = [...document.querySelector('.form').children];
let one = 1
form.forEach((item, one) => {
    setTimeout(() => {
        item.style.opacity = one;
    }, i*100);
})


let dropbtn = document.getElementsByClassName('dropbtn')[0]
let dropdown = document.getElementsByClassName('dropdown-content')[0]
dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('hide')
})