$(function() {

  function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $('.navigation a, .scroll-to').click(function() {
    scrollToAnchor($(this).attr('data-scroll-to'));
    return false;
  });

  new WOW().init();

});