$(function () {
  //ハンバーガーメニュー
  //--------------------------------------------

  //ハンバーガーボタンを $triggerに格納
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
    Bgcchange();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
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

  // タブ
  //--------------------------------------------
  //ariaを利用した汎用的に使えるタブ用スクリプトにしてあります。
  function tab() {
    const $tab = $('[aria-controls^="panel"]');

    $tab.on("click", function (e) {
      const $self = $(e.currentTarget);
      const expanded = $self.attr("aria-expanded");
      const target = $self.attr("aria-controls");
      const $target = $("#" + target);

      if (expanded === "false") {
        $tab.attr("aria-expanded", false).attr("aria-selected", false);
        $tab
          .filter('[aria-controls="' + target + '"]')
          .attr("aria-expanded", true)
          .attr("aria-selected", true);
        $target
          .attr("aria-hidden", false)
          .siblings("[id]")
          .attr("aria-hidden", true);
      }

      return false;
    });
  }
  tab();

  // アコーディオン
  //--------------------------------------------
  //ariaを利用した汎用的に使えるアコーディオン用スクリプトにしてあります。
  function accordion() {
    $('[aria-controls^="accordion"]')
      .stop()
      .on("click", function (e) {
        const $self = $(e.currentTarget);
        const expanded = $self.attr("aria-expanded");
        const $target = $("#" + $self.attr("aria-controls"));

        if (expanded === "false") {
          $self.attr("aria-expanded", true);
          $target.attr("aria-hidden", false).slideDown();
        } else {
          $self.attr("aria-expanded", false);
          $target.attr("aria-hidden", true).slideUp();
        }
      });
  }
  accordion();
});
