// JS scripts placed here
// Scroll to the bottom of the page on load
window.onload = function () {
    window.scrollTo(0, document.body.scrollHeight);
};
// Scroll to the bottom on page refresh
window.onbeforeunload = function () {
    window.scrollTo(0, document.body.scrollHeight);
};

let lastScrollTop = 0; // Track the last scroll position
const layer = document.querySelector('#text'); // Replace '.fg' with the class or ID of the layer you want to hide

window.addEventListener('scroll', function () {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop < lastScrollTop) {
    // Scrolling up
    layer.style.opacity = '0'; // Make the layer disappear
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll values
});