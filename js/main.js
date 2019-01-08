$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("nav").toggleClass("active");
  });
});

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("header").addClass("black");
  } else {
    $("header").removeClass("black");
  }
});

const elem = selector => {
  return document.querySelector(selector);
};

// CAROUSEL --------------------
// THE DOM STUFF
const left = document.getElementById("js-left");
const right = document.getElementById("js-right");
let list = Object.values(document.querySelectorAll(".carousel__item"));
// VARIABLES
let translate;
let length = list.length;
let middleTerm = Math.ceil((length - 1) / 2);
let spotlightIndex = middleTerm;
let spotlight = list[spotlightIndex];
let caption = spotlight.querySelector("figcaption");
caption.style.display = "block";
// ONCLICK FUNCTION
const clickStuff = hand => {
  caption.style.display = "none"; // REMOVE ALL CAPTIONS
  // CHENGE SPOTLIGHT INDEX WITH RESPECT TO WHERE YOU WANT TO GO
  if (hand === "left") {
    spotlightIndex = spotlightIndex == 0 ? list.length - 1 : spotlightIndex - 1;
  } else {
    spotlightIndex = spotlightIndex == list.length - 1 ? 0 : spotlightIndex + 1;
  }
  // VARAIABLES RELOADED
  spotlight = list[spotlightIndex];
  caption = spotlight.querySelector("figcaption");
  caption.style.display = "block";
  // ANIMATION
  translate = (middleTerm - spotlightIndex) * 100;
  Object.keys(list).forEach(function(key) {
    list[key].style.transform = "translateX(" + translate + "%)";
  });
};
// EVENT LISTENERS
left.addEventListener("click", _ => clickStuff("left"));
right.addEventListener("click", _ => clickStuff("right"));

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
