const toogleButton = document.querySelector('.navbar_toogleButton')
const toogleButton1 = document.querySelector('.navbar_serch')
const cate = document.querySelector('.cate')
const serch = document.querySelector('.serch')

toogleButton.addEventListener('click', () => {
    cate.classList.toggle('active');
});

toogleButton1.addEventListener('click', () => {
    serch.classList.toggle('active');
});