// hide topbar on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("topbar").style.display = "none";
  } else {
    document.getElementById("topbar").style.display = "block";
  }
}


