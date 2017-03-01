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
      var videoSrc = '';
      var videoID = '';
      // Video Modal Launch Listener
      $('.launch-modal').on('click', function(e){
          e.preventDefault();
          $( '#' + $(this).data('modal-id') ).modal();
          videoSrc = $( '#' + $(this).data('modal-id') ).attr('src');
          videoID = $(this).data('modal-id');
      });

      // Reset Video player on close
      $('.close').on('click', function(e){
        var videoSrc =  $( $('#'+videoID).find('.embed-responsive')[0].children[0])[0].src
        var iframeDiv = $( $('#'+videoID).find('.embed-responsive')[0].children[0])[0]
        iframeDiv.src = '';
        iframeDiv.src = videoSrc;
      });

  }) // JQuery Document.Ready Closure
