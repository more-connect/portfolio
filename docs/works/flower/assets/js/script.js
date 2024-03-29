$(function () {
  //ハンバーガーメニュー
  //--------------------------------------------
  const $trigger = $("#hamburger");
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
  });

});
