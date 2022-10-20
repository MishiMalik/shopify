// aos animation
AOS.init({
  duration:3000,
});

// modal on page load
$(document).ready(function(){
  $("#staticBackdrop-load").modal('show');
});

// open left menu
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
  document.getElementById("backdrop-menu").style.display="block"
}
// close-nav
function closeNav() {
  document.getElementById("left-menu").style.display = "none";
  document.getElementById("backdrop-menu").style.display="none"
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
        items:3.5,
    },
    340:{
      items:4.3,
  },
  500:{
items:5.1
  },
    767:{
        items:5.5,
    },
    1200:{
      items:6.5,
      
    },
    1360:{
        items:7.5,
      
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
// var scrollTop = 0;
// $(window).scroll(function(e){ 
//   var $el = $('.main-header'); 
//   var $el2 = $('.header'); 

//   var isPositionFixed = ($el.css('position') == 'fixed');
//   if ($(this).scrollTop() > 60 && !isPositionFixed){ 
//     $el.css({'position': 'fixed', 'top': '0px','left':'0','right':'0'}); 
//   }
//   if ($(this).scrollTop() < 60 && isPositionFixed){
//     $el.css({'position': 'sticky', 'top': '0px'}); 
//   } 

//   var isPositionFixed2 = false;
//   if(!isPositionFixed2) {
//     if($(this).scrollTop() < scrollTop) {
//       $('body').css('padding-top', '60px')
//       $el2.css('position', 'fixed');
//       isPositionFixed2 = true;
//       $el.css({'margin-top': '60px'}); 
//     }
//   }
//   scrollTop = $(this).scrollTop();

// });
// if (currentScrollTop < lastScrollTop) {
  //   darkHeader.addClass('dark-header');
  //   lightHeader.addClass('mt-60');
  // } else if (currentScrollTop > lastScrollTop) {
  //   darkHeader.removeClass('dark-header');
  //   lightHeader.removeClass('mt-60');
  // }

  // lastScrollTop = currentScrollTop;



$('.select-btn').click(function() {
  $(this).addClass('d-none');
  $(this).siblings('.selected-btn').removeClass('d-none')
})


$('.like').on('click', function() {
  $(this).addClass('fill');
  $(this).removeClass('like');
})
var prevScrollpos = window.pageYOffset;




// var lastScrollTop = 0;
// var lightHeader = $('.main-header');
// var darkHeader = $('.header');
// $(window).scroll(function(e){
//   var currentScrollTop = $(this).scrollTop();

//   if(currentScrollTop > 25) {
//     lightHeader.addClass('light-header');
//   }else if ((currentScrollTop < 25)) {
//     // lightHeader.removeClass('light-header');
//   }
  

// });
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if(currentScrollPos > 25) {
    document.getElementById("light-header").classList.add('light-header')
  }

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("body").style.paddingTop = "110px";
    document.getElementById("light-header").style.top = "60px";
    
  } else {
    document.getElementById("header").style.top = "-60px";
    document.getElementById("body").style.paddingTop = "0";
    document.getElementById("light-header").style.top = "0";
    
  }
  prevScrollpos = currentScrollPos;
}