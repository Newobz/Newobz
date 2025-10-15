console.log('Welcome to Josh Tugahan\'s website!');

window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  let st = window.scrollY;
  if (st > lastScrollTop && st > 80) {
    navbar.style.top = '-80px'; // Hide navbar
  } else {
    navbar.style.top = '0'; // Show navbar
  }
  lastScrollTop = st <= 0 ? 0 : st;
});

const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

const fadeSections = document.querySelectorAll('.fade-in-section');
function checkFadeIn() {
  fadeSections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', () => {
  fadeSections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'opacity 0.8s, transform 0.8s';
  });
  checkFadeIn();
});

document.getElementById('year').textContent = new Date().getFullYear();