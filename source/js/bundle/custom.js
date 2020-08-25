 document.addEventListener("DOMContentLoaded", function(event) {
   // открытие меню
   var menuBtn = document.querySelector('.js-menu-btn');
   var navigationList = document.querySelector('.navigation__list');
   var navigationLink = document.querySelector('.navigation__link');

   menuBtn.addEventListener('click', function (){
     navigationList.classList.toggle('opened');
     menuBtn.classList.toggle('js-change');
   });

   navigationLink.addEventListener('click', function () {
     navigationList.classList.toggle('opened');
     menuBtn.classList.toggle('js-change');
   });

 });
