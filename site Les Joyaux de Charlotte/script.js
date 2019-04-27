(function($) {

  $('.feedly-list-item > a').each(function(){
    $(this).on('click', function(){      
      if ( $(this).hasClass('on') ) {
      $(this).removeClass('on').addClass('off');
      } else {
      $(this).removeClass('off').addClass('on');
      } 
      return false;      
    });
  });
})
