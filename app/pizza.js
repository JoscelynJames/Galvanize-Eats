$(document).ready(function() {
TweenMax.to(".slice", 0, {scale: 2, })
TweenMax.to(".pizza", 0, {scale: 2, })

TweenMax.to(".slice", 0, {x:0,y:75});

TweenMax.to(".slice", 3, {x:0,y:-20});

  $('.slice').hover(function() {
    $(this).css( 'cursor', 'pointer' );
  });

  $('.slice').on('click', function() {
    window.scroll(0, 700)
  })
});
