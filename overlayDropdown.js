
const dropdown = document.querySelector('.dropdownProdukter');
const overlay = document.getElementById('overlay');
const header = document.querySelector('header');

dropdown.addEventListener('mouseenter', () => {
  overlay.style.display = 'block';
  header.classList.add('white-header');
});

dropdown.addEventListener('mouseleave', () => {
  overlay.style.display = 'none';
  header.classList.remove('white-header');
});

