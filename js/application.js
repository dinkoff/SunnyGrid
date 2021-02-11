$(document).ready(function(){  
  // Mobile Checkbox add class to the body
  $('#toggle_nav').change(function() {
    if ($(this).is(':checked')) {
      $('body').addClass('navi_open');
    } else {
      $('body').removeClass('navi_open');
    }
  });

  // Sticky header
  (function ($) {
    $.fn.stickyHeader = function () {
      var $navCont = $(this);
      var $navHeight = $navCont.outerHeight();

      $navCont.on("MakeItStick", function (event) {
        $navCont.addClass('sticky_nav');
      });

      $navCont.css({ 'height': $navHeight }).trigger("MakeItStick");
    };
  })(jQuery);

  $('#header').stickyHeader();

	// fancy scroll button
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
          scrollTop: target.offset().top
          }, 1000);
          return false;
        }
		  }
		});
  });
  
  // Toggle popup
  var $popup_trigger = $('.popup_toggle');
  var $popup_close = $('.popup_wrap .close_btn');

  $popup_trigger.on('click', function () {
    var $popup_location = $(this).attr('href');

    $('.popup_wrap').removeClass('active_pop');
    $('.popup_wrap' + $popup_location).addClass('active_pop');
    $('body').css('overflow-y', 'hidden');
    $('html').css('overflow-y', 'hidden');
  });

  $popup_close.on('click', function () {
    $(this).closest('.popup_wrap').removeClass('active_pop');
    $('body').css('overflow-y', '');
    $('html').css('overflow-y', '');
  });
});
