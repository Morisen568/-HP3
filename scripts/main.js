var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [
        { src: '../images/spring/haru.jpg'},
        { src: '../images/summer/summer.jpg'},
        { src: '../images/autumn/fall.jpg' },
        { src: '../images/winter/fuyu.jpg'}
      ];
    } else {
      var responsiveImage = [
        { src: '../images/spring/haru.jpg'},
        { src: '../images/summer/summer.jpg'},
        { src: '../images/autumn/fall.jpg' },
        { src: '../images/winter/fuyu.jpg'}
      ];
}

$('#top').vegas({
  overlay: true,
  transition: 'blur',
  transitionDuration: 2000,
  delay: 10000,
  animationDuration: 20000,
  animation: 'kenburns',
  slides:responsiveImage,
});


