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
    changePrice(200);
  } else {
    changePrice(-200);
  }
});

$('input[name=npm').click( function(){
  if (this.checked) {
    changePrice(200);
  } else {
    changePrice(-200);
  }
});
}
addPrices();

// These 3 lines of code set credit card payment option as default option
$('#payment option[value="credit card"]').attr('selected', 'selected');
$('#credit-card').show();
$('div p').hide();

// This function will help select an option with its corresponding payment info
$('#payment').change( function(){
  if ($('#payment option:selected').text() === 'Credit Card') {
    $('#credit-card').show();
    $('div p').hide();
// This will return function to validate credit card textboxes if credit card is choosen as payment
    valPayment();
  } else if ($('#payment option:selected').text() === 'PayPal') {
    $('div p:eq(-1)').hide();
    $('div p:eq(-2)').show();
    $('#credit-card').hide();
  } else if ($('#payment option:selected').text() === 'Bitcoin') {
    $('div p:eq(-1)').show();
    $('div p:eq(-2)').hide();
    $('#credit-card').hide();
  }
});

// when you click away from name textbox it will either show an error if blank or will display green borders when text is written inside.
$('#name').on('focusout',  function(){
  if ($('#name').val() === '') {
    $('#name').css('border-color', '#ff0000');
    $('#name').before('<p> Type in your name!!!</p>');
    $('#name').addClass('error');
  } else {
    $('#name').css('border-color', '#00ff0c');
    $('p:contains("Type in your name!!!")').html("");
    $('#name').removeClass('error');
  }
});

// this function will help validate if email is valid or not.
$('#mail').on('focusout',  function(){
  var emailInput = $('#mail').val();
  /* I was not able to find a solution, so I found this line of code on stackoverflow that will check if email pattern is correct
  here is the link https://stackoverflow.com/questions/9572254/validate-email-with-regex-jquery*/
  var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  if (!pattern.test(emailInput)) {
    $('#mail').css('border-color', '#ff0000');
    $('#mail').before('<p> Type in a valid email!!!</p>');
    $('#mail').addClass('error');
  } else {
    $('#mail').css('border-color', '#00ff0c');
    $('p:contains("Type in a valid email!!!")').html("");
    $('#mail').removeClass('error');
  }
});

// This will validate if credit card is between 13 and 16 digits if blank it will show a different message
$('#cc-num').focusout( function(){
  const cardLength = $('#cc-num').val().length;
  if (cardLength >=13 && cardLength<=16) {
    $('#cc-num').css('border-color', '#00ff0c');
    $('p:contains("Type in your card number!!!")').html("");
    $('p:contains("Credit card number must be between 13 and 16 digits!!!")').html("");
    $('#cc-num').removeClass('error');
  } else if ($('#cc-num').val() === '') {
    $('#cc-num').css('border-color', '#ff0000');
    $('#credit-card').before('<p> Type in your card number!!!</p>');
    $('#cc-num').addClass('error');
  } else {
    $('p:contains("Type in your card number!!!")').html("");
    $('#cc-num').css('border-color', '#ff0000');
    $('#credit-card').before('<p>Credit card number must be between 13 and 16 digits!!!</p>');
    $('#cc-num').addClass('error');
  }
});

// This will validate if zip code is 5 digits long
$('#zip').focusout( function(){
  const zipLength = $('#zip').val().length;
  if (zipLength === 5) {
    $('#zip').css('border-color', '#00ff0c');
    $('p:contains("Zip code must be 5 digits long!!!")').html("");
    $('#zip').removeClass('error');
  } else {
    $('#zip').css('border-color', '#ff0000');
    $('#credit-card').before('<p>Zip code must be 5 digits long!!!</p>');
    $('#zip').addClass('error');
  }
});

// This will validate if credit card cvv is exactly 3 digits long
$('#cvv').focusout( function(){
  const cvvLength = $('#cvv').val().length;
  if (cvvLength === 3) {
    $('#cvv').css('border-color', '#00ff0c');
    $('p:contains("CVV must be exactly 3 digits long!!!")').html("");
    $('#cvv').removeClass('error');
  } else {
    $('#cvv').css('border-color', '#ff0000');
    $('#credit-card').before('<p>CVV must be exactly 3 digits long!!!</p>');
    $('#cvv').addClass('error');
  }
});

function valPayment() {
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
  } else if ($('#name').val()==='' || $('#mail').val()==='' || $('#cc-num').val()==='' || $('#zip').val()==='' || $('#cvv').val()==='') {
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

  //This will display a message if card number, zip code, or cvv number have letters in them.
    } else if (isNaN($('#cc-num').val()) || isNaN($('#zip').val()) || isNaN($('#cvv').val())) {
      $('button').after('<p>Please make sure you only have numbers in Card Number, Zip , and CVV, then click Register again.</p>');
      event.preventDefault();
      $('p:contains("Please check red input boxes and click Register again.")').html("");
      $('p:contains("Please check if input boxes are filled in and click Register again.")').html("");
      $('p:contains("Please check at least one checkbox and click Register again.")').html("");
    }
  });
}
