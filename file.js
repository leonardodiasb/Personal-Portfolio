const hamburguer = document.getElementById('hbg');
const xBtn = document.getElementById('x_btn');
const mobMenu = document.getElementById('mobile_menu');
const headline = document.getElementById('headline');
const navbar = document.getElementById('nav');

hamburguer.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
  headline.style = 'filter: blur(6px);';
  navbar.style = 'filter: blur(6px);';
});

xBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  headline.style = '';
  navbar.style = '';
});