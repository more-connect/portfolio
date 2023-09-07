$(function () {
  $(window).on("scroll", function () {
    let elem = $(".fadeIn");
    const isAnimate = "isAnimate";

    elem.each(function () {
      const elemOffset = $(this).offset().top;
      const scrollPos = $(window).scrollTop();
      const wh = $(window).height();

      if (scrollPos > elemOffset - wh + wh / 2) {
        $(this).addClass(isAnimate);
      }
    });
  });
});
