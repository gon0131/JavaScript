// const swiper = new Swiper('.swiper', {
//   //オプションの設定
//   loop: true, //最後までスライドしたら最初の画像に戻る
 
//   //ページネーション表示の設定
//   pagination: { 
//     el: '.swiper-pagination', //ページネーションの要素
//   },
 
//   //ナビゲーションボタン（矢印）表示の設定
//   navigation: { 
//     nextEl: '.swiper-button-next', //「次へボタン」要素の指定
//     prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
//   }
// });

//公式ドキュメント: https://swiperjs.com/swiper-api

$(function(){
  // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定
  // event:イベントオブジェクト=イベントが発生した際の様々な情報を渡すための引数
  $('#back a').on('click', function(event){
    // animate()=アニメーション効果を設定する関数 第二引数：アニメーションの動作時間
    $('body, html').animate({
      scrollTop:0
    }, 800);
    // aタグの機能を無効にするメソッド
    event.preventDefault();
  });
});