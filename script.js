const menuIcon= document.querySelector('#menu-icon');
const navbar= document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}
// personal skills
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points="";
    var rotate= 360 / dots;


    for(let i = 0; i < dots ;i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked= elem.querySelectorAll('.points');
        for(let i =0; i<percent; i++){
            pointsMarked[o].classList.add('marked')
        }
    
}) 
