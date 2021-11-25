/* effect-fade */
window.onload = function () {
  scroll_effect();

  $(window).scroll(function () {
    scroll_effect();
  });

  function scroll_effect() {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  }
};

/* load */
$(window).on("load", function () {
  $("#splash").delay(2500).fadeOut("slow");
  $("#splash_logo").delay(1500).fadeOut("slow");
});

/* nav-menu-sp (max-width: 767px) */
$(function () {
  $(".navToggle").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $("#globalMenuSp").addClass("active");
    } else {
      $("#globalMenuSp").removeClass("active");
    }
  });
});
$(function () {
  $("#manu a[href]").on("click", function (event) {
    $(".navToggle").trigger("click");
  });
});

/* NEXT INNOVATION (modal) */
$(function () {
  $(".vision-modal").on("click", function () {
    $(".modal-contents").fadeIn();
    return false;
  });
  $(".modal-close").on("click", function () {
    $(".modal-contents").fadeOut();
    return false;
  });
});

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
      100
    );
    return false;
  });
});
