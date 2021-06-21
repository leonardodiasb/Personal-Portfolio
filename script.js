let hamburguer = document.getElementById("hbg");
let xBtn = document.getElementById("x_btn");
let mobMenu = document.getElementById("mobile_menu");
let headline = document.getElementById("headline");
let navbar = document.getElementById("nav");

hamburguer.addEventListener('click', function() {
    mobMenu.style.display = 'flex';
    headline.style = 'filter: blur(6px);'
    navbar.style = 'filter: blur(6px);'
});

xBtn.addEventListener('click', function() {
    mobMenu.style.display = 'none';
    headline.style = ''
    navbar.style = ''
});