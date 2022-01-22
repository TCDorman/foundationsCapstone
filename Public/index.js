// function myFunction () {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if(!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             console.log(dropdowns[i])
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

let dropbtn = document.getElementsByClassName('dropbtn')[0]
//console.log(dropbtn)
let dropdown = document.getElementsByClassName('dropdown-content')[0]
dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('hide')
})
//     dropdown.classList.toggle('show')
// console.log(dropdown)