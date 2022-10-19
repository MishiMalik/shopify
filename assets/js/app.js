// aos animation
AOS.init({
  duration:3000,
});

function leftMenu(evt, cityName) {
  var i,tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen1").click();


// open nav
function openNave(){
  document.getElementById("left-menu").style.left = "0";
  document.getElementById("left-menu").style.display = "block";
  document.getElementById("backdrop").style.display="block"
}
// close-nav
function closeNav() {
  document.getElementById("left-menu").style.display = "none";
  document.getElementById("backdrop").style.display="none"
}


// slider
$('.owl-carousel-slider').owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:2000,
    // autoplayHoverPause:true,
    dots:false,
    responsive:{
      
      0:{
        items:1.8,
      },
      330:{
        items:2.2
      },
      347:{
        items:2.2,
      },
      400:{
        items:2.2,
    },
      767:{
          items:4.3,
      },
      992:{
        items:2.7,
      },
      1200:{
        items:3.3,
        
      },
      1360:{
          items:3.3,
        
      }
  }
})



// categories
$('.categories-carousel').owlCarousel({
  loop:true,
  margin:10,
  // autoplay:true,
  // autoplayTimeout:2000,
  // autoplayHoverPause:true,
  dots:false,
  responsive:{
    0:{
        items:2.5,
    },
    340:{
      items:3.3,
  },
    767:{
        items:4.5,
    },
    1200:{
      items:5.5,
      
    },
    1360:{
        items:6.5,
      
    }
}
})



// my feeds tab
function myFeeds(evt, cityName) {
  var i, feedcontent, feedlinks;
  feedcontent = document.getElementsByClassName("feedcontent");
  for (i = 0; i < feedcontent.length; i++) {
    feedcontent[i].style.display = "none";
  }
  feedlinks = document.getElementsByClassName("feedlinks");
  for (i = 0; i < feedlinks.length; i++) {
    feedlinks[i].className = feedlinks[i].className.replace(" activeFeed", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " activeFeed";
}
document.getElementById("default-feed").click();


// make header static
$(window).scroll(function(e){ 
  var $el = $('.main-header'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 60 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px','left':'0','right':'0'}); 
  }
  if ($(this).scrollTop() < 60 && isPositionFixed){
    $el.css({'position': 'sticky', 'top': '0px'}); 
  } 
});