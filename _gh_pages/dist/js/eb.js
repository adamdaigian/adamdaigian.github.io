$(document).ready(function() {

  //mixpanel track
  $('[track]').click(function () {
    mixpanel.track($(this).attr("track"))  
  });

  $('.hex-nav').hover(function () {
    $('.fa').addClass('blue');
    $('.hexagon').addClass('white');
  });

  $('.hex-fa').hover(function () {
    console.log('hello world');
    $('.fa').addClass('blue');
    $('.hexagon').addClass('white');
  });
});