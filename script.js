// Menu burger (mobile)
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', open);
});

// Sous-menus au clic (utile sur mobile / tactile)
document.querySelectorAll('.dropdown').forEach(dd => {
  dd.querySelector('.drop-btn').addEventListener('click', e => {
    e.stopPropagation();
    const wasOpen = dd.classList.contains('open');
    document.querySelectorAll('.dropdown.open').forEach(o => o.classList.remove('open'));
    if (!wasOpen) dd.classList.add('open');
  });
});

// Fermer les menus quand on clique ailleurs ou sur un lien
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown.open').forEach(o => o.classList.remove('open'));
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.classList.remove('active');
  document.querySelectorAll('.dropdown.open').forEach(o => o.classList.remove('open'));
}));

// Apparition des sections au scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Année auto dans le footer
document.getElementById('year').textContent = new Date().getFullYear();
