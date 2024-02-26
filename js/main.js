AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


function carouselNormalization() {

  window.heights = [],
    window.tallest;

  function normalizeHeights() {
    jQuery('.carousel .carousel-inner .carousel-item').each(function () {
      window.heights.push(jQuery(this).outerHeight());
    });
    window.tallest = Math.max.apply(null, window.heights);
    jQuery('.carousel .carousel-inner .carousel-item').each(function () {
      jQuery(this).css('min-height', tallest + 'px');
    });
  }
  normalizeHeights();

  jQuery(window).on('resize orientationchange', function () {
    window.tallest = 0, window.heights.length = 0;
    jQuery('.carousel .carousel-inner .carousel-item').each(function () {
      jQuery(this).css('min-height', '0');
    });

    normalizeHeights();

  });

  if (jQuery(this).css("display") == 'block') {
    was_show = 1;
  } else {
    jQuery(this).addClass("active");
    var was_show = 0;
  }

  window.heights.push(jQuery(this).outerHeight());

  if (was_show == 0) {
    jQuery(this).removeClass("active");
  }

}

jQuery(document).ready(function () {
  carouselNormalization();
  backToTop();
});

