/////////preloader function
var load=document.querySelector(".preloader")
let img=document.getElementById('preload-img-div')
      window.addEventListener("load",function(){
        setTimeout(function () {
         load.classList.add("loaded");
         setTimeout(function(){
          img.classList.add("loaded");
         },1000)
        }, 300);
      })




document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var navlinks = document.querySelectorAll(".nav-link"); // Replace ".navlink" with the actual class of your navlinks

    if (window.scrollY > 100) {
      navbar.classList.add("navbar-scrolled");
      // Change color of navlinks when scrolled
      navlinks.forEach(function (navlink) {
        navlink.style.color = "black"; // Replace "your-scrolled-color" with the desired color
      });
    } else {
      navbar.classList.remove("navbar-scrolled");
      // Reset color of navlinks when not scrolled
      navlinks.forEach(function (navlink) {
        navlink.style.color = "white"; // Replace "your-original-color" with the original color
      });
    }
  });
});




$(document).ready(function() {
  var navbar = $('.navbar');
  var toggler = $('.navbar-toggler');

  toggler.on('click', function() {
    navbar.toggleClass('navbar-bg');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  function changeSlide(direction) {
    $('#testimonialCarousel').carousel('pause');
    var currentIndex = $('.carousel-inner .carousel-item.active').index();
    var newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < $('.carousel-inner .carousel-item').length) {
      $('#testimonialCarousel').carousel(newIndex);
    } else {
      // Optionally, loop back to the first slide when reaching the end.
      // $('#testimonialCarousel').carousel(0);
    }
  }

  $('.carousel-control-prev').on('click', function() {
    changeSlide(-1);
  });

  $('.carousel-control-next').on('click', function() {
    changeSlide(1);
  });
});


 // Scroll to top button functionality
 $("#scrollTopBtn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});


$(document).ready(function () {
  var hiddenSections = $('.hidden-section');
  var viewMoreLinks = $(".view_more");

  viewMoreLinks.click(function (event) {
      event.preventDefault();
      toggleSectionVisibility();
  });

  function toggleSectionVisibility() {
      hiddenSections.toggle();
      updateLinkIcon();
  }

  function updateLinkIcon() {
      var iconClass = hiddenSections.is(":visible") ? "fas fa-arrow-up" : "fas fa-arrow-down";
      viewMoreLinks.html('<i class="' + iconClass + '"></i>');
  }
});

$(document).ready(function(){
  $('.review-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      dots: false,
      pauseOnHover: true,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          },
          {
              breakpoint: 520,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
});

function redirectToPage(pageName) {
  // Redirect to the specified HTML page
  window.location.href = pageName;
}

document.addEventListener('DOMContentLoaded', function () {
  var animatedElements = document.querySelectorAll('.animations');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.5 });

  animatedElements.forEach(function (element) {
    observer.observe(element);
  });
});
