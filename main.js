$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $(".nav-bar").addClass(".stickynab-bar");
  } else {
    $(".nav-bar").removeClass(".stickynab-bar");
  }
});
