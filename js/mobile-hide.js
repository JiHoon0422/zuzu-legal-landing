function windowChecker() {
  let windowWidth = $(window).width();
  if (windowWidth <= 420) {
    $(".desktop-only").addClass("hide");
  } else {
    $(".mobile-only").addClass("hide");
  }
}

$(window).resize(function () {
  let windowWidth = $(window).width();
  if (windowWidth <= 420) {
    $(".desktop-only").addClass("hide");
    $(".mobile-only").removeClass("hide");
  } else {
    $(".desktop-only").removeClass("hide");
    $(".mobile-only").addClass("hide");
  }
});

windowChecker();
