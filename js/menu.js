const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('main');

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
})