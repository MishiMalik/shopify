var didScroll;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  // do stuff here...
}
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var st = $(this).scrollTop();