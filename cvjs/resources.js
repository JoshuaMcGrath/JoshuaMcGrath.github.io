
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
