const bar = document.getElementById('bar');
const close = document.getElementById ('close');
const navBar = document.getElementById('navBar');
const next = document.getElementsByClassName('next');
const moreShoes = document.getElementsByClassName('moreShoes');

if (bar) {
    bar.addEventListener('click',() => {
        navBar.classList.add('active')
    } )
}

if (close) {
    close.addEventListener('click',() => {
        navBar.classList.remove('active')
    })
}

if (next) (
    next.addEventListener('click',() => {
        moreShoes.classList.add('active')
    })
)

