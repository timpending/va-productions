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

  $(document).ready(function(){
    $('.datepicker').pickadate({
        dateFormat: 'mm/dd/yy',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5 // Creates a dropdown of 15 years to control year
      });

  }) // JQuery Document.Ready Closure
