// STICKY NAV
$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('header').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
  }
});

// WOW JS INITIALIZING
new WOW().init();





// HOME CAROUSEL
// $('.custom1').owlCarousel({
//     loop: true,
//     animateOut: 'slideOutDown',
//     animateIn: 'flipInX',
//     items:1,
//     margin:30,
//     stagePadding:30,
//     smartSpeed:45,
//     autoplay: 1000,
// });


// EKKO LIGHT-BOX
$('.port-item').click(function () {
    $('.collapse').collapse('hide');
});


$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});