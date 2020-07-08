
//banner part js start
$('#banner-part').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
    
    
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    

});
//banner part js end



//Portfolio part venu box
$(document).ready(function(){
    $('.venobox').venobox(); 
});



//services part slider
$('.services-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
  prevArrow:'<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-down next" aria-hidden="true"></i>',
    
    
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: false,
        dots: true, 
        centerMode: true,
          
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





//testimonial left side slider
$('.testi-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.text-slider',
  prevArrow:'<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-down next" aria-hidden="true"></i>',
    
    
    
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        
          
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



//testimonial right side slider
$('.text-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  fade: true,
});







//counter up js
$('.count').counterUp({
                delay: 10,
                time: 1000
            });






// fixed menu js
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>500){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>1000){
    $(".btop").css("visibility","visible");
  }else{
    $(".btop").css("visibility","hidden");
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})




//partner part slider 
$('.partner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    
    
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  
          
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
























