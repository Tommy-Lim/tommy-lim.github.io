window.addEventListener("load",function(){$("#load-overlay").fadeOut("slow")}),$(document).ready(function(){window.sr=ScrollReveal({duration:900}),sr.reveal(".tech-icons",25),sr.reveal(".portfolio-item",25),sr.reveal(".footer-col a",25),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&$(".caption").css("opacity","1")}),function(e){"use strict";e(".page-scroll a").bind("click",function(o){var t=e(this);e("html, body").stop().animate({scrollTop:e(t.attr("href")).offset().top-50},1250,"easeInOutExpo"),o.preventDefault()}),e("body").scrollspy({target:".navbar-fixed-top",offset:51}),e(".navbar-collapse ul li a").click(function(){e(".navbar-toggle:visible").click()}),e("#mainNav").affix({offset:{top:100}})}(jQuery);