  var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//Show 'Back to Top' at halfway
$(window).scroll(function () { 
  if ($(window).scrollTop() > $('body').height() / 2) {
    $('#back-to-top').show();
  }
  else {
  	$('#back-to-top').hide();
  }
});


 $('.locations-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slick-nav'
});
$('.slick-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.locations-slick',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
