/**
 * 
 * メニューナビゲーション
 * 
 */
href = location.href;

var links = jQuery(".gnav > ul > li > a");

links.each(function (index, value) {
  if (value.href === href) {
    jQuery(".gnav").children("ul").children("li").eq(index).addClass("current");
  }
});



/**
 * 
 * スムーススクロール
 * 
 */

$(function () {
  // #で始まるリンクをクリックした場合
  $('a[href^="#"]').click(function () {
    // ヘッダーの高さを取得
    var h = $('header').outerHeight();
    // adjust にヘッダーの高さと微調整分1px足して代入
    var adjust = -(h - 1); // マイナス値に変更
    // スクロールの速度（ミリ秒）
    var speed = 800;
    // リンク先を取得してhrefという変数に代入
    var href = $(this).attr("href");
    // リンク先にidがある場合ターゲットとして値を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // ターゲットの位置を取得し、調整がある場合は位置の調整を行う
    var position = target.offset().top + adjust;
    // スクロール実行
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

});
