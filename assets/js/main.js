const active = document.querySelectorAll('.menu-itmes li');
const activeBar = document.querySelectorAll('.menu-section ul li');
active.forEach(active => {
  active.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
        active.classList.add('active');
  })  
});

active[1].addEventListener('click', function () {
  document.querySelector('#rotate').classList.toggle('rotate');
  document.querySelector('.menu-drop').classList.toggle('display');
})
const showMenu = document.querySelector('.menu h6');

showMenu.addEventListener('click', function () {
  document.querySelector('.menu-itmes').classList.toggle('show-menu');
  document.querySelector('.menu-itmes').classList.toggle('hide-menu');

})