// Start Nav Hover Actions
  var navPointer = function (elem) {
    if ($(elem).length) {
      var $thisa=$(elem).find("a")
      var x=$thisa.position().left+$thisa.width()/2-7;
    }
    $(".menubottri").stop(true,false).animate({left: x});
  }

  navPointer('.menu li.current-menu-item');

  $('.menu li').hover(
    function (event) {
      navPointer(this);
    },
    function (event) {
      navPointer('.menu li.current-menu-item');
    }
  );

// Start Collapse Navbar whilst Scrolling
  function collapseNavbar() {
      if ($(".navbar").offset().top > 100) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
          $(".brand").fadeIn(300);
          $(".brand").removeClass('hidden');
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
          $(".brand").fadeOut(310);
      }
  }

  $(window).scroll(collapseNavbar);
  $(document).ready(collapseNavbar);

// Page Scrolling Animation
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

// Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $(this).closest('.collapse').collapse('toggle');
  });
