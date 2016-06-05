(function ($) {
  $.fn.typedWords = function () {
    this.each(function (i, el) {
      var $el = $(el);
      var strings = $el.text().split('|');
      var typeSpeed = +$el.attr('data-type-speed') || 42;
      var loaded = false;

      $el.typed({
        strings: strings,
        typeSpeed: typeSpeed,
        backDelay: 1000,
        loop: true,
        contentType: 'html',
        preStringTyped: function () {
          // Avoid content flicker on load
          if (!loaded) {
            $el.css({visibility: 'visible'});
            loaded = true;
          }
        }
      });
    });
    return this;
  };
}(jQuery));
// Automatically init on page load
$(function () {
  $('.typed-words').typedWords();
})
