$(document).ready(function(){
    
    	$('.b_3_form input[type="text"]').focusin(function(){		
		$(this).prev().addClass('active');
	});
	$('.b_3_form input[type="text"]').focusout(function(){
		$(this).prev().removeClass('active');
	});
	if (screen.width > 700) {
		$(window).resize(function(){
			$('#b_1 div.w_50:first-child .swiper-wrapper').css('height', $("#b_1 div.w_50:last-child").outerHeight());
			$('#b_1 div.w_50:first-child .swiper-wrapper img').css('height', $("#b_1 div.w_50:last-child").outerHeight());
		});
		$(window).resize();	
	}
    
    
    
    
    
    
    
	var countSlides = 3;
	if (screen.width <= 767) {
		countSlides = 2;
	}
	if (screen.width <= 480) {
		countSlides = 1;
	}
    
    var countSlides10 = 4;
    if (screen.width <= 767) {
		countSlides10 = 2;
	}
	if (screen.width <= 480) {
		countSlides10 = 1;
	}
    
    $(window).on("load resize", function(){
          
        
        if($(window).width() >= 1340){
            $(".navslide ").hide(0);
            $(".desc-pagination").show(0);
            
            prev4 = ".prev4-d";
            next4 = ".next4-d";
            
            prev7 = ".prev7-d";
            next7 = ".next7-d";
            
            prev10 = ".prev10-d";
            next10 = ".next10-d";
            
        }
        else{
            $(".navslide ").show(0);
            $(".desc-pagination").hide(0);
            
            prev4 = ".prev4";
            next4 = ".next4";
            
            prev7 = ".prev7";
            next7 = ".next7";
            
            prev10 = ".prev10";
            next10 = ".next10";
        }
        
     var swiperB4 = new Swiper('#b_4 .swiper-container', {		
            spaceBetween: 30,		
            grabCursor: false,
            slidesPerView: countSlides,
            slidesPerGroup:countSlides,
            autoHeight: true,
            slidesPerView: 4,
            navigation: {
                nextEl: next4,
                prevEl: prev4,
            }   
	   });
        
    var swiperB7 = new Swiper('#b_7 .swiper-container', {		
		spaceBetween: 0,		
		grabCursor: false,
		slidesPerView: countSlides,
		slidesPerGroup:1,
		autoHeight: true,
		navigation: {
			nextEl: next7,
			prevEl: prev7,
		}
	});
        
        
    var swiperB10 = new Swiper('.fix-b_10 .swiper-container', {	
     slidesPerView: 4,
      spaceBetween: 60,
		navigation: {
			nextEl: next10,
			prevEl: prev10,
		},
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            
            720: {
              slidesPerView: 4  
            },
            
            1360: {
                slidesPerView: 4
            }
            
        }
	});	
        
        
    });
    
    $('.slick-gallery').slick({
        slidesToShow: 4,
        prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
        responsive: [
            {
              breakpoint: 1339,
              settings: {
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
              }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                }
            },
            {
               breakpoint: 555,
                settings: {
                  
                    slidesToShow: 1,
                    
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                } 
            }
        ]
    });
    
  /*  $('.slick-gallery').slick({
        slidesToShow: 4,
        prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
        speed: 400,
        
        responsive: [
            {
              breakpoint: 1339,
              settings: {
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
              }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                }
            },
            {
               breakpoint: 555,
                settings: {
                  
                    slidesToShow: 1,
                    
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                } 
            }
        ]
    }); */
    
    $(".sertificats").slick({
        prevArrow: ".prev10-d",
        nextArrow: ".next10-d",
        speed: 400,
        slidesToShow: 4,
        slideToScroll: 1,
        responsive: [
            {
              breakpoint: 1339,
              settings: {
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
              }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                }
            },
            {
               breakpoint: 555,
                settings: {
                   
                    slidesToShow: 1,
                    prevArrow: ".prev8-d",
        nextArrow: ".next8-d",
                    infinite: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                    speed: 1000,
                } 
            }
        ]
    });
    
	$('.hamburger.close').on('click', function(){		
		$('.header-nav-mobile').fadeOut(0);
	});
	$('.hamburger.open').on('click', function(){		
		$('.header-nav-mobile').fadeIn(0);
	})
});