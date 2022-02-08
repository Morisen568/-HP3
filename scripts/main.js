var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [
        { src: '../images/spring/sakura.jpg'},
        { src: '../images/summer/summer.jpg'},
        { src: '../images/autumn/fall.jpg' },
        { src: '../images/winter/fuyu.jpg'}
      ];
    } else {
      var responsiveImage = [
        { src: '../images/spring/sakura.jpg'},
        { src: '../images/summer/summer.jpg'},
        { src: '../images/autumn/fall.jpg' },
        { src: '../images/winter/fuyu.jpg'}
      ];
}

$('#top').vegas({
  overlay: true,
  transition: 'blur',
  transitionDuration: 2000,
  delay: 3000,
  animationDuration: 20000,
  animation: 'kenburns',
  slides:responsiveImage,
});

$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});