$(function () {
  //ハンバーガーメニュー
  //--------------------------------------------

  //ハンバーガーボタンを $triggerに格納
  const $trigger = $("#hamburger");
  //SPメニュー $navに格納
  const $menu = $("#menu");
  //ヘッダーのブレイクポイントを point_headerに格納
  const point_header = window.matchMedia("screen and (max-width: 960px)");

  //ハンバーガーメニューボタンがクリックされた時
  $trigger.on("click", function () {
    if ($("#header").hasClass("open")) {
      $("#header").removeClass("open");
    } else {
      $("#header").addClass("open");
    }
  });

  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $("#to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // //ブレイクポイントをまたいだときの挙動
  function checkBreakPoint() {
    if (point_header.matches) {
      closeMenu(); //ハンバーガーメニューをリセット
    }
  }
  point_header.addListener(checkBreakPoint);

  //簡易バリデーション
  //--------------------------------------------
  $("input,textarea,select").each(function () {
    $(this).on("change", function () {
      if ($(this).is(":invalid")) {
        $(this).parents(".input-field").addClass("is-error");
        //そのフォームのエラーメッセージをスクリーンリーダー向けに表示
        $(this)
          .parents(".input-field")
          .find(".error-text")
          .attr("aria-hidden", false);
      } else {
        $(this).parents(".input-field").removeClass("is-error");
        //エラーメッセージをスクリーンリーダーから隠す
        $(this)
          .parents(".input-field")
          .find(".error-text")
          .attr("aria-hidden", true);
      }
    });
  });

  $("#submit").on("click", function () {
    $("input,textarea,select").each(function () {
      if ($(this).is(":invalid")) {
        $(this).parents(".input-field").addClass("is-error");
        //そのフォームのエラーメッセージをスクリーンリーダー向けに表示
        $(this)
          .parents(".input-field")
          .find(".error-text")
          .attr("aria-hidden", false);
      } else {
        $(this).parents(".input-field").removeClass("is-error");
        //エラーメッセージをスクリーンリーダーから隠す
        $(this)
          .parents(".input-field")
          .find(".error-text")
          .attr("aria-hidden", true);
      }
    });
  });
});
