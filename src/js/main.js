$('.header__menu').click(function(){
    $('.header__menu').toggleClass('is-open');
    $('.nav').toggleClass('is-open');
    $('.about__wrapper').toggleClass('is-hidden');
});

$('.nav').flowtype({
    minimum   : 481,
    maximum   : 2560,
    minFont   : 24,
    maxFont   : 60
});