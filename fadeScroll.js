const header = document.querySelector('.fixedHeader');
let currentPage = null;
let isAnimating = false;

function startFadeAnimation(newPage) {
  if (isAnimating || currentPage === newPage) return;

  isAnimating = true;
  header.classList.add('fade-out');

  setTimeout(() => {
    header.classList.remove('fade-out');
    currentPage = newPage;
    isAnimating = false;
  }, 600);
}

const observerOptions = {
  root: null,
  threshold: 0.5 // Trigger når 50% av en seksjon er synlig
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startFadeAnimation(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.page').forEach(page => {
  observer.observe(page);
});
