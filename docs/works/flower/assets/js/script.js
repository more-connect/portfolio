$(function () {
  //ハンバーガーメニュー
  //--------------------------------------------
  const $trigger = $("#hamburger");
  //SPメニュー $navに格納
  const $menu = $("#menu");
  //ヘッダーのブレイクポイントを point_headerに格納
  const point_header = window.matchMedia("screen and (max-width: 960px)");
  const mvH = $("#mvH").outerHeight(true);

  function Bgcchange() {
    //ヘッダーの高さを取得
    const scroll = $(window).scrollTop();
    if (scroll >= mvH) {
      $("#header").addClass("bgc");
    } else {
      $("#header").removeClass("bgc");
    }
  }
  $(window).scroll(function () {
    Bgcchange();
  });

  //ハンバーガーメニューボタンがクリックされた時
  $trigger.on("click", function () {
    if ($("#header").hasClass("open")) {
      $("#header").removeClass("open");
    } else {
      $("#header").addClass("open");
    }
  });

  document.getElementById("gnav").addEventListener("click", function () {
    $("#header").removeClass("open");
  }); // 追加

  // //ブレイクポイントをまたいだときの挙動
  function checkBreakPoint() {
    if (point_header.matches) {
      closeMenu(); //ハンバーガーメニューをリセット
    }
  }
  point_header.addListener(checkBreakPoint);
});
