 $(function(){

   $('.js-menu-btn').click(function() {
     $('.navigation__list').toggleClass('opened'); // Открываем верхнее меню
     $('.js-menu-btn').toggleClass('js-change'); // Меняем икноку на кнопке
   });

   $('.navigation__link').click(function() {
     $('.navigation__list').toggleClass('opened'); // Открываем верхнее меню
     $('.js-menu-btn').toggleClass('js-change'); // Меняем икноку на кнопке
   });

   $('.odometer').html(123);
});
