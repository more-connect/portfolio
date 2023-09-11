$(function(){$(window).on("scroll",function(){let elem=$(".fadeIn");const isAnimate="isAnimate";elem.each(function(){const elemOffset=$(this).offset().top;const scrollPos=$(window).scrollTop();const wh=$(window).height();if(scrollPos>elemOffset-wh+wh/3){$(this).addClass(isAnimate)}})});const $trigger=$("#hamburger");$trigger.on("click",function(){if($("#hamburger").hasClass("open")){$("#hamburger").removeClass("open");$("#gnav").removeClass("open")}else{$("#hamburger").addClass("open");$("#gnav").addClass("open")}});document.getElementById("gnav").addEventListener("click",function(){$("#hamburger").removeClass("open");$("#gnav").removeClass("open")})
  //簡易バリデーション
  //--------------------------------------------
  $('input,textarea,select').each(function(){

    $(this).on('change',function(){

      if($(this).is(':invalid')) {
        $(this).parents('.input-field').addClass('is-error');
        //そのフォームのエラーメッセージをスクリーンリーダー向けに表示
        $(this).parents('.input-field').find('.error-text').attr('aria-hidden',false);

      }else {
        $(this).parents('.input-field').removeClass('is-error');
        //エラーメッセージをスクリーンリーダーから隠す
        $(this).parents('.input-field').find('.error-text').attr('aria-hidden',true);
      }
    });
  });

  $('#submit').on('click',function(){
    $('input,textarea,select').each(function(){
      if($(this).is(':invalid')) {
        $(this).parents('.input-field').addClass('is-error');
        //そのフォームのエラーメッセージをスクリーンリーダー向けに表示
        $(this).parents('.input-field').find('.error-text').attr('aria-hidden',false);
      }else {
        $(this).parents('.input-field').removeClass('is-error');
        //エラーメッセージをスクリーンリーダーから隠す
        $(this).parents('.input-field').find('.error-text').attr('aria-hidden',true);
      }
    });
  });
})