(() => {
// スライダー全体を囲むエリア
const $slider = document.querySelector('.sliders');
const $slides = document.querySelectorAll('.slider-item');
const $prev = document.querySelector('.slider-cursor-left');
const $next = document.querySelector('.slider-cursor-right');
const $indicators = document.querySelector('.slider-indicators');
const $slideLen = $slides.length;
let currentslideCount = 0;

// スライドの数だけインジケーターの生成
// また、1枚目のスライドの初期位置はleft: 0%にして、それ以降のスライドはそれぞれ100%ずつ右に移動させる
for (let i = 0; i < $slideLen; i++ ) {
  let $indicator = document.createElement('li');
  $indicator.className = 'slider-indicator';
  $indicators.appendChild($indicator);
  $slides[i].style.left = i * 100 + '%';
}


// currentSlideCountの値に応じて、スライドとインジケーターにCSSクラスをつける
let $indicatorList = document.querySelectorAll('.slider-indicator');
$indicatorList[currentslideCount].classList.add('is-active-indicator');
$slides[currentslideCount].classList.add('is-active-slide');

// 戻るボタンをクリックするとprevSlider関数を実行
$prev.addEventListener('click', prevSlider);
// 進むボタンをクリックするとnextSlider関数を実行
$next.addEventListener('click', nextSlider);

// インジケーターをクリックするとその番号へスライドを変更し、インジケーターのCSSクラスを付け替える
if ($indicatorList.length > 0) {
  $indicatorList.forEach(function($indicator, index){
    $indicator.addEventListener('click', function(){
      initialize();
      currentslideCount = index;
      update();
    });
  });
}

// インジケーターのCSSクラスを取り除く関数
function initialize() {
  $indicatorList[currentslideCount].classList.remove('is-active-indicator');
};

// 該当するインジケーターにCSSクラスを加えて、スライドの表示位置を変更する関数
function update() {
  $indicatorList[currentslideCount].classList.add('is-active-indicator');
  $slider.style.left = -currentslideCount * 100 + '%';
};


// スライドを1枚戻す関数
// もし現在のスライドが1番目だった場合、最後のスライドへ
function prevSlider() {
  initialize();
  if( currentslideCount === 0 ) {
    currentslideCount = $slideLen - 1;
  } else {
    currentslideCount--;
  }
  update();
};


// スライドを1枚進める関数
// もし現在のスライドが最後だった場合、最初のスライドへ
function nextSlider() {
  initialize();
  if( currentslideCount === ( $slideLen - 1 )) {
    currentslideCount = 0;
  } else {
    currentslideCount++;
  }
  update();
};


// -------------
// スワイプ機能

// 変数の定義
let startX;
let moveX;
let dist = 30;

$slides.forEach(function(el) {


  el.addEventListener('touchstart', function(e) {
    e.preventDefault();
    startX = e.touches[0].pageX;
  });
  el.addEventListener('touchmove', function(e) {
    e.preventDefault();
    moveX = e.changedTouches[0].pageX;
  });
  el.addEventListener('touchend', function(e) {
    if (startX > moveX && startX > moveX + dist) {
      nextSlider();
    } else if (startX < moveX && startX + dist < moveX) {
      prevSlider();
    }
  });

  el.addEventListener('mousedown', function(e) {
    e.preventDefault();
    startX = e.pageX;
  });
  el.addEventListener('mousemove', function(e) {
    e.preventDefault();
    moveX = e.pageX;
  });
  el.addEventListener('mouseup', function(e) {
    if (startX > moveX && startX > moveX + dist) {
      nextSlider();
    } else if (startX < moveX && startX + dist < moveX) {
      prevSlider();
    }
  });

});


})();
