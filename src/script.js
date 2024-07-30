let navToggle = document.querySelector('.menu-toggle');
let bars = document.querySelectorAll('.bar');

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'));
  document.body.classList.toggle("previnescroll");
}

navToggle.addEventListener('click', toggleHamburger);