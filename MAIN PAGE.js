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

// Toggle image left / right for the .media-row block
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleImageBtn');
  const mediaRow = document.getElementById('mediaRow1');

  if (toggleBtn && mediaRow) {
    toggleBtn.addEventListener('click', () => {
      mediaRow.classList.toggle('reverse');

      // Optional: update button text for clarity
      if (mediaRow.classList.contains('reverse')) {
        toggleBtn.textContent = 'Move image back';
      } else {
        toggleBtn.textContent = '𐔌՞ ܸ.ˬ.ܸ՞𐦯';
      }
    });
  }
});

