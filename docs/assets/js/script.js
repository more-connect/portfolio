$(document).ready(function () {
  const wh = $(window).height();

  function checkAndAnimate(selector, animationClass, offsetMultiplier) {
    $(selector).each(function () {
      const elem = $(this);
      const elemOffset = elem.offset().top;
      const scrollPos = $(window).scrollTop();
      if (scrollPos > elemOffset - wh + wh * offsetMultiplier) {
        elem.addClass(animationClass);
      }
    });
  }

  // ページ読み込み時とスクロール時に要素をチェック
  function checkAllElements() {
    checkAndAnimate(".fadeIn", "isAnimate", 0.25);
    checkAndAnimate(".flow-title, tbody", "isFadeup", 0.33);
  }

  // 初回チェック
  checkAllElements();

  // スクロール時に要素をチェック
  $(window).on("scroll", function () {
    checkAllElements();
  });


  const $hamburger = $("#hamburger");
  const $gnav = $("#gnav");

  $hamburger.on("click", function () {
    $hamburger.toggleClass("open");
    $gnav.toggleClass("open");
  });

  $gnav.on("click", function () {
    $hamburger.removeClass("open");
    $gnav.removeClass("open");
  });

  // 簡易バリデーション
  $("input, textarea, select").on("change", function () {
    const $parentField = $(this).parents(".input-field");
    const $errorText = $parentField.find(".error-text");

    if ($(this).is(":invalid")) {
      $parentField.addClass("is-error");
      $errorText.attr("aria-hidden", false);
    } else {
      $parentField.removeClass("is-error");
      $errorText.attr("aria-hidden", true);
    }
  });

  // 送信ボタンクリック時のバリデーション
  $("#submit").on("click", function () {
    $("input, textarea, select").trigger("change");
  });
});