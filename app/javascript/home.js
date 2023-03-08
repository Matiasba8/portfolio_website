import './add_jquery'

// Toggle and untogle mobile navigations
$('body').on('click', '.toggle-menu', function(){
  $('#navbar').toggleClass('mobile-navbar');  // for styles
  $('.btn-mobile-nav').toggleClass('active'); // for styles
  $('.close-menu').show();                    // show close btn
  $(this).hide();                             // hide menu

  $('.usefull-links').attr('id', 'mobile');
});


$('body').on('click', '.close-menu', function(){
  $('#navbar').toggleClass('mobile-navbar');
  $('.btn-mobile-nav').toggleClass('active');
  $('.toggle-menu').show();
  $(this).hide();


  $('.usefull-links').attr('id', '');
});

// On resize less that 465 screen with we just delete the years experience, and when is more than 465 screen width we just added it back again
$(window).on('resize load', function(){
  var win = $(this); //this = window
  if (win.width() <= 465) { 

    $('.year-label').remove();

  }
  else{
    let year_label = $('.years-of-experience').find('.year-label')
    let container_year_exp = $('.years-of-experience')

    if (!year_label.length){ // not exist
      container_year_exp.append('<div class="year-label">year experience</div>')
    }
  }
});


// On mouse over ruby we just add col-12
$(".ruby-logo").on("mouseover", function () {
    $('.ruby-card-cc').addClass('active');
});
$(".ruby-logo").on("mouseleave", function () {
  setTimeout(function() {
    $('.ruby-card-cc').removeClass('active');
}, 800);
});

// On mouse over ruby we just add col-12
$(".javascript-logo").on("mouseover", function () {
  $('.javascript-card-cc').addClass('active');
});
$(".javascript-logo").on("mouseleave", function () {
setTimeout(function() {
  $('.javascript-card-cc').removeClass('active');
}, 800);
});