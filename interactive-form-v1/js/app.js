$(document).ready( function(){
  // this will focus on the first textbox when page reloads
  $('#name').focus();
  // without this line of code the textbox will apear when the page reloads
  $('#other-title').hide();
  // This hide color label and select menu until a design is selected
  $('#colors-js-puns').hide();
});

// this function will help show input textbox when other job role is selected if not it will be hidden
$('#title').change( function() {
  if ($('#title option:selected').text() === 'Other') {
    $('#other-title').show();
    $("#other-title").attr("placeholder", "Your job role");
  } else {
    $('#other-title').hide();
  }
});

// this function will display the color label and select menu and hide certian colors depending on what design you choose
$('#design').change( function() {
  if ($('#design option:selected').text() === 'Theme - JS Puns') {
    $('#colors-js-puns').show();
    $('#color').val('cornflowerblue');
    $('#color option[value = cornflowerblue]').show();
    $('#color option[value = darkslategrey]').show();
    $('#color option[value = gold]').show();
    $('#color option[value = tomato]').hide();
    $('#color option[value = steelblue]').hide();
    $('#color option[value = dimgrey]').hide();
  } else if ($('#design option:selected').text() === 'Select Theme') {
    $('#colors-js-puns').hide();
  } else {
    $('#colors-js-puns').show();
    $('#color').val('tomato');
    $('#color option[value = cornflowerblue]').hide();
    $('#color option[value = darkslategrey]').hide();
    $('#color option[value = gold]').hide();
    $('#color option[value = tomato]').show();
    $('#color option[value = steelblue]').show();
    $('#color option[value = dimgrey]').show();
  }
});

// This function will show the total price of activities that have been checked
function addPrices() {
  let totalPrice = 0;
  $('.activities').append('<div id="priceDiv"></div>');
  let changePrice = function(addPrices){
    totalPrice += addPrices;
    document.getElementById('priceDiv').innerHTML = 'Total: $' + totalPrice;
  }

// from line 47-125 each checkbox has its own function when checked it will add or remove price and is placed into function addPrices
$('input[name=all]').click( function(){
  if (this.checked) {
    changePrice(200);
  } else {
    changePrice(-200);
  }
});

/*from line 57-103 are also checkbox functions but this time if these checkboxes are checked
it will strike through and dissable the checkbox that has the same day and time*/
$('input[name=js-frameworks]').click( function(){
  if (this.checked) {
    changePrice(100);
    $('input[name=express]').prop('disabled', true);
    $('label:contains("Express Workshop — Tuesday 9am-12pm, $100")').css('text-decoration', 'line-through');
  } else {
    changePrice(-100);
    $('label:contains("Express Workshop — Tuesday 9am-12pm, $100")').css('text-decoration', '');
    $('input[name=express]').prop('disabled', false);
  }
});

$('input[name=js-libs]').click( function(){
  if (this.checked) {
    changePrice(100);
    $('label:contains("Node.js Workshop — Tuesday 1pm-4pm, $100")').css('text-decoration', 'line-through');
    $('input[name=node]').prop('disabled', true);
  } else {
    changePrice(-100);
    $('label:contains("Node.js Workshop — Tuesday 1pm-4pm, $100")').css('text-decoration', '');
    $('input[name=node]').prop('disabled', false);
  }
});

$('input[name=express]').click( function(){
  if (this.checked) {
    changePrice(100);
    $('label:contains("JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100")').css('text-decoration', 'line-through');
    $('input[name=js-frameworks]').prop('disabled', true);
  } else {
    changePrice(-100);
    $('label:contains("JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100")').css('text-decoration', '');
    $('input[name=js-frameworks]').prop('disabled', false);
  }
});

$('input[name=node]').click( function(){
  if (this.checked) {
    changePrice(100);
    $('label:contains("JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100")').css('text-decoration', 'line-through');
    $('input[name=js-libs]').prop('disabled', true);
  } else {
    changePrice(-100);
    $('label:contains("JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100")').css('text-decoration', '');
    $('input[name=js-libs]').prop('disabled', false);
  }
});

$('input[name=node]').click( function(){
  if (this.checked) {
    changePrice(100);
  } else {
    changePrice(-100);
  }
});

$('input[name=build-tools]').click( function(){
  if (this.checked) {
    changePrice(100);
  } else {
    changePrice(-100);
  }
});

$('input[name=npm').click( function(){
  if (this.checked) {
    changePrice(100);
  } else {
    changePrice(-100);
  }
});
}
addPrices();

// These 3 lines of code set credit card payment option as default option
function cardClick() {
  if ($('#payment option[value="credit card"]').attr('selected', 'selected')) {
    $('#credit-card').show();
    $('div p').hide();
    valCardInput();
    valCard();
    valZip();
    valCvv();
  }
}
cardClick();
// This function will help select an option with its corresponding payment info
$('#payment').change( function(){
  if ($('#payment option:selected').text() === 'Credit Card') {
    $('#credit-card').show();
    $('div p').hide();
// This will return function to validate credit card textboxes if credit card is choosen as payment
  } else if ($('#payment option:selected').text() === 'PayPal') {
    $('div p:eq(-1)').hide();
    $('div p:eq(-2)').show();
    $('#credit-card').remove();
  } else if ($('#payment option:selected').text() === 'Bitcoin') {
    $('div p:eq(-1)').show();
    $('div p:eq(-2)').hide();
    $('#credit-card').remove();
  }
});


// when you click away from name textbox it will either show an error if blank or will display green borders when text is written inside.
$('#name').on('focusout',  function(){
  if ($('p:contains("Type in your name!!!")').length>0) {
    $('p:contains("Type in your name!!!")').hide();
  } if ($('#name').val() === '') {
    $('#name').css('border-color', '#ff0000');
    $('label:eq(0)').append('<p> Type in your name!!!</p>');
    $('#name').addClass('error');
  } else {
    $('#name').css('border-color', '#00ff0c');
    $('p:contains("Type in your name!!!")').html("");
    $('#name').removeClass('error');
  }
});

// this function will help validate if email is valid or not.
$('#mail').on('focusout',  function(){
  const emailInput = $('#mail').val();
  /* I was not able to find a solution, so I found this line of code on stackoverflow that will check if email pattern is correct
  here is the link https://stackoverflow.com/questions/9572254/validate-email-with-regex-jquery*/
  const pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  if ($('p:contains("Type in a valid email!!!")').length>0) {
    $('p:contains("Type in a valid email!!!")').hide();
  } if (!pattern.test(emailInput)) {
    $('#mail').css('border-color', '#ff0000');
    $('label:eq(1)').append('<p>Type in a valid email!!!</p>');
    $('#mail').addClass('error');
  } else {
    $('#mail').css('border-color', '#00ff0c');
    $('p:contains("Type in a valid email!!!")').html("");
    $('#mail').removeClass('error');
  }
});

// This will validate if credit card is between 13 and 16 digits if blank it will show a different message
function valCard() {
  $('#cc-num').focusout( function(){
    const cardLength = $('#cc-num').val().length;
  if ($('p:contains("Type in your card number!!!")').length>0 || $('p:contains("Credit card number must be between 13 and 16 digits!!!")').length>0 || $('p:contains("Please make sure you only have numbers in Card Number then click Register again.")').length>0 ) {
      $('p:contains("Type in your card number!!!")').hide();
      $('p:contains("Credit card number must be between 13 and 16 digits!!!")').hide();
      $('p:contains("Please make sure you only have numbers in Card Number then click Register again.")').hide();
  }if (isNaN($('#cc-num').val())) {
    $('#cc-num').css('border-color', '#ff0000');
    $('#credit-card').before('<p>Please make sure you only have numbers in Card Number then click Register again.</p>');
    $('#cc-num').addClass('error');
    $('p:contains("Credit card number must be between 13 and 16 digits!!!")').html("");
    $('p:contains("Type in your card number!!!")').html("");
  } else if ($('#cc-num').val() === '') {
    $('#cc-num').css('border-color', '#ff0000');
    $('#credit-card').before('<p> Type in your card number!!!</p>');
    $('#cc-num').addClass('error');
    $('p:contains("Please make sure you only have numbers in Card Number then click Register again.")').html("");
    } else if (cardLength >=13 && cardLength<=16) {
      $('#cc-num').css('border-color', '#00ff0c');
      $('p:contains("Type in your card number!!!")').html("");
      $('p:contains("Credit card number must be between 13 and 16 digits!!!")').html("");
      $('p:contains("Please make sure you only have numbers in Card Number then click Register again.")').html("");
      $('#cc-num').removeClass('error');
    } else {
      $('#cc-num').css('border-color', '#ff0000');
      $('#credit-card').before('<p>Credit card number must be between 13 and 16 digits!!!</p>');
      $('#cc-num').addClass('error');
    }
  });
}
// This will validate if zip code is 5 digits long
function valZip() {
  $('#zip').focusout( function(){
    const zipLength = $('#zip').val().length;
    if ($('p:contains("Zip code must be 5 digits long!!!")').length>0 || $('p:contains("Please make sure you only have numbers in Zip then click Register again.")').length>0 ) {
    $('p:contains("Zip code must be 5 digits long!!!")').hide();
    $('p:contains("Please make sure you only have numbers in Zip then click Register again.")').hide();
  }if (isNaN($('#zip').val())) {
    $('#zip').css('border-color', '#ff0000');
    $('#credit-card').before('<p>Please make sure you only have numbers in Zip then click Register again.</p>');
    $('p:contains("Zip code must be 5 digits long!!!")').html("");
    $('#cc-num').addClass('error');
  } else if (zipLength === 5) {
      $('#zip').css('border-color', '#00ff0c');
      $('p:contains("Zip code must be 5 digits long!!!")').html("");
      $('p:contains("Please make sure you only have numbers in Zip then click Register again.")').html("");
      $('#zip').removeClass('error');
    } else {
      $('#zip').css('border-color', '#ff0000');
      $('#credit-card').before('<p>Zip code must be 5 digits long!!!</p>');
      $('#zip').addClass('error');
    }
  });
}
// This will validate if credit card cvv is exactly 3 digits long
function valCvv() {
  $('#cvv').focusout( function(){
    const cvvLength = $('#cvv').val().length;
    if ($('p:contains("CVV must be exactly 3 digits long!!!")').length>0 || $('p:contains("Please make sure you only have numbers in CVV then click Register again.")').length>0 ) {
    $('p:contains("CVV must be exactly 3 digits long!!!")').hide();
    $('p:contains("Please make sure you only have numbers in CVV then click Register again.")').hide();
  } if (isNaN($('#cvv').val())) {
    $('#cvv').css('border-color', '#ff0000');
    $('#credit-card').before('<p>Please make sure you only have numbers in CVV then click Register again.</p>');
    $('p:contains("CVV must be exactly 3 digits long!!!")').html("");
    $('#cc-num').addClass('error');
  } else if (cvvLength === 3) {
      $('#cvv').css('border-color', '#00ff0c');
      $('p:contains("CVV must be exactly 3 digits long!!!")').html("");
      $('p:contains("Please make sure you only have numbers in CVV then click Register again.")').html("");
      $('#cvv').removeClass('error');
    } else {
      $('#cvv').css('border-color', '#ff0000');
      $('#credit-card').before('<p>CVV must be exactly 3 digits long!!!</p>');
      $('#cvv').addClass('error');
    }
  });
}

  $('button').on('click', function(){
    const checked = $('input[type="checkbox"]:checked').length;
  // This will display a message when texboxes are red.
    if ($('#name').hasClass('error') || $('#mail').hasClass('error') || $('.activities').hasClass('error') || $('#cc-num').hasClass('error') || $('#zip').hasClass('error') || $('#cvv').hasClass('error'))  {
      $('button').after('<p>Please check red input boxes and click Register again.</p>');
      event.preventDefault();
      $('p:contains("Please check if input boxes are filled in and click Register again.")').html("");
      $('p:contains("Please check at least one checkbox and click Register again.")').html("");
      $('p:contains("Please make sure you only have numbers in Card Number, Zip , and CVV, then click Register again.")').html("");

  // This will display a message if 1 or more textboxes are not filled in.
  } else if ($('#name').val()==='' || $('#mail').val()==='') {
      $('button').after('<p>Please check if input boxes are filled in and click Register again.</p>');
      event.preventDefault();
      $('p:contains("Please check red input boxes and click Register again.")').html("");
      $('p:contains("Please check at least one checkbox and click Register again.")').html("");
      $('p:contains("Please make sure you only have numbers in Card Number, Zip , and CVV, then click Register again.")').html("");

  // This will display a message if no checkboxes are checked.
    } else if (checked<1) {
      $('button').after('<p>Please check at least one checkbox and click Register again.</p>');
      event.preventDefault();
      $('p:contains("Please check red input boxes and click Register again.")').html("");
      $('p:contains("Please check if input boxes are filled in and click Register again.")').html("");
      $('p:contains("Please make sure you only have numbers in Card Number, Zip, and CVV, then click Register again.")').html("");
    }
});

function valCardInput() {
  $('button').on('click', function(){
    if ($('#cc-num').val()==='') {
      $('#cc-num').css('border-color', '#ff0000');
      $('button').after('<p>Please check if input boxes are filled in and click Register again.</p>');
      $('#cc-num').addClass('error');
    } else if ($('#zip').val()==='') {
      $('#zip').css('border-color', '#ff0000');
      $('button').after('<p>Please check if input boxes are filled in and click Register again.</p>');
      $('#zip').addClass('error');
    } else if ($('#cvv').val()==='') {
      $('#cvv').css('border-color', '#ff0000');
      $('button').after('<p>Please check if input boxes are filled in and click Register again.</p>');
      $('#cvv').addClass('error');
    } else {
      $('#cc-num').removeClass('error');
      $('#zip').removeClass('error');
      $('#cvv').removeClass('error');
    }
  })
}
