$(function() {
  $(document).on("click", 'a[href="#"]', function(e) {
    e.preventDefault();
  });
  sidevarMenu();
});

function sidevarMenu() {
  var $menu = $("#aside .nav-link .link");
  var $menuDepth = $("#aside-depth .nav-link a");
  var $section = $(".section");

  $menu.first().addClass("active");
  $menu.click(function() {
    $menu.removeClass("active");
    $(this).addClass("active");
  });

  $menuDepth.first().addClass("active");
  $section
    .hide()
    .first()
    .show();
  $menuDepth.click(function() {
    cnt = $(this).index();
    $section
      .hide()
      .eq(cnt)
      .show();
    $menuDepth.removeClass("active");
    $(this).addClass("active");
  });
}
