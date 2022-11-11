$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".nav").addClass("nav-active");
      $(".nav img").addClass("img-active");
      // $(".nav img").removeClass("normal-img");
      $(".nav img").addClass("hidden-img");

      // $(".navbar").addClass("active");
    } else {
      $(".nav").removeClass("nav-active");
      $(".nav img").removeClass("img-active");
      $(".nav img").addClass("normal-img");

      // $(".navbar").removeClass("active");
    }
  });
});

console.log("testtt");
