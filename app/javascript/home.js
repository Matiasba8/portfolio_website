import './add_jquery'


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

$(window).on('resize load', function(){
  var win = $(this); //this = window
  if (win.width() <= 465) { 

    $('.year-label').remove();

  }
  else{
    let year_label = $('.years-of-experience').find('.year-label')
    let container_year_exp = $('.years-of-experience')

    if (!year_label.length){ // not exist
      console.log("add year of experience label")
      container_year_exp.append('<div class="year-label">year experience</div>')
    }
  }
});