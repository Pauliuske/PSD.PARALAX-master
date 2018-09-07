 /* CAROUSEL SLIDERIS*/
jQuery(document).ready(function(){
  "use strict";
 /*HEADER CAROUSEL-SLIDER SCRIPT*/
  $('#slider-carousel').carouFredSel({
    responsive:true,
    width: '100%',
    circular:true,
    scroll:{
      items:1,
      duration:500,
      pauseOnHover: true
    },
    auto:true,
    items:{
      visible:{
        min:1,
        max:1
      },
      height:"variable"
    }
  });
  /*ARTICLE OUR WORK CAROUSEL*/
  $('.portfolio-carousel').carouFredSel({
    responsive:true,
    width: '100%',
    circular:true,
    prev:'#preview', /* CAROUSEL ZYMES < > */
    next:'#next', /* CAROUSEL ZYMES < > */
    scroll:{
      items:1,
      duration:500,
      pauseOnHover: true
    },
    auto:true,
    items:{
      visible:{
        min:1,
        max:4 /* po 4 nuotraukas rodys vienoje carousel eileje*/
      },
      height:"variable"
    }
  });
  /*******ARTICLE OUR TEAM CAROUSEL*****/
  $('.team-carousel').carouFredSel({
    responsive:true,
    width: '100%',
    circular:true,
    prev:'#team-preview', /* CAROUSEL ZYMES < > */
    next:'#team-next', /* CAROUSEL ZYMES < > */
    scroll:{
      items:1,
      duration:500,
      pauseOnHover: true
    },
    auto:true,
    items:{
      visible:{
        min:1,
        max:4 /* po 4 nuotraukas rodys vienoje carousel eileje*/
      },
      height:"variable"
    }
  });
/**************TESTIMONIAL CAROUSEL**********/
  $('.testimonial-carousel').carouFredSel({
    responsive:true,
    width: '100%',
    circular:true,
    scroll:{
      items:1,
      duration:500,
      pauseOnHover: true
    },
    auto:true,
    items:{
      visible:{
        min:1,
        max:1
      },
      height:"variable"
    },
    pagination:{
      container:".testipager",
      anchorBuilder: false
    }
  });

/* funkcija scrollinant uzdetu header klase*/
  $(window).scroll(function(){
  var top = $(window).scrollTop();
  if(top>=60){
    $("header").addClass('secondary-dark-blue-bg');
      }
  else
    if($("header").hasClass('secondary-dark-blue-bg')){
      $("header").removeClass('secondary-dark-blue-bg');
    }

});
/*slickNav function*/
$(function(){
		$('#menu').slicknav();
   })

/*waypoint function*/
/*Kad animacija pradetu veikti scrolinant paeiliui, o ne tik atidarius visa saita*/
$('.animation').each(function(){

  var waypoint = new Waypoint({
    element: this,
    handler: function(direction) {
      var animation = $(this.element).attr('data-animation');
      $(this.element).css('opacity','1');
      $(this.element).addClass("animated " + animation);
    },
    offset: '75%'
  })
});

});
/*smooth scroll*/
$('a').smoothScroll();
