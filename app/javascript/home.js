import './add_jquery'

function disable_programming_lang_sliders(win_size){
  // if win width is smaller than 550px then we need to disable the slider content
  if (win_size.width() <= 550){
    $('.ruby-card-cc').find('.lang-card-container').addClass("disabled");
    $('.ruby-card-cc').addClass("disabled");

    $('.javascript-card-cc').find('.lang-card-container').addClass("disabled");
    $('.javascript-card-cc').addClass("disabled");

    $('.python-card-cc').find('.lang-card-container').addClass("disabled");
    $('.python-card-cc').addClass("disabled");
  }
  else{
    $('.ruby-card-cc').find('.lang-card-container').removeClass("disabled");
    $('.ruby-card-cc').removeClass("disabled");

    $('.javascript-card-cc').find('.lang-card-container').removeClass("disabled");
    $('.javascript-card-cc').removeClass("disabled");

    $('.python-card-cc').find('.lang-card-container').removeClass("disabled");
    $('.python-card-cc').removeClass("disabled");
  }
}

function activate_programming_lang_sliders_effects(){
  //Ruby
  $(".ruby-card-cc").on("mouseover", function () {
    $('.ruby-card-cc').addClass('active');
  });
  $(".ruby-card-cc").on("mouseleave", function () {
  setTimeout(function() {
    $('.ruby-card-cc').removeClass('active');
  }, 500);
  });

  //JavaScript
  $(".javascript-card-cc").on("mouseover", function () {
  $('.javascript-card-cc').addClass('active');
  });
  $(".javascript-card-cc").on("mouseleave", function () {
  setTimeout(function() {
  $('.javascript-card-cc').removeClass('active');
  }, 500);
  });

  //Python
  $(".python-card-cc").on("mouseover", function () {
  $('.python-card-cc').addClass('active');
  });
  $(".python-card-cc").on("mouseleave", function () {
  setTimeout(function() {
  $('.python-card-cc').removeClass('active');
  }, 500);
  });
}

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



  // Programming languages container if less 1200 we make it to row to column each element 
  if (win.width() <= 1200){
    $('.programming-languages-container').addClass("row");
  } 
  else{
    $('.programming-languages-container').removeClass("row");
  }

  disable_programming_lang_sliders(win);

});

activate_programming_lang_sliders_effects();

