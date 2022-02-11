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
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});

	$('.slider').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
    responsive: [
      {
			breakpoint: 1700,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
      },
      {
			breakpoint: 1300,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
			{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
	});