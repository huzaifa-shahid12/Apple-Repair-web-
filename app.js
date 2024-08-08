const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrollProgress = document.getElementById("progress");
const progressValue = document.getElementById("progress-value");

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};

cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 7000);
}

$(document).ready(function () {
  $("#owl-carousel").owlCarousel({
    loop: true,
    margin: 80,
    dots: false,
    nav: true,
    items: 3,
  });
  $("#owl-carousel-2").owlCarousel({
    loop: true,
    margin: 100,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    nav: false,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

const calcScrollValue = () => {
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(red ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

  // Sticky Navbar
  if (pos > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
