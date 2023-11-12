$(function () {
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
    checkAndAnimate(".fadeIn", "isAnimate", 0.25);
    checkAndAnimate(".features__item, .flow-title, tbody", "isFadeup", 0.33);
    $(window).on("scroll", function () {
      checkAndAnimate(".fadeIn", "isAnimate", 0.25);
      checkAndAnimate(".features__item, .flow-title, tbody", "isFadeup", 0.33);
    });
  });


  $(document).ready(function() {
    const alternateThumbs = $('.alternate__thumb');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).addClass('floating');
        } else {
          $(entry.target).removeClass('floating');
        }
      });
    }, { threshold: 0.25 });

    alternateThumbs.each(function(index, element) {
      observer.observe(element);
    });
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
