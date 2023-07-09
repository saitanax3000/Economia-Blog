window.onscroll = function() {
  var header = document.getElementById("header");
  var scrollY = window.scrollY;

  if (scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
