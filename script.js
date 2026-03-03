const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Optional: Change hamburger icon to X when open
  if (navMenu.classList.contains('active')) {
    hamburger.innerHTML = '✕';
  } else {
    hamburger.innerHTML = '☰';
  }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.innerHTML = '☰';
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    hamburger.innerHTML = '☰';
  }
});