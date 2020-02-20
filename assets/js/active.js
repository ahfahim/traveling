$(document).ready(function(){
  $(".blog-slider").owlCarousel({
  	items :3,
  	margin :30,
  	loop : true,
  	// autoplay: true,
  	// autoplayTimeout: 2000,
  	dots : false,
  	nav: true,
  	navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
        },

        767:{
            items:2,
        },
        
        920:{
            items:3,
        },
    }

  });



   
  AOS.init();



});

const target = document.getElementById('upper'),
    button = document.getElementById('goto');

button.addEventListener('click', function(){
  target.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'nearest' 
  });
  
  // Because scrollIntoView doesn't have callback.
  setTimeout(function(){
    window.location.hash = '#upper';
  }, 2000);
});