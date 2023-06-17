href = location.href;

var links = jQuery(".gnav > ul > li > a");

links.each(function (index, value) {
  if (value.href === href) {
    jQuery(".gnav").children("ul").children("li").eq(index).addClass("current");
  }
});