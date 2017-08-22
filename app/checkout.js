$(document).ready(function() {
  const url = 'https://galvanize-eats-api.herokuapp.com/menu'
  var menu;

  fetch(url)
  .then((response) => response.json())
  .then(function collectData(data) {
    menu = data.menu;
    for(var i = 0; i < menu.length; i++) {
      if(menu[i]['type'] === 'burger') {
        $('.burger-list').append('<option type="burger">'
        + menu[i]['name'] + ' ' + menu[i]['price']
        +'</option value="+  +">');
      } else {
        $('.pizza-list').append('<option type="pizza">'
        + menu[i]['name'] + ' ' + menu[i]['price']
        +'</option>')
      }
    }
    $('.burger-list option:first').attr('selected', true)
    $('.pizza-list option:first').attr('selected', true)
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });

  $('.add-pizza-to-order').on('click', function(e) {
    var item2 = $('.pizza-list').val();
    var quantity = $('.pizza-quantity').val();

      $('.ordered-items').append('<span>'+ item2 +'</span>')
  })

  $('.add-burger-to-order').on('click', function(e) {
      var item1 = $('.burger-list').val();
      var quantity = $('.burger-quantity').val();

        $('.ordered-items').append('<span>'+ quantity, item1 +'</span>')
        console.log(quantity);
  })

  function subTotal() {

  }
})
