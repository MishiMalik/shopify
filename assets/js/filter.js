// =====================================================================filter list tabs
function filterTabs(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("filters-list-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("filters-list-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" filters-list-active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " filters-list-active";
  }
  document.getElementById("default-filter").click();
  
// ==================================================filter tags
$('.filter-checkboxes').each(function() {
    $(this).on('click', function() {
      if($('.filter-checkboxes:not(:checked)').length == $('.filter-checkboxes').length) {
        $('.zones-right-filter').addClass('d-none')
      }
  
      if($(this).is(':checked')){
        $('.zones-right-filter').removeClass('d-none')
        $('.tags-div').append('<div class="fiter-selected-tag my-1"><p class="mb-0 pb-0 ">'+ $(this).parent('label').text() +'</p><i class="fas fa-times f-12 ms-2"></i></div>');
      } else {
        $('.fiter-selected-tag:contains('+ $(this).parent('label').text() +')').remove();
      }
    })
  })
  
  // $('.tags-div .fa-times').each(function() {
  //   $(this).on('click', function() {
  //     $(this).parent().eq(0).remove()
  //   })
  // })
  
  $('.tags-div').delegate('.fa-times', 'click', function() {
    $(this).parent().eq(0).remove()
    $('.filters-list-tabcontent label:contains('+ $(this).prev().text() +')').find('input').prop('checked', false);
  
    if($('.tags-div .fa-times').length == 0) {
      $('.zones-right-filter').addClass('d-none')
    }
  })
  // ==========================================================change checked label color
  // $("input[type=checkbox]").on('click', function(){
  //   $(this).parent().css('color','#0033cc');
  // })
  $( '.dropdown-list' ).on( 'click', 'input[type="checkbox"]', function () {
    $(this).parent().toggleClass( 'highlight', this.checked );
});
$('.dropdown-multiple').on('click',function(){
  $(this).find('.bi-caret-down-fill').toggleClass('bi-caret-down-fill-rotate');
})