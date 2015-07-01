$(document).ready(function () {
	$('#tab-hit-content').fadeIn(300);
	$('li#tab-hit').addClass('tabactive');
});

/*MENU*/
$(function() {
	$( "#cat-menu" ).menu();
});

$(function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 45.00,
			max: 1961.00,
			values: [ 200, 1700 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - " + $( "#slider-range" ).slider( "values", 1 ) );
	});


$(function() {
		$( "#slider-range-2" ).slider({
			range: true,
			min: 45.00,
			max: 1961.00,
			values: [ 200, 1700 ],
			slide: function( event, ui ) {
				$( "#amount-2" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		$( "#amount-2" ).val( "" + $( "#slider-range-2" ).slider( "values", 0 ) +
			" - " + $( "#slider-range-2" ).slider( "values", 1 ) );
	});







/*BANNER SLIDER*/
var width = 700;
	var animationSpeed = 1000;
	var pause = 9000;
	var currentSlide = 1;
	//cache DOM
	var $slider = $('.banner_content');
	var $slideContainer = $slider.find('.banner_content_container');
	var $slides = $slideContainer.find('.slide');
	var interval;
	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({
				'margin-left': '-='+width
			}, animationSpeed, function(){
				currentSlide++;
				if(currentSlide === $slides.length || (currentSlide === $slides.length * width)){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				};
				return currentSlide;
			});
		}, pause);
	}
	function pauseSlider () {
		clearInterval(interval);
	}
	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
	startSlider();

	$('.br_right').on('click', function () {
		$slideContainer.animate({
				'margin-left': '-='+width
			}, animationSpeed, function(){
				currentSlide++;
				if(currentSlide === $slides.length || currentSlide > $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				};
				return currentSlide;
			});
	});
	$('.br_left').on('click', function () {
		$slideContainer.animate({
				'margin-left': '+='+width
			}, animationSpeed, function(){
				currentSlide--;
				if(currentSlide === 1 || currentSlide === 0){
					currentSlide = $slides.length;
					$slideContainer.css('margin-left', '-'+($slides.length-1)*width+'px');
				};
				return currentSlide;
			});
	});
/*BANNER SLIDER END*/


/*TAB SLIDER*/


$('.tc_right').on('click', function () {
	$('.t-slides').animate({
		"margin-left": "-930px"
	}, 2000);
});

$('.tc_left').on('click', function () {
	$('.t-slides').animate({
		"margin-left": "0"
	}, 2000);
});

/*TAB SLIDER END*/



// PRODUCT OF the DAY SLIDER

$('.pod-ctrl-r').on('click', function () {
	$('.pod-slides').animate({
		"margin-left": "-303px"
	}, 2000);
});

$('.pod-ctrl-l').on('click', function () {
	$('.pod-slides').animate({
		"margin-left": "0"
	}, 2000);
});

// NEWS SLIDER

$('.news-ctrl-r').on('click', function () {
	$('.news-slides').animate({
		"margin-left": "-303px"
	}, 2000);
});

$('.news-ctrl-l').on('click', function () {
	$('.news-slides').animate({
		"margin-left": "0"
	}, 2000);
});



// VIDEO SLIDER

$('#vcr').on('click', function () {
	$('.v-slides').animate({
		"margin-left": "-303px"
	}, 2000);
});

$('#vcl').on('click', function () {
	$('.v-slides').animate({
		"margin-left": "0"
	}, 2000);
});



// REVIEW SLIDER
$('#rcr').on('click', function () {
	$('.r-slides').animate({
		"margin-left": "-300px"
	}, 2000);
});

$('#rcl').on('click', function () {
	$('.r-slides').animate({
		"margin-left": "0"
	}, 2000);
});

// UBR

$('#ubr-cc-ctrl-right').on('click', function () {
	$('.ubr-slides').animate({
		"margin-left": "-453px"
	}, 2000);
	$('#ubr-sl1-a').removeClass('active');
	$('#ubr-sl2-a').addClass('active');
});
$('#ubr-cc-ctrl-left').on('click', function () {
	$('.ubr-slides').animate({
		"margin-left": "0"
	}, 2000);
	$('#ubr-sl2-a').removeClass('active');
	$('#ubr-sl1-a').addClass('active');
});



// UBL


$('#ubl-cc-ctrl-right').on('click', function () {
	$('.ubl-slides').animate({
		"margin-left": "-458px"
	}, 2000);
	$('#ubl-sl1-a').removeClass('active');
	$('#ubl-sl2-a').addClass('active');
});
$('#ubl-cc-ctrl-left').on('click', function () {
	$('.ubl-slides').animate({
		"margin-left": "0"
	}, 2000);
	$('#ubl-sl2-a').removeClass('active');
	$('#ubl-sl1-a').addClass('active');
});










/*****TABS******/

$('#tab-hit').on('click', function () {
	$('#tab-party-content').fadeOut(200);
	$('li#tab-party').removeClass('tabactive');
	$('#tab-callor-content').fadeOut(200);
	$('li#tab-callor').removeClass('tabactive');
	$('#tab-act-content').fadeOut(200);
	$('li#tab-act').removeClass('tabactive');

	$('#tab-hit-content').fadeIn(300);
	$('li#tab-hit').addClass('tabactive');
});

$('#tab-party').on('click', function () {
	$('#tab-hit-content').fadeOut(200);
	$('li#tab-hit').removeClass('tabactive');
	$('#tab-callor-content').fadeOut(200);
	$('li#tab-callor').removeClass('tabactive');
	$('#tab-act-content').fadeOut(200);
	$('li#tab-act').removeClass('tabactive');

	$('#tab-party-content').fadeIn(300);
	$('li#tab-party').addClass('tabactive');
});


$('#tab-callor').on('click', function () {
	$('#tab-party-content').fadeOut(200);
	$('li#tab-party').removeClass('tabactive');
	$('#tab-hit-content').fadeOut(200);
	$('li#tab-hit').removeClass('tabactive');
	$('#tab-act-content').fadeOut(200);
	$('li#tab-act').removeClass('tabactive');

	$('#tab-callor-content').fadeIn(300);
	$('li#tab-callor').addClass('tabactive');
});

$('#tab-act').on('click', function () {
	$('#tab-party-content').fadeOut(200)
	$('li#tab-party').removeClass('tabactive');
	$('#tab-callor-content').fadeOut(200)
	$('li#tab-callor').removeClass('tabactive');
	$('#tab-hit-content').fadeOut(200)
	$('li#tab-hit').removeClass('tabactive');

	$('#tab-act-content').fadeIn(300);
	$('li#tab-act').addClass('tabactive');
});

/*****TABS END******/





//  UBL UBR SHARE SOCIAL ICONS
$('.ubl .share-social-icons, .ubl .share a, .ubl .share span').hover(function () {
	$('.ubl .share span').css({
		"-webkit-transform": "rotate(0deg)",
		"-ms-transform": "rotate(0deg)",
		"-o-transform": "rotate(0deg)",
		"transform": "rotate(0deg)"
	});
	}, function () {
		$('.ubl .share span').css({
		"-webkit-transform": "rotate(-90deg)",
		"-ms-transform": "rotate(-90deg)",
		"-o-transform": "rotate(-90deg)",
		"transform": "rotate(-90deg)"
	});
});

$('.ubr .share-social-icons, .ubr .share a, .ubr .share span').hover(function () {
	$('.ubr .share span').css({
		"-webkit-transform": "rotate(0deg)",
		"-ms-transform": "rotate(0deg)",
		"-o-transform": "rotate(0deg)",
		"transform": "rotate(0deg)"
	});
	}, function () {
		$('.ubr .share span').css({
		"-webkit-transform": "rotate(-90deg)",
		"-ms-transform": "rotate(-90deg)",
		"-o-transform": "rotate(-90deg)",
		"transform": "rotate(-90deg)"
	});
});



//  POPUP CALLBACK

$('.btncall').on('click', function () {
	$('.overlay, .popup-window').fadeIn(300);
	return false;
});

$('.overlay, .close-btn').on('click', function () {
	$('.overlay, .popup-window').fadeOut(300);
	return false;
});



// MAIN CONTEN SLIDER

$('#cc-ctrl-right').on('click', function () {
	$('.mc-slides').animate({
		"margin-left": "-733px"
	}, 2000);
	$('#sl1-a').removeClass('active');
	$('#sl2-a').addClass('active');
});
$('#cc-ctrl-left').on('click', function () {
	$('.mc-slides').animate({
		"margin-left": "0"
	}, 2000);
	$('#sl2-a').removeClass('active');
	$('#sl1-a').addClass('active');
});



// $('.filter.start p.hide').click( function() {
// 				$('.filter.start p.hide i').toggleClass('fa-chevron-down');
// 				var toggleWidth = $(".filter.start").height() == 490 ? "22px" : "490px";
// 				$('.filter.start').animate({ height: toggleWidth });
// });

$(".filter.start p.hide a").on("click", function() {
  var el = $(this);
  var arrow = $('.filter.start p.hide i');
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
    arrow.toggleClass('fa-chevron-down');
		var toggleWidth = $(".filter.start").height() == 490 ? "22px" : "490px";
		$('.filter.start').animate({ height: toggleWidth });
});


$('.filter.finish p.hide').click( function() {
				$('.filter.finish p.hide i').toggleClass('fa-chevron-down')
				var toggleWidth = $(".filter.finish").height() == 535 ? "22px" : "535px";
				$('.filter.finish').animate({ height: toggleWidth });
});

$(".filter.finish p.hide a").on("click", function() {
  var el = $(this);
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
		var toggleWidth = $(".filter.finish").height() == 535 ? "22px" : "535px";
		$('.filter.finish').animate({ height: toggleWidth });
});


$('#tab-description').on('click', function () {
	$('li.tab#tab-description').addClass('active');
	$('li.tab#tab-review').removeClass('active');
	$('li.tab#tab-recipe').removeClass('active');
	$('#description-box').fadeIn(300);
	$('.testimonials-box').fadeOut(300);
	$('#recipe-box').fadeOut(300);
});


$('#tab-recipe').on('click', function () {
	$('li.tab#tab-recipe').addClass('active');
	$('li.tab#tab-review').removeClass('active');
	$('li.tab#tab-description').removeClass('active');
	$('#recipe-box').fadeIn(300);
	$('.testimonials-box').fadeOut(300);
	$('#description-box').fadeOut(300);
});




$('#tab-review').on('click', function () {
	$('li.tab#tab-review').addClass('active');
	$('li.tab#tab-description').removeClass('active');
	$('li.tab#tab-recipe').removeClass('active');
	$('.testimonials-box').fadeIn(300);
	$('#description-box').fadeOut(300);
	$('#recipe-box').fadeOut(300);
});


$('.login-container .login a').click( function () {
	$('.login-container .login-form').toggle();
});


( function( $ ) {
$( document ).ready(function() {
	if ($('#cssmenu li.has-sub.active')) {
		$('#cssmenu li.has-sub.active').addClass('open');
		$('#cssmenu li.has-sub.active').children('ul').slideDown();
		$('#cssmenu li.has-sub.active').removeClass('active');
	};

$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});

	$('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

	(function getColor() {
		var r, g, b;
		var textColor = $('#cssmenu').css('color');
		textColor = textColor.slice(4);
		r = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		g = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		b = textColor.slice(0, textColor.indexOf(')'));
		var l = rgbToHsl(r, g, b);
		if (l > 0.7) {
			//$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
			$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
		}
		else
		{
			//$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
			$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
		}
	})();

	function rgbToHsl(r, g, b) {
		r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;

		if(max == min){
			h = s = 0;
		}
		else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch(max){
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			h /= 6;
		}
		return l;
	}
});
} )( jQuery );
