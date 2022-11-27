

 // ====================================click on follow appear following
$(".follow-btn-member").on('click',function(){
  $(this).css('display','none');
  $('.following-btn-member').css('display','block');
})
$('.unfollow-member').on('click',function(){
  $('.follow-btn-member').css('display','block');
  $('.following-btn-member').css('display','none');
})
// ====================================click on alert appear alert on
$(".alert-btn").on('click',function(){
  $(this).css('display','none');
  $('.alert-on-btn').css('display','block');
})
$('.alert-of').on('click',function(){
  $('.alert-btn').css('display','block');
  $('.alert-on-btn').css('display','none');
})
 //  ==================================================directory follow-icon
$('.follow-directory').on('click',function(){
  $(this).css('display','none');
   $(this).siblings('.follow-directory-icon').css('display','block');
  // $('.follow-directory-icon').css('display','block');
})
 //============================================================open zones tabs
  function zonestabs(evt, cityName) {
    var i,zonestabcontent, zonestablinks;
    zonestabcontent = document.getElementsByClassName("zonestabcontent");
    for (i = 0; i < zonestabcontent.length; i++) {
      zonestabcontent[i].style.display = "none";
    }
    zonestablinks = document.getElementsByClassName("zonestablinks");
    for (i = 0; i < zonestablinks.length; i++) {
      zonestablinks[i].className = zonestablinks[i].className.replace(" activezone", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " activezone";
  }
  if ($(window).width() < 991) {
    document.getElementById("defaultOpenzones").click();
 }
 else {
  document.getElementById("defaultOpenzones2").click();

 }
function opentab(){
  document.getElementsByClassName("reviews-tab").click();
}

