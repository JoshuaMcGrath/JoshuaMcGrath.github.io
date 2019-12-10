(function($) {
  "use strict"; 


  $('.scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#navbarTop',
    offset: 100
  });

  var navbarCollapse = function() {
    if ($("#navbarTop").offset().top > 100) {
      $("#navbarTop").addClass("navbar-mobile");
    } else {
      $("#navbarTop").removeClass("navbar-mobile");
    }
  };
  navbarCollapse();

  $(window).scroll(navbarCollapse);




})(jQuery); 


$(document).ready(function () {
  
  $(".scroll").on('click', function (event) {

   
    if (this.hash !== "") {

      event.preventDefault();

    
      var hash = this.hash;

   
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

       
        window.location.hash = hash;
      });
    } 
  });

});


(function($) {

  if ($('.typewriter').length == 1) {
    var typed_strings = $('.typewrite-content').text();
    var typed = new Typed('.typewriter', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }
})(jQuery);
