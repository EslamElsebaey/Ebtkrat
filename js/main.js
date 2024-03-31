
$(window).on("load" , function(){

// preloader
  $(".preloader").fadeOut();

//*************************************************************

//  AOS animation

  AOS.init({
    once : true 
  });

//*************************************************************

// set transtion for elements after applying the animation 

  setTimeout(() => {
    if($(".counter-item").hasClass("aos-animate")){
      $(".counter-item").addClass("transition")
    }
  }, 1000);
  
  setTimeout(() => {
    if($(".banner-desc .request-anchor").hasClass("aos-animate")){
      $(".banner-desc .request-anchor").addClass("transition")
    }
  }, 1000);

  setTimeout(() => {
    if($(".viewAllWorks ").hasClass("aos-animate")){
      $(".viewAllWorks ").addClass("transition")
    }
  }, 1000);

//*************************************************************


  
// main Swiper 

  const mainSwiper = new Swiper('.mainBanner .swiper', {
    draggable: true,
    speed : 1000,
    autoplay: {
      delay: 4000,
  },
  scrollbar: {
    el: ".mainBanner .swiper-scrollbar",
    hide: false,
  },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
    }
  });

//*************************************************************



// clients reviews swiper 

const clientsReviews = new Swiper('.clients-reviews .swiper', {
  loop: true,
  // autoplay: true,
  speed : 1000,
  draggable: true,
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-reviews .swiper-button-next ',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
  }
});

//*************************************************************

// About swiper

const  AboutSwiper = new Swiper('.about .swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed : 1000,
  allowTouchMove: true,
  draggable: true,
  pagination: {
    el: '.about .swiper-pagination',
    clickable: true,
  },
  
  
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    767: {
      slidesPerView: 1.1,
      spaceBetween: 30,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 1.3,
      spaceBetween: 40,
      centeredSlides: true,
    },
    1199: {
      slidesPerView: 1.15,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 1.15,
      spaceBetween: 50,
    },
  },
});

//*************************************************************

// Portfolio Swipers

// residential swiper 
const residentialSwiper = new Swiper('#nav-residential .swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  speed : 1000,
  draggable: true,
  
  pagination: {
    el: '#nav-residential .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#nav-residential .swiper-button-next ',
    prevEl: '#nav-residential .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1.1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 22,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
  },
});

//*************************************************************

// commercial  swiper 
const commercialSwiper = new Swiper('#nav-commercial .swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
  },
   speed : 1000,
  draggable: true,
  pagination: {
    el: '#nav-commercial .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#nav-commercial .swiper-button-next ',
    prevEl: '#nav-commercial .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1.1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 22,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
  },
});

//*************************************************************

// furnishing  swiper 
const furnishingSwiper = new Swiper('#nav-furnishing .swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  draggable: true,
  speed : 1000,
  pagination: {
    el: '#nav-furnishing .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#nav-furnishing .swiper-button-next ',
    prevEl: '#nav-furnishing .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1.1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 22,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
  },
});

//*************************************************************

// supervision  swiper 
const supervisionSwiper = new Swiper('#nav-supervision .swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  draggable: true,
  speed : 1000,
  pagination: {
    el: '#nav-supervision .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#nav-supervision .swiper-button-next ',
    prevEl: '#nav-supervision .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1.1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 22,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
  },
});

//*************************************************************

//  End of  Portfolio Swipers




}) // End of window on load


//*********************************************************************************************************

// document ready

$(document).ready(function(){



// change direction of animation of some elements in English

if($("html").attr("dir") == "ltr"){
  $(".about-content .title , .about-content .para , .about-content .talkToUs").attr("data-aos", "fade-right");
  $(".portfolio-cont .title").attr("data-aos" , "fade-right") ;
  $(".portfolio-cont .viewAllWorks").attr("data-aos" , "fade-left") ;
  $(".blog-parent .desc").attr("data-aos" , "fade-left") ;
}

//*************************************************************


// Set delay and remove anaimation from some elements in mobile

if($(window).width() < 992){
  $(".portfolio .container > .viewAllWorks").attr("data-aos-delay", "200")
  $(".about-content .title , .about-content .para , .talkToUs").removeAttr("data-aos")
  $(".portfolio-cont .title").attr("data-aos", "fade-down").attr("data-aos-delay", "300").attr("data-aos-duration", "800")
  $(".blog-parent .desc").attr("data-aos", "fade-up")
}

if($(window).width() < 1200){
  $(".about-content").attr("data-aos", "fade-down").attr("data-aos-easing", "ease-in-out")
}

//*************************************************************

// In mobile when click an anchor, the sidebar should close

if($(window).width() < 992){
  $(".big-menu > li a").on("click" , function(){
    $(".navigation").removeClass("open-nav");
    $("body").removeClass("overflow-hidden") ;
  })
}

//*************************************************************

// Counters if we need them

// if($(".counter-sec").length > 0)  {
//   const mySection = document.querySelector('.counter-sec'); 
//   const mySectionOffsetTop = mySection.offsetTop; 
//   const windowHeight = window.innerHeight; 
  
//   window.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY; 
//     if (scrollPosition > mySectionOffsetTop - windowHeight) {
  
  
//       let  numDivs  = document.querySelectorAll(".num-holder h4") ; 
//       let interval = 5000 ; 
      
//     numDivs.forEach((numDiv)=>{
//       if(numDiv.innerHTML == "0"){
//         let startValue = 0 ; 
//         let endValue = parseInt(numDiv.dataset.num ) ; 
//         let duration =  Math.floor(interval / numDiv.dataset.num )  ;
//         let counter =  setInterval(() => {
//         startValue++ ;
//         numDiv.textContent = startValue ;
//          if(startValue == endValue){
//            clearInterval(counter)
//         }
//     }, duration);
//       }
    
//   } )
  
      
//     }
//   });
// }

//*************************************************************

//      Clients marquee

$(".clients .block-marquee").marquee({
  duration: window.innerWidth < 768 ? 20000 : 30000,
  gap: window.innerWidth < 768 ? 30 : 40,
  delayBeforeStart: 0,
  direction: $("html").attr("dir") === "rtl" ? "left" : "right",
  duplicated: true,
  css3easing: "linear",
  startVisible: true
});

//*************************************************************

// open and close sidebar in Mobile

$(".bars").on("click" , function(){
  $(".navigation").addClass("open-nav");
  $("body").addClass("overflow-hidden") ;
})

$(".closeBtn").on("click" , function(){
  $(".navigation").removeClass("open-nav");
  $("body").removeClass("overflow-hidden") ;
})

//*************************************************************

// back to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".back-to-top").addClass("showToTop")
  }else{
    $(".back-to-top").removeClass("showToTop")
  }
})

$(".back-to-top").click(function(){
  $(window).scrollTop(0);
}) 

//*************************************************************


// Fixed Header

if($(window).width() > 992){
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
        $("header").addClass("fixed-header");
    } else {
        $("header").removeClass("fixed-header");
    }
  });
}

//*************************************************************





})   // end document ready 







