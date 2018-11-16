function uhSet(){
  var uh = $("#userInfo").parent().width();
  $("#userInfo").width(uh);
}
if ($(window).width() > 768) {
  uhSet();
}else{
  $("#userInfo").width("auto");
}
$(window).resize(function () {
  if ($(window).width() > 768) {
    uhSet();
  }else{
    $("#userInfo").width("auto");
  }
});

$("#gotop").hide();
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $("#gotop").fadeIn();
  } else {
    $("#gotop").fadeOut();
  }
  if ($(window).scrollTop() > 100 && $(window).width() > 768) {
    $("#userInfo").addClass('userfixed');
  } else {
    $("#userInfo").removeClass('userfixed');
  }
});
$(function () {
  $("#gotop").click(function () {
    $('html,body').animate({
      'scrollTop': 0
    }, 300);
  });
})
