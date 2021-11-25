/* reload page_top start */
$(function () {
  $("html,body").animate({ scrollTop: 0 }, "1");
});

/* load-animation */
$(function () {
  $("body").hide().fadeIn(1000);
});

/* img */

/* page_top */
$(function () {
  var pagetop = $("#page_top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });
});
