document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const target = link.getAttribute('href');
  if (target === path) link.classList.add('active');
});
