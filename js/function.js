$(function() {
  $(document).on("click", 'a[href="#"]', function(e) {
    e.preventDefault();
  });
  sidevarMenu();
  mobileMenu();
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

function mobileMenu() {
  var $menu = $(".m-menu .menu .list");
  var $menuDepth = $(".m-menu-depth");
  var $menuDepthList = $(".m-menu-depth .menu-depth .list");

  $("#header .menu").click(function() {
    $("#mobileMenu").show();
    $("body").css("overflow", "hidden");
  });
  $(".all-menu").click(function() {
    $("#mobileMenu").hide();
    $("body").css("overflow", "visible");
  });

  $(".btn-option").click(function() {
    $(".m-option-wrap").show();
    $("body").css("overflow", "hidden");
  });

  $(".m-option-wrap .option-header button").click(function() {
    $(".m-option-wrap").hide();
    $("body").css("overflow", "visible");
  });

  $menuDepth.hide();
  $menuDepth.first().show();

  $menu.click(function() {
    cnt = $(this).index();
    console.log(cnt);
    $menu.removeClass("active");
    $(this).addClass("active");

    if (cnt === 0) {
      $menuDepth.hide();
    } else {
      $menuDepth
        .hide()
        .eq(cnt - 1)
        .show();
    }
  });

  $menuDepthList.click(function() {
    $menuDepthList.removeClass("active");
    $(this).addClass("active");
  });
}

function mobileTooltip() {
  $btnClose = $(".m-tooltip-wrap .m-tooltip button");

  $btnClose.click(function() {
    $(".m-tooltip-wrap").hide();
  });

  $(".m-tooltip1").click(function() {
    $(".tooltip1").show();
  });
}

// 옵션 추가
function addOption() {
  alert('옵션 추가');
}

// 옵션 칩 삭제
function deleteChip(e) {
  $(e).parent('.option-chip').remove()
}

// 상품목록 행 클릭
function clickProduct() {
  alert('상품 정보');
}