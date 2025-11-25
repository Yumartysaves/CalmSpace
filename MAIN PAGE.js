// Handles header dropdown + mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const dropdown = document.querySelector('.dropdown');

  // Toggle navigation visibility
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Toggle dropdown menu on click
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdown.classList.remove('active');
  });
});
