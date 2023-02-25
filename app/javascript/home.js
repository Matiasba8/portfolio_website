import './add_jquery'


$('body').on('click', '.toggle-menu', function(){
  console.log("toggle");
  $('#navbar').toggleClass('mobile-navbar');
  $('.btn-mobile-nav').toggleClass('active');
  $('.close-menu').show();
  $(this).hide();
});


$('body').on('click', '.close-menu', function(){
  console.log("close");
  $('#navbar').toggleClass('mobile-navbar');
  $('.btn-mobile-nav').toggleClass('active');
  $('.toggle-menu').show();
  $(this).hide();
});