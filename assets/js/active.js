(function ($){
    "use strict";

    (new WOW).init(),

    //Mean Menu
    $('#header-menu').meanmenu({
        meanScreenWidth:"575",
        meanMenuContainer:'.mobile-menu'
    });

    //Magnefic Popup Active
    $('.video-popup').magnificPopup({

        //type: 'image'
        type: 'iframe'
    
          });
    
  	//Carousel For Main Slider 
      $('.slider-active').owlCarousel({
        autoplay:true,
        loop:true,
        nav:true,
        dots:true,
        //margin:35,
        navText:[ '<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
  	//Carousel For Latest Project Slider 
      $('.project-active').owlCarousel({
        autoplay:true,
        loop:true,
        nav:true,
        dots:false,
        //margin:35,
        navText:[ '<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });
  	//Carousel For Blog (Blog & Testimonial Section)
      $('.blog-active').owlCarousel({
        autoplay:true,
        loop:true,
        nav:true,
        dots:false,
        //margin:35,
        navText:[ '<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
  	//Carousel For Testimonial (Blog & Testimonial Section)
      $('.testimonial-active').owlCarousel({
        autoplay:true,
        loop:true,
        nav:true,
        dots:false,
        //margin:35,
        navText:[ '<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
    
  	//Carousel For Brand
      $('.brand-active').owlCarousel({
        autoplay:true,
        loop:true,
        nav:false,
        dots:false,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
	  
   

    
})(jQuery);