$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__first').eq(i).toggleClass('catalog-item__first_active');
            $('.catalog-item__second').eq(i).toggleClass('catalog-item__second_active');
        });
    });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__link-second');

// Скрипты модальных окон

  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('fast');
  });

  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
  });

  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('fast');
    })
  });

  // Плавный скролл вверх pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600){
      $('.pageup').fadeIn('fast');
    } else {
      $('.pageup').fadeOut('fast');
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false
  });

  // Валидация форм

  function validateForms(form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, укажите своё имя",
        phone: "Введите номер телефона",
        email: {
          required: "Введите свой электронный адрес",
          email: "Неправильно введён адрес почты"
        }
      }
    });
  
  };
  validateForms('#consultation-form');
  validateForms('#order form');
  validateForms('#consultation form');

});