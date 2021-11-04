//よくある質問のアコーディオン
$(function () {
 $('.jsAccordionTitle').on('click', function () {
 //nextは次の要素を取得する、今回はクリック要素の次の要素にis-showクラスをつけている
   $(this).next().toggleClass('is-open');
   //クリックした要素自体にもclass付与
   $(this).toggleClass('is-active');
 });
});






//制作実績の横スクロール
const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical', 縦スクロールにする
  loop: true,

  autoplay: {
    delay:5000
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});






//お問い合わせ
$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});




//リンクのスムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.s_01 a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 50;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});




//レスポンシブ時のハンバーガーメニュー
$(function() {
  $('.btn-gNav').on("click", function(){

    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

//ハンバーガーメニューのリストをクリックされたら、非表示にする
$(function() {
  $('.gNav-menu li a').on("click", function(){
     $('#gNav').removeClass('open');
  });
});


//AOS.js設定
AOS.init()