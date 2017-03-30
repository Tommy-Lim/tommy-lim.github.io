$( document ).ready(function() {
    window.sr = ScrollReveal({
      duration: 900
    });

    sr.reveal('header .container');
    sr.reveal('.tech-icons', 25);
    sr.reveal('.portfolio-item', 25);
    sr.reveal('.footer-col a', 25);

    // check if mobile and apply css
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      console.log('is mobile');
      $('.caption').css('opacity', '1');
    }

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    // particlesJS('particles-js',
    //   {
    //     "particles": {
    //       "number": {
    //         "value": 50,
    //         "density": {
    //           "enable": true,
    //           "value_area": 800
    //         }
    //       },
    //       "color": {
    //         "value": "#ffffff"
    //       },
    //       "shape": {
    //         "type": "circle",
    //         "stroke": {
    //           "width": 0,
    //           "color": "#000000"
    //         },
    //         "polygon": {
    //           "nb_sides": 5
    //         },
    //         "image": {
    //           "src": "img/github.svg",
    //           "width": 100,
    //           "height": 100
    //         }
    //       },
    //       "opacity": {
    //         "value": 0.1,
    //         "random": false,
    //         "anim": {
    //           "enable": false,
    //           "speed": 1,
    //           "opacity_min": 0.1,
    //           "sync": false
    //         }
    //       },
    //       "size": {
    //         "value": 10,
    //         "random": true,
    //         "anim": {
    //           "enable": false,
    //           "speed": 80,
    //           "size_min": 0.1,
    //           "sync": false
    //         }
    //       },
    //       "line_linked": {
    //         "enable": true,
    //         "distance": 300,
    //         "color": "#ffffff",
    //         "opacity": 0.3,
    //         "width": 2
    //       },
    //       "move": {
    //         "enable": true,
    //         "speed": 3,
    //         "direction": "none",
    //         "random": false,
    //         "straight": false,
    //         "out_mode": "out",
    //         "bounce": false,
    //         "attract": {
    //           "enable": false,
    //           "rotateX": 600,
    //           "rotateY": 1200
    //         }
    //       }
    //     },
    //     "interactivity": {
    //       "detect_on": "canvas",
    //       "events": {
    //         "onhover": {
    //           "enable": false,
    //           "mode": "repulse"
    //         },
    //         "onclick": {
    //           "enable": true,
    //           "mode": "push"
    //         },
    //         "resize": true
    //       },
    //       "modes": {
    //         "grab": {
    //           "distance": 800,
    //           "line_linked": {
    //             "opacity": 1
    //           }
    //         },
    //         "bubble": {
    //           "distance": 800,
    //           "size": 80,
    //           "duration": 2,
    //           "opacity": 0.8,
    //           "speed": 3
    //         },
    //         "repulse": {
    //           "distance": 400,
    //           "duration": 0.4
    //         },
    //         "push": {
    //           "particles_nb": 4
    //         },
    //         "remove": {
    //           "particles_nb": 2
    //         }
    //       }
    //     },
    //     "retina_detect": true
    //   }
    // );

});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
