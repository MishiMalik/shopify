
$('.search-btn').on("click", function() {
  $('#notice-input').focus();
});
$("#notice-input").focusout(function() {
  $(document).click(function(e) 
{
    var container = $(".search-results");
    var inputSearch=$("#notice-input")
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target)) 
    {
      $('.search-results').css('display','none');
      $('#notice-input').focusout();
    }
    if(inputSearch.is(e.target)){
      $('.history-search').css('display','block');
    }
});

});

// =====================write review stars
 $(function () {
  $("div.star-rating > s, div.star-rating-rtl > s").on("click", function (e) {

      // remove all active classes first, needed if user clicks multiple times
      $(this).closest('div').find('.active').removeClass('active');

      $(e.target).parentsUntil("div").addClass('active'); // all elements up from the clicked one excluding self
      $(e.target).addClass('active');  // the element user has clicked on


      var numStars;
      if(e.target.tagName == 'P') {
        numStars = $(e.target).parentsUntil("div").length;
      } else {
        numStars = $(e.target).parentsUntil("div").length + 1;
      }
      $('.show-result').text(numStars + " .0");
  });
});











$(document).ready(function(){
  //length in characters
var maxLength = 340;
var ellipsestext = "...";
var moretext = "Read more";
var lesstext = "Read less";
$(".showReadMore").each(function(){
  //get the text of paragraph or div
  var myStr = $(this).text();
  
 // check if it exceeds the maxLength limit
  if($.trim(myStr).length > maxLength){
      //get only limited string firts to show text on page load
      var newStr = myStr.substring(0, maxLength);

      //get remaining string         
var removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
      // now append the newStr + "..."+ hidden remaining string
      var Newhtml = newStr + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="ReadMore">' + moretext + '</a></span>';

      $(this).html(Newhtml);
      
  }
});

//function to show/hide remaining text on ReadMore button click
$(".ReadMore").click(function(){
 
  if($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
  }
   else {
      $(this).addClass("less");
      $(this).html(lesstext);
  }
  
  $(this).parent().prev().toggle();
  $(this).prev().toggle();
  return false;
});
})
// ======================================================notification on/off
$('.noti-off-div').on('click',function(){
  $('.noti-off').css('display','block');
  $('.noti-on').css('display','none');
  $('.btn-off-alert').css('display','inline');
  $('.btn-on-alert').css('display','none');
})
$('.noti-on-div').on('click',function(){
  $('.noti-off').css('display','none');
  $('.noti-on').css('display','block');
  $('.btn-off-alert').css('display','none');
  $('.btn-on-alert').css('display','inline');
})

$('.alert-noti-off-div').on('click',function(){
  $('.alert-noti-off').css('display','block');
  $('.alert-noti-on').css('display','none');
  $('.btn-off-alert2').css('display','inline');
  $('.btn-on-alert2').css('display','none');
})
$('.alert-noti-on-div').on('click',function(){
  $('.alert-noti-off').css('display','none');
  $('.alert-noti-on').css('display','block');
  $('.btn-off-alert2').css('display','none');
  $('.btn-on-alert2').css('display','inline');
})
// ==========================================================read more / read less
$('.read-more').on('click',function(){
  $(this).css('display','none');
  $(this).siblings('.more-review').css('display','inline');
  $(this).siblings('.dots').css('display','none');
  $(this).siblings('.read-less').css('display','inline');
 })
 $('.read-less').on('click',function(){
  $(this).css('display','none');
  $(this).siblings('.more-review').css('display','none');
  $(this).siblings('.dots').css('display','inline');
  $(this).siblings('.read-more').css('display','inline');
 }) 
//============================================================open left menu tabs header
function leftMenuHeader(evt, cityName) {
  var i,tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent-header");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

//============================================================open left menu tabs
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

//============================================================================ open nav
function openNave(){
  document.getElementById("left-menu").style.left = "0";
  document.getElementById("backdrop-menu").style.display="block";
  document.getElementById("body").style.overflowY="hidden";
}
// ==============================================================================close-nav
function closeNav() {
  document.getElementById("left-menu").style.left = "-100%";
  document.getElementById("backdrop-menu").style.display="none"
  document.getElementById("body").style.overflowY="auto";
}
//=========================================================================== close loading backdrop
function closeLoading(){
    document.getElementById("loading").style.display="none";
    document.getElementById("body").style.overflowY="auto";
}

//==================================================================================image slider
$(function() {

  $('.owl-carousel-slider')
    .each(function() {
      let carousel = $(this);
      carousel.on('show.bs.dropdown', '[data-bs-toggle=dropdown]', function() {
        let dropdown = bootstrap.Dropdown.getInstance(this);
        $(dropdown._menu).insertAfter(carousel);

      });
    })
    .owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      responsive:{
        
        0:{
          items:1.8,
        },
        330:{
          items:1.5
        },
        347:{
          items:2.2,
        },
        500:{
          items:2.4,
      },
        767:{
            items:4.2,
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
    });

});


//==================================================================================post offer slider
$(function() {

  $('.owl-member-slider')
    .owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      responsive:{
        
        0:{
          items:1.8,
        },
        330:{
          items:1.5
        },
        347:{
          items:2.3,
        },
        500:{
          items:2.5,
      },
        767:{
            items:4.2,
        },
        992:{
          items:2.7,
        },
        1200:{
          items:2.3,
          
        },
        1360:{
            items:2.3,
          
        }
    }
    });

});
// $('.owl-carousel-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     // autoplay:true,
//     // autoplayTimeout:2000,
//     // autoplayHoverPause:true,
//     dots:false,
//     responsive:{
      
//       0:{
//         items:1.8,
//       },
//       330:{
//         items:2.1
//       },
//       347:{
//         items:2.2,
//       },
//       500:{
//         items:3.2,
//     },
//       767:{
//           items:4.3,
//       },
//       992:{
//         items:2.7,
//       },
//       1200:{
//         items:3.3,
        
//       },
//       1360:{
//           items:3.3,
        
//       }
//   }
// })



//==================================================================================== categories slider


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
      items:4.5,
  },
  500:{
items:4.7
  },
    767:{
        items:6.7,
    },
    1200:{
      items:6.5,
      
    },
    1360:{
        items:7.5,
      
    },
    1660:{
      items:8.5,
    
  }
}
})


// ==========================================================================select//selected toggle buttoms
$('.select-btn').click(function() {
  $(this).addClass('d-none');
  $(this).siblings('.selected-btn').removeClass('d-none')
})


// ==========================================================================heart fill/blank toggle icon
$('.like').on('click', function() {
  $(this).addClass('fill');
  $(this).removeClass('like');
})
$('.like2').on('click', function() {
  $(this).addClass('fill2');
  $(this).removeClass('like2');
})
$('.like-white').on('click', function() {
  $(this).addClass('fill-white');
  $(this).removeClass('like-white');
})
//===============================================================================button go to top

// let mybutton = document.getElementById("topBtn");
// let center=document.getElementById("center");
// center.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 || center.scrollTop > 100 ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
  document.getElementById("center").scrollTop=0;
}



// =====================================================================move header smoothly on small screen
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // scrollFunction()
  var currentScrollPos = window.pageYOffset ;

    if (currentScrollPos < prevScrollpos) {
        document.getElementById("header").style.top = "0";
    } else{
        document.getElementById("header").style.top = "-60px";
      
    }
    prevScrollpos = currentScrollPos;
  }


// ============================================================================categories-dropdown appear like popup on mobile
  var width = $(window).width();
  if (width < 991){
    $('.categories-dropdown').click(function() {
       $('.absolute-icon').css('display','none');
       $('.absolute-icon-close').css('display','block');
       $('.absolute-icon-close').css('z-index','10');
      $(this).css('position','fixed');
      $(this).css('left','0');
      $(this).css('right','0');
      $(this).css('z-index','10000');
      $('.header').css('z-index','0');
      $('.categories-dropdown').addClass('on');
      $(this).css('top','0');
      $(this).css('bottom','0');
      $('.mobile-footer').css('z-index','0');
      $('#body').css('overflow-y','hidden');
      
    })
    $('.category-close').click(function(e) {
      e.stopPropagation();
      $(this).css('display','none');
      $('.absolute-icon').css('display','block');
       $('.absolute-icon-close').css('display','none');
       $('.absolute-icon-close').css('z-index','-1');
      $('.categories-dropdown').css('position','relative');
      $('.categories-dropdown').removeClass('on');
       $('.categories-dropdown').css('top','100%');
      $('.categories-dropdown').css('z-index','1');
      $('.header').css('z-index','100');
      $('.mobile-footer').css('z-index','10');
      $(this).parents('.listing-accordian').find('.accordion-collapse').removeClass('show')
      $('#body').css('overflow-y','scroll');
     
    })
  };

  // ======================================================================select with checkboxes


(function($) {
  var CheckboxDropdown = function(el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find('.dropdown-label');
    this.$label2 = this.$el.find('.header-view-all');
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');
    
    this.onCheckBox();
    
    this.$label.on('click', function(e) {
      e.preventDefault();
      _this.toggleOpen();
    });
    
    this.$checkAll.on('click', function(e) {
      e.preventDefault();
      _this.onCheckAll();
    });
    
    this.$inputs.on('change', function(e) {
      _this.onCheckBox();
    });
  };
  
  CheckboxDropdown.prototype.onCheckBox = function() {
    this.updateStatus();
  };
  
  CheckboxDropdown.prototype.updateStatus = function() {
    var checked = this.$el.find(':checked');
    
    this.areAllChecked = false;
    this.$checkAll.html('Check All');
    
    if(checked.length <= 0) {
     this.$label.html(this.$label2.val());
    }
    else if(checked.length === 1) {
      this.$label.html(checked.parent('label').text());
    }
    else if(checked.length === this.$inputs.length) {
      this.$label.html('All Selected');
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
    }
    else {
      this.$label.html(checked.length + ' Selected');
    }
  };
  
  CheckboxDropdown.prototype.onCheckAll = function(checkAll) {
    if(!this.areAllChecked || checkAll) {
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
      this.$inputs.prop('checked', true);
    }
    else {
      this.areAllChecked = false;
      this.$checkAll.html('Check All');
      this.$inputs.prop('checked', false);
    }
    
    this.updateStatus();
  };
  
  CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
    var _this = this;
    
    if(!this.isOpen || forceOpen) {
       this.isOpen = true;
       this.$el.addClass('on');
      $(document).on('click', function(e) {
        if(!$(e.target).closest('[data-control]').length) {
         _this.toggleOpen();
        }
      });
    }
    else {
      this.isOpen = false;
      this.$el.removeClass('on');
      $(document).off('click');
    }
  };
  
  var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
  for(var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
})(jQuery);


// =====================================================================custome select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
    

  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}


$('.select-items').on('click', function(e) {
  e.stopPropagation()
})

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



// ============================================================ open right filter

function openFilter(){
  document.getElementById("right-filter").style.bottom= "0";
  document.getElementById("right-menu").style.opacity = "1";
  document.getElementById("right-menu").style.top = "10%";
 
  document.getElementById("backdrop-filter").style.display="block"
  document.getElementById("fix-filter-btns").style.position="fixed"
  document.getElementById("body").style.overflowY="hidden";

}
// ==================================================================close right filter
function closeFilter() {
  document.getElementById("right-menu").style.bottom = "-100%";
  document.getElementById("right-menu").style.top = "100%";
  document.getElementById("right-menu").style.opacity = "-5";
  document.getElementById("backdrop-filter").style.display="none"
  document.getElementById("fix-filter-btns").style.position="relative"
  document.getElementById("body").style.overflowY="auto";
}


// =========================================================================accordians
$('.accordian-select-all').click(function() {
  $('.accordion-collapse.show').find('.form-check-input').prop('checked', true)
})

$('.accordian-clear-all').click(function() {
  $('.accordion-collapse.show').find('.form-check-input').prop('checked', false)
})

$('.accordion-collapse').find('.form-check-input').each(function() {
  $(this).change(function() {
    $('.accordian-total-checked').text($('.accordion-collapse.show').find('.form-check-input:checked').length + 'Checked')
  })
})


//============================================================================ my Feeds tab
function myFeeds(evt, cityName) {
  var i, Feedcontent, Feedlinks;
  Feedcontent = document.getElementsByClassName("Feedcontent");
  for (i = 0; i < Feedcontent.length; i++) {
    Feedcontent[i].style.display = "none";
  }
  Feedlinks = document.getElementsByClassName("Feedlinks");
  for (i = 0; i < Feedlinks.length; i++) {
    Feedlinks[i].className = Feedlinks[i].className.replace(" activeFeed", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " activeFeed";
}
 if(document.getElementById("default-Feed")){
  document.getElementById("default-Feed").click();
 }

// when click on follow /hide follow btn// show follow icon
 $('.follow-person-icon').on('click', function() {
  $(this).css('display', 'none')
  $(this).parent().next('.image-card-text').find('.follow-icon').removeClass('d-none')
 })

// ==============================================================cremove card you may follow
 $(document).ready(function() {
  $('.close-wants, .may-want-follow').click(function() {
    $(this).closest('.owl-item').remove()
   })
 })

//  ==============================================================reomove member in right menu
$(document).ready(function() {
  $('.remove-member, .follow-card-btn').click(function() {
    $(this).closest('.follow-card-people').remove()
   })
 })

  // ==========================================================change checked label color

  $( '.dropdown-list' ).on( 'click', 'input[type="checkbox"]', function () {
    $(this).parent().toggleClass( 'highlight', this.checked );
});


$( 'input[type="checkbox' ).on( 'click', function () {
  $(this).parent().toggleClass( 'highlight', this.checked );
});

// =================================================================show location
$('.location-input').keyup(function(){
  if($(this).val().length){
  $('.find-locations').css('display','block');
  $('.locations-items').css('display','none');
  $('.all-india-distt').css('display','none');

} else{
  $('.locations-items').css('display','block');
  $('.find-locations').css('display','none');
  $('.all-india-distt').css('display','none');
 
}
});

$('.recent-locations').find('li').each(function() {
  $(this).click(function() {
    $('.location-selected').html($(this).text().split(',')[0]);
    $('.location-input').val('');
    $('.find-locations').css('display','none');
    $('.locations-items').css('display','block');
    $('.all-india-distt').css('display','none');
  })
})

$('.all-distt').on('click', function(e) {
  e.stopPropagation()
})

$('.district-location').on('click',function(){
  $('.locations-items').css('display','none');
  $('.all-india-distt').css('display','block');
  $('.back-dist').css('opacity','1');
  $('.back-dist').css('font-size','20px');
  $('.back-dist').css('margin-right','10px');
  $('.close-location').css('display','none')
})
$('.back-dist').on('click', function(e) {
  e.stopPropagation()
})
$('.back-dist').on('click',function(){
  $('.locations-items').css('display','block');
  $('.all-india-distt').css('display','none');
  $('.back-dist').css('opacity','0');
  $('.back-dist').css('margin-right','0px');

  $('.back-dist').css('font-size','0px');
  $('.close-location').css('display','block');
})


// ==========================================================quich-search
$('.quick-search').on('click',function(){
   $('.search-wrapper').css('display','block');
   $('body').css('overflow-y','hidden');
});

$('.close-search-wrapper').on('click',function(){
  $('body').css('overflow-y','auto');
});

$('.close-search-result-div').on('click',function(e){
  // e.stopPropagation();
  e.preventDefault();
  $(this).parent().css('display','none');
})
// $('search-input').mouseup(function() {
//   $('.history-search').css('display','block');
// });
$(".search-input").focus(function() {
  $('.history-search').css('display','block');
  $('.other-searches').css('display','none');
});
// $(".search-input").focusout(function() {
//   $('.history-search').css('display','none');
// });

$('.search-input').keyup(function(){
  if($(this).val().length){
  $('.mic-icon').css('display','none');
  $('.send-icon').css('display','block');
  $('.suggestion-search').css('display','block');
  $('.history-search').css('display','none');
} else{
  $('.other-searches').css('display','block');
  $('.mic-icon').css('display','block');
  $('.send-icon').css('display','none');
  $('.suggestion-search').css('display','none');
  $('.history-search').css('display','block');
}
});


// ==================================================show more and less button
function moreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// ===============================================================close curent tab
function close_window() {
  // if (confirm("Close Window?")) {
    close();
  // }
}
// ==============================================================video mute/unmute
setInterval(() => {
  if($('#videopopbtn').is(':visible')) {
    $('#videopopbtn').find('video').prop('muted', false)
  } else {
    $('#videopopbtn').find('video').prop('muted', true)
  }
}, 1000)
