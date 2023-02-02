$('#tab-contents .tab[id != "tab1"]').hide();

// id = tab-menu内のaタグがクリックされたら
$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  // .attr()：HTML要素の属性のを取得したり設定できるメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});