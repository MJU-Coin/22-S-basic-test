// let servemenu=document.getElementById('servemenu');
// let category=document.querySelector('.nav1');
// let block=()=>{
//     servemenu.style.display='block';
// };
// let none=()=>{
//     servemenu.style.display='none';
// };
// category.addEventListener('mouseenter',block);
// category.addEventListener('mouseleaver',none);
// servemenu.addEventListener('mouseenter',block);
// servemenu.addEventListener('mouseleave',none);
let servemenu=document.getElementById('servemenu');
let category=document.querySelector('.nav1');
category.addEventListener('mouseenter',function(){
    servemenu.style.display='block';
});
category.addEventListener('mouseleave',function(){
    servemenu.style.display='none';
});
servemenu.addEventListener('mouseenter',function(){
servemenu.style.display='block';
});
servemenu.addEventListener('mouseleave',function(){
    servemenu.style.display='none';
})
let search1= document.querySelector('.searchinput');
let main_s=document.getElementById('main_s');
search1.addEventListener('mousedown',function(){
    search1.style.border='none';
    main_s.style.display='block';
});
let nots_button=document.querySelector('.nots_button');

nots_button.addEventListener('click',function(){
    main_s.style.display='none';
});
let main_input=document.getElementById('main_input');
let slide1=document.getElementById('slide1');
let slide2=document.getElementById('slide2');
let slide3=document.getElementById('slide3');
let slide4=document.getElementById('slide4');
let slide1left=document.getElementById('slide1left');
let slide1right=document.getElementById('slide1right');
let slide2left=document.getElementById('slide2left');
let slide2right=document.getElementById('slide2right');
let slide3left=document.getElementById('slide3left');
let slide3right=document.getElementById('slide3right');
let slide4left=document.getElementById('slide4left');
let slide4right=document.getElementById('slide4right');
slide1left.addEventListener('click',function(){
    slide4.style.transform = 'translateX(-300%)';
});
slide1right.addEventListener('click',function(){
    slide2.style.transform= 'translateX(-100%)';
});
slide2left.addEventListener('click',function(){
    slide1.style.transform = 'translateX(0%)';
    slide2.style.transform='translateX(100%)';
});
slide2right.addEventListener('click',function(){
    slide3.style.transform='translateX(-200%)';
});
slide3left.addEventListener('click',function(){
    slide3.style.transform='translateX(200%)';
    slide2.style.transform='translateX(-100%)';
});
slide3right.addEventListener('click',function(){
    slide4.style.transform='translateX(-300%)';
});
slide4left.addEventListener('click',function(){
    slide4.style.transform='translateX(300%)';
    slide3.style.transform='translateX(-200%)';
});
slide4right.addEventListener('click',function(){
    slide4.style.transform='translate(300%)';
    slide3.style.transform='translateX(200%)';
    slide2.style.transform='translateX(100%)';

});
