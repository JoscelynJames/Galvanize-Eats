$(document).ready(function() {
  // $('.hero-body').hide(3000);
  // $('.burger-gif').show();
  // $('.burger-gif').show();

  $('.main-button').mouseleave(function() {
    $(this).css('opacity', '.7');
    $(this).text('gFood - Delivered');
  })
  $('.main-button').mouseenter(function() {
    $(this).css('opacity', '1');
    $(this).text('Click me for Magic');
  })
})
