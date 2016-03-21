// Nav
$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});


// Parallax
$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmF2XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgdmFyIG1lbnVUb2dnbGUgPSAkKCcjanMtY2VudGVyZWQtbmF2aWdhdGlvbi1tb2JpbGUtbWVudScpLnVuYmluZCgpO1xuICAkKCcjanMtY2VudGVyZWQtbmF2aWdhdGlvbi1tZW51JykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuXG4gIG1lbnVUb2dnbGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcjanMtY2VudGVyZWQtbmF2aWdhdGlvbi1tZW51Jykuc2xpZGVUb2dnbGUoZnVuY3Rpb24oKXtcbiAgICAgIGlmKCQoJyNqcy1jZW50ZXJlZC1uYXZpZ2F0aW9uLW1lbnUnKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICQoJyNqcy1jZW50ZXJlZC1uYXZpZ2F0aW9uLW1lbnUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cbi8vIFBhcmFsbGF4XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgaWYgKCQoXCIjanMtcGFyYWxsYXgtd2luZG93XCIpLmxlbmd0aCkge1xuICAgIHBhcmFsbGF4KCk7XG4gIH1cbn0pO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGUpIHtcbiAgaWYgKCQoXCIjanMtcGFyYWxsYXgtd2luZG93XCIpLmxlbmd0aCkge1xuICAgIHBhcmFsbGF4KCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwYXJhbGxheCgpe1xuICBpZiggJChcIiNqcy1wYXJhbGxheC13aW5kb3dcIikubGVuZ3RoID4gMCApIHtcbiAgICB2YXIgcGx4QmFja2dyb3VuZCA9ICQoXCIjanMtcGFyYWxsYXgtYmFja2dyb3VuZFwiKTtcbiAgICB2YXIgcGx4V2luZG93ID0gJChcIiNqcy1wYXJhbGxheC13aW5kb3dcIik7XG5cbiAgICB2YXIgcGx4V2luZG93VG9wVG9QYWdlVG9wID0gJChwbHhXaW5kb3cpLm9mZnNldCgpLnRvcDtcbiAgICB2YXIgd2luZG93VG9wVG9QYWdlVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIHZhciBwbHhXaW5kb3dUb3BUb1dpbmRvd1RvcCA9IHBseFdpbmRvd1RvcFRvUGFnZVRvcCAtIHdpbmRvd1RvcFRvUGFnZVRvcDtcblxuICAgIHZhciBwbHhCYWNrZ3JvdW5kVG9wVG9QYWdlVG9wID0gJChwbHhCYWNrZ3JvdW5kKS5vZmZzZXQoKS50b3A7XG4gICAgdmFyIHdpbmRvd0lubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBwbHhCYWNrZ3JvdW5kVG9wVG9XaW5kb3dUb3AgPSBwbHhCYWNrZ3JvdW5kVG9wVG9QYWdlVG9wIC0gd2luZG93VG9wVG9QYWdlVG9wO1xuICAgIHZhciBwbHhCYWNrZ3JvdW5kVG9wVG9XaW5kb3dCb3R0b20gPSB3aW5kb3dJbm5lckhlaWdodCAtIHBseEJhY2tncm91bmRUb3BUb1dpbmRvd1RvcDtcbiAgICB2YXIgcGx4U3BlZWQgPSAwLjM1O1xuXG4gICAgcGx4QmFja2dyb3VuZC5jc3MoJ3RvcCcsIC0gKHBseFdpbmRvd1RvcFRvV2luZG93VG9wICogcGx4U3BlZWQpICsgJ3B4Jyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
