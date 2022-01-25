let dropbtn = document.getElementsByClassName('dropbtn')[0]

let dropdown = document.getElementsByClassName('dropdown-content')[0]
dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('hide')
})
