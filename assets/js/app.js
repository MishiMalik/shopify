

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
        // universal solution
        let dropdown = bootstrap.Dropdown.getInstance(this);
        $(dropdown._menu).insertAfter(carousel);

                // alternative for this particular layout
        // $(this).next('.dropdown-menu').insertAfter(carousel);
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
          items:3.3,
          
        },
        1360:{
            items:3.3,
          
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


// ==========================================================================select//selected toggle
$('.select-btn').click(function() {
  $(this).addClass('d-none');
  $(this).siblings('.selected-btn').removeClass('d-none')
})


// ==========================================================================heart fill/blank toggle
$('.like').on('click', function() {
  $(this).addClass('fill');
  $(this).removeClass('like');
})
var prevScrollpos = window.pageYOffset;



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


// ============================================================================categories-dropdown appear like popup
  var width = $(window).width();
  if (width < 991){
    $('.categories-dropdown').click(function() {
       $('.bi-caret-down-fill').css('display','none');
       $('.category-close').css('display','block')
      $(this).css('position','fixed');
      
      $(this).css('left','0');
      $(this).css('right','0');
      $(this).css('z-index','100');
      $('.header').css('z-index','0');
      $('.categories-dropdown').addClass('on');
      $(this).css('top','0');
      $(this).css('bottom','0');
      // $('body').css('overflow-y','hidden');
      // $(this).find('.accordion-collapse').addClass('show')
      $('.mobile-footer').css('z-index','0');
      $('#body').css('overflow-y','hidden');
      $('.absolute-icon').css('z-index','10');
    })
    $('.category-close').click(function(e) {
      e.stopPropagation();
      $('.bi-x-circle').css('display','none');
      $('.bi-caret-down-fill').css('display','block');
      // $('.listing-accordian').removeClass('listing-accordian-small');
      $('.categories-dropdown').css('position','relative');
      $('.categories-dropdown').removeClass('on');
       $('.categories-dropdown').css('top','100%');
      // $('.categories-dropdown').css('bottom','-100%');
      $('.categories-dropdown').css('z-index','1');
      // $('.listing-accordian-small').css('position','relative');
      $('.header').css('z-index','100');
      $('.mobile-footer').css('z-index','10');
      // $('body').css('overflow-y','auto');
      $(this).parents('.listing-accordian').find('.accordion-collapse').removeClass('show')
      $('#body').css('overflow-y','scroll');
      $('.absolute-icon').css('z-index','1');
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
  document.getElementById("right-menu").style.top = "10%";
  document.getElementById("backdrop-filter").style.display="block"
  document.getElementById("fix-filter-btns").style.position="fixed"
  document.getElementById("body").style.overflowY="hidden";

}
// ==================================================================close right filter
function closeFilter() {
  document.getElementById("right-menu").style.bottom = "-100%";
  document.getElementById("right-menu").style.top = "100%";
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
 document.getElementById("default-Feed").click();

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

// $('#arrow-toggle').on('click',function(){
//   if($(this).find('.bi').hasClass('bi-caret-down-fill')) {
//     $(this).find('.bi').removeClass('bi-caret-down-fill')
//     $(this).find('.bi').addClass('bi-caret-up-fill')
//   } else {
//     $(this).find('.bi').addClass('bi-caret-down-fill')
//     $(this).find('.bi').removeClass('bi-caret-up-fill')
//   }
// });

$( 'input[type="checkbox' ).on( 'click', function () {
  $(this).parent().toggleClass( 'highlight', this.checked );
});

// =================================================================write in input/show location
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

// if($('.classified-drop').attr("aria-expanded","true")){
//   $('.all-india-distt').css('display','none');
//   $('.find-locations').css('display','none');
//   // $('.locations-items').css('display','block');
// }
// $('.classified-drop').attr("aria-expanded","true");
// $('.select-hide').on('click',function(){
//   $('.all-india-distt').css('display','none');
//   $('.find-locations').css('display','none');
//   $('.locations-items').css('display','block');
// })
// $('.find-locations').on('click',function(){
//   $('.district-location').stopPropagation()
    
// })
// $('.district-location').on('click', function(e) {
//   e.stopPropagation()
// })




$(document).on('click', function() {
  $('.location-input').val('');
  $('.find-locations').css('display','none');
  $('.locations-items').css('display','block');
  $('.all-india-distt').css('display','none');
})





// ==========================quich-search
$('.quick-search').on('click',function(){
   $('.search-wrapper').css('display','block');
   $('body').css('overflow-y','hidden');
});

$('.close-search-wrapper').on('click',function(){
  $('body').css('overflow-y','auto');
});

$('.close-search-result-div').on('click',function(e){
  e.stopPropagation();
  $(this).parent().css('display','none');
  e.stopPropagation();
})

$('.search-input').keyup(function(){
  if($(this).val().length){
  $('.other-searches').css('display','none');
  $('.mic-icon').css('display','none');
  $('.send-icon').css('display','block');
  $('.search-results').css('display','block');
} else{
  $('.other-searches').css('display','block');
  $('.mic-icon').css('display','block');
  $('.send-icon').css('display','none');
  $('.search-results').css('display','none');
}
});