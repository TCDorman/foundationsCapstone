const form = [...document.querySelector('.form').children];
let one = 1
form.forEach((item, one) => {
    setTimeout(() => {
        item.style.opacity = one;
    }, i*100);
})

