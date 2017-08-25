$(document).ready(function() {
  const url = 'https://galvanize-eats-api.herokuapp.com/menu'
  var menu;
  var count = [];
  var array = [10.99, 8.99]
  var total;

  fetch(url)
  .then((response) => response.json())
  .then((data) => collectData(data))
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });

  function collectData(data) {
    menu = data.menu;

    for(var i = 0; i < menu.length; i++) {
      if(menu[i]['type'] === 'burger') {
        $('.burger-list').append('<option type="burger" data-name="' + menu[i]['name'] + '" data-price="' + menu[i]['price'] + '">'
        + menu[i]['name'] + ' ' + menu[i]['price']
        +'</option value="+  +">');
      } else {
        $('.pizza-list').append('<option type="pizza" data-name="' + menu[i]['name'] + '" data-price="' + menu[i]['price'] + '">'
        + menu[i]['name'] + ' ' + menu[i]['price']
        +'</option value="+  +">');
      }
    }
    $('.burger-list option:first').attr('selected', true);
    $('.pizza-list option:first').attr('selected', true);

    $('.ordering-section').on('click', function() {
      console.log('had');
      $('.pizza-svg').focus()
    })

    return data
  };

  $('.add-pizza-to-order').on('click', function(e) {
    var item = $('.pizza-list').find(':selected').data('name');
    var quantity = $('.pizza-quantity').val();
    var price = $('.pizza-list').find(':selected').data('price');

    if (quantity > 1) {
      price *= quantity;
    }
    total = count.reduce(function(sum, value) {
      return sum + value;
    }, price);
    $('.count').text(total.toFixed(2));
    $('.tax').text(tax.toFixed(2));
    $('.sub-total').text(subTotal.toFixed(2));
      count.push(price);
      $('.ordered-items').append('<div class="food-list"><li>'+ quantity +'</li><li class="name">'+ item +'</li><li class="price">'+ price +'</li></div>');
  });

  $('.add-burger-to-order').on('click', function(e) {
    var item = $('.burger-list').find(':selected').data('name');
    var quantity = $('.burger-quantity').val();
    var price = $('.burger-list').find(':selected').data('price');

    if (quantity > 1) {
      price *= quantity;
    }
    total = count.reduce(function(sum, value) {
      return sum + value;
    }, price);
    tax = total * .83;
    subTotal = total + tax;
    $('.count').text(total.toFixed(2));
    $('.tax').text(tax.toFixed(2));
    $('.sub-total').text(subTotal.toFixed(2));
    count.push(price);
    $('.ordered-items').append('<div class="food-list"><li>'+ quantity +'</li><li class="name">'+ item +'</li><li class="price">'+ price +'</li></div>');
  });

  function countFood() {
    var list = $('.food-list');
    var food = [];

    for (var i = 0; i < list.length; i++) {
      food.push(list[i].children[1].innerHTML);
    }
    return food
  }

  $('.deliver-button').on('click', function(e){
    e.preventDefault();
    var options = {
      order: countFood(),
      total: subTotal,
      name: $('.name').val(),
      number: $('.phone-number').val(),
      street: $('.street').val(),
      city: $('.city').val(),
      zip: $('.zip').val(),
    };

    $.post('https://galvanize-eats-api.herokuapp.com/orders', options)
      .done(function() {

      })
  })

})
