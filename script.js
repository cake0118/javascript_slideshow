const swiper = new Swiper('.swiper',{
  // オプションの設定
  loop: true,  //最後までスライドしたら最初に戻る
  // ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination',  //ページネーションの要素
  },

  // ナビゲーションボタン表示の設定
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});