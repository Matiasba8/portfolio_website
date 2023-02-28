import './add_jquery'


$('body').on('click', '.toggle-menu', function(){
  console.log("toggle");
  $('#navbar').toggleClass('mobile-navbar');  // for styles
  $('.btn-mobile-nav').toggleClass('active'); // for styles
  $('.close-menu').show();                    // show close btn
  $(this).hide();                             // hide menu

  $('.usefull-links').attr('id', 'mobile');
});


$('body').on('click', '.close-menu', function(){
  console.log("close");
  $('#navbar').toggleClass('mobile-navbar');
  $('.btn-mobile-nav').toggleClass('active');
  $('.toggle-menu').show();
  $(this).hide();

  // if (!($(window).width() > 530)){
  // }
  $('.usefull-links').attr('id', '');
});
