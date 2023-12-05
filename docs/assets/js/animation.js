const jsLoaderBg = ".js-loader-bg";
const paragraph = document.querySelector(".js-typing");

// 非表示用の関数
const closeLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 0,
    direction: 1.1,
  });
};

// 表示用の関数
const showLoadingScreen = (jsLoaderBg) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 1,
  });
};

// タイピングアニメーション用の関数
const startTypingAnimation = () => {
  const textContent = paragraph.textContent;
  const newTextContent = [...textContent]
    .map((char) => `<span>${char}</span>`)
    .join("");
  paragraph.innerHTML = newTextContent;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target.querySelectorAll("span"), {
            autoAlpha: 1,
            stagger: 0.1,
          });
        } else {
          // アニメーションをリセットするために、スタイルを初期状態に戻す
          gsap.set(entry.target.querySelectorAll("span"), {
            autoAlpha: 0,
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(paragraph);
  gsap.set(paragraph.querySelectorAll("span"), {
    autoAlpha: 0,
  });
};

// ローディングが終わったら
window.onload = () => {
  setTimeout(() => {
    closeLoadingScreen(jsLoaderBg);
    startTypingAnimation(); // タイピングアニメーションを開始
  }, 2500);
};

const buttonTimelines = [];

$(".btn").each(function (index, element) {
  const btnHoverTimeline = gsap
    .timeline({
      paused: true,
    })
    .to(element, {
      background: "#d0e1f2",
      duration: 0.2,
    })
    .to(
      $(element).find(".hover_txt"),
      {
        yPercent: -100,
        duration: 0.2,
      },
      "<"
    );

  // ボタンのインデックスに応じた位置に格納
  buttonTimelines[index] = btnHoverTimeline;
});

// ホバーイベントをボタンごとに設定
$(".btn").hover(
  function () {
    const index = $(".btn").index(this);
    buttonTimelines[index].play();
  },
  function () {
    const index = $(".btn").index(this);
    buttonTimelines[index].reverse();
  }
);

const targets = document.querySelectorAll(".js-parallax");
// targetsに含まれる各要素に対してアニメーションを設定
targets.forEach((target) => {
  // target内のimg要素に対してアニメーションを適用
  gsap.fromTo(
    target.querySelector("img"),
    {
      y: 0,
    },
    {
      y: -50, // y方向-に60px移動させる
      ease: "none", // イージングなし
      scrollTrigger: {
        trigger: target, // ScrollTriggerの開始位置を計算するために使用される要素
        start: "top bottom", // trigger要素の開始位置と画面の開始位置
        end: "bottom top", // trigger要素の終了位置と画面の終了位置
        scrub: 0.5, // アニメーションのスクラブ効果（オフセットに基づいてアニメーションの進捗を制御）
      },
    }
  );
});

const tl = gsap.timeline({ paused: true });
const lines = document.querySelectorAll(".js-line");
const shuffledLines = Array.from(lines).sort(() => Math.random() - 0.5);

tl.staggerFrom(
  shuffledLines,
  1.2,
  {
    y: "80%",
    ease: Power4.easeOut,
    opacity: 0,
  },
  0.4
);

ScrollTrigger.create({
  trigger: ".contact__img",
  start: "top top",
  onEnter: () => tl.play(),
});


const inner = document.querySelector(".js-scroll_inner");

if (inner) {
  const slides = gsap.utils.toArray(".js-scroll_box");
  const innerWidth = inner.offsetWidth;
  const extraOffset = 500; // 追加するオフセット

  gsap.to(slides, {
    xPercent: -100 * (slides.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: '.js-scroll',
      pin: true,
      scrub: true, // スクロール量に合わせてアニメーション
      end: `+=${innerWidth - 1}`,
    },
  });
}
