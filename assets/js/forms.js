
// ==========================================================select with checkboxes
(function ($) {
  var CheckboxDropdown = function (el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find('.dropdown-label');
    this.$label2 = this.$el.find('.header-view-all');
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');

    this.onCheckBox();

    this.$label.on('click', function (e) {
      e.preventDefault();
      _this.toggleOpen();
    });

    this.$checkAll.on('click', function (e) {
      e.preventDefault();
      _this.onCheckAll();
    });

    this.$inputs.on('change', function (e) {
      _this.onCheckBox();
    });
  };

  CheckboxDropdown.prototype.onCheckBox = function () {
    this.updateStatus();
  };

  CheckboxDropdown.prototype.updateStatus = function () {
    var checked = this.$el.find(':checked');

    this.areAllChecked = false;
    this.$checkAll.html('Check All');

    if (checked.length <= 0) {
      this.$label.html(this.$label2.val());
    }
    else if (checked.length === 1) {
      this.$label.html(checked.parent('label').text());
    }
    else if (checked.length === this.$inputs.length) {
      this.$label.html('All Selected');
      this.areAllChecked = true;
      this.$checkAll.html('Uncheck All');
    }
    else {
      this.$label.html(checked.length + ' Selected');
    }
  };

  CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
    if (!this.areAllChecked || checkAll) {
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

  CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
    var _this = this;

    if (!this.isOpen || forceOpen) {
      this.isOpen = true;
      this.$el.addClass('on');
      $(document).on('click', function (e) {
        if (!$(e.target).closest('[data-control]').length) {
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
  for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
})(jQuery);





// =================================================================show location
$('.location-input').keyup(function () {
  if ($(this).val().length) {
    $('.find-locations').css('display', 'block');
    $('.locations-items').css('display', 'none');
    $('.all-india-distt').css('display', 'none');

  } else {
    $('.locations-items').css('display', 'block');
    $('.find-locations').css('display', 'none');
    $('.all-india-distt').css('display', 'none');

  }
});

$('.recent-locations').find('li').each(function () {
  $(this).click(function () {
    $('.location-selected').html($(this).text().split(',')[0]);
    $('.location-input').val('');
    $('.find-locations').css('display', 'none');
    $('.locations-items').css('display', 'block');
    $('.all-india-distt').css('display', 'none');
  })
})

$('.all-distt').on('click', function (e) {
  e.stopPropagation()
})

$('.district-location').on('click', function () {
  $('.locations-items').css('display', 'none');
  $('.all-india-distt').css('display', 'block');
  $('.back-dist').css('opacity', '1');
  $('.back-dist').css('font-size', '20px');
  $('.back-dist').css('margin-right', '10px');
  $('.close-location').css('display', 'none')
})
$('.back-dist').on('click', function (e) {
  e.stopPropagation()
})
$('.back-dist').on('click', function () {
  $('.locations-items').css('display', 'block');
  $('.all-india-distt').css('display', 'none');
  $('.back-dist').css('opacity', '0');
  $('.back-dist').css('margin-right', '0px');

  $('.back-dist').css('font-size', '0px');
  $('.close-location').css('display', 'block');
})
$(document).on('click', function () {
  $('.location-input').val('');
  $('.find-locations').css('display', 'none');
  $('.locations-items').css('display', 'block');
  $('.all-india-distt').css('display', 'none');
})
// ===============================================================close curent tab
function close_window() {
  close();
}
// =================================================move header smoothly on small screen
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  // scrollFunction()
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos < prevScrollpos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-60px";

  }
  prevScrollpos = currentScrollPos;
}


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
    c.addEventListener("click", function (e) {
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
  a.addEventListener("click", function (e) {
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

// ==================================================categories-dropdown appear like popup
var width = $(window).width();
if (width < 991) {
  $('.categories-dropdown').click(function () {
    $('.absolute-icon').css('display', 'none');
    $('.absolute-icon-close').css('display', 'block');
    $('.absolute-icon-close').css('z-index', '10');
    $(this).css('position', 'fixed');
    $(this).css('left', '0');
    $(this).css('right', '0');
    $(this).css('z-index', '10000');
    $('.header').css('z-index', '0');
    $('.categories-dropdown').addClass('on');
    $(this).css('top', '0');
    $(this).css('bottom', '0');
    $('.mobile-footer').css('z-index', '0');
    $('#body').css('overflow-y', 'hidden');

  })
  $('.category-close').click(function (e) {
    e.stopPropagation();
    $(this).css('display', 'none');
    $('.absolute-icon').css('display', 'block');
    $('.absolute-icon-close').css('display', 'none');
    $('.absolute-icon-close').css('z-index', '-1');
    $('.categories-dropdown').css('position', 'relative');
    $('.categories-dropdown').removeClass('on');
    $('.categories-dropdown').css('top', '100%');
    $('.categories-dropdown').css('z-index', '1');
    $('.header').css('z-index', '100');
    $('.mobile-footer').css('z-index', '10');
    $(this).parents('.listing-accordian').find('.accordion-collapse').removeClass('show')
    $('#body').css('overflow-y', 'scroll');

  })
};

// =======================================================================tabs
function formtabs(evt, cityName) {
  console.log("Clicked")
  var i, zonestabcontent, zonestablinks;
  zonestabcontent = document.getElementsByClassName("zonestabcontent");
  for (i = 0; i < zonestabcontent.length; i++) {
    zonestabcontent[i].style.display = "none";
  }
  zonestablinks = document.getElementsByClassName("formtablinks");
  for (i = 0; i < zonestablinks.length; i++) {
    zonestablinks[i].className = zonestablinks[i].className.replace(" activeform", "");
  }
  document.getElementById(cityName).style.display = "block";
  if(evt.currentTarget) {
    evt.currentTarget.className += " activeform";
    if (evt.currentTarget.classList.contains('blank-form-btn')) {
      document.getElementById('media-btn').className += ' activeform'
    }
  }
  
}
if ($(window).width() < 991) {
  // $("#defaultOpenform").click();
  document.getElementById('media').style.display = "block";
}
else {
  // $("#defaultOpenform2").click();
  document.getElementById('details').style.display = "block";

}

