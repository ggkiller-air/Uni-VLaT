const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.video-gallery-section').forEach(section => {
  const viewport = section.querySelector('.video-gallery-container');
  const track = section.querySelector('.video-gallery');
  const buttons = section.querySelectorAll('[data-direction]');
  const updateButtons = () => {
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    buttons.forEach(button => {
      button.disabled = Number(button.dataset.direction) < 0
        ? viewport.scrollLeft <= 1 : viewport.scrollLeft >= maxScroll - 1;
    });
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const step = (track.firstElementChild?.getBoundingClientRect().width || 300) + 15;
    viewport.scrollBy({left: Number(button.dataset.direction) * step,
      behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  }));
  viewport.addEventListener('scroll', updateButtons, {passive: true});
  new ResizeObserver(updateButtons).observe(viewport);
  track.querySelectorAll('img').forEach(img => img.addEventListener('load', updateButtons));
  updateButtons();
});
document.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
  document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
}));
const dialog = document.getElementById('figure-dialog');
const enlarged = document.getElementById('dialog-image');
document.querySelectorAll('main > img, .approach-image, .research-figure img').forEach(img => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'figure-open';
  button.setAttribute('aria-label', `Enlarge figure: ${img.alt}`);
  img.before(button); button.append(img);
  button.addEventListener('click', () => {
    enlarged.src = img.src; enlarged.alt = img.alt;
    document.getElementById('dialog-caption').textContent = img.alt;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});
const links = [...document.querySelectorAll('.toc a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const markSection = () => {
  const current = sections.filter(el => el.getBoundingClientRect().top <= 120).at(-1) || sections[0];
  links.forEach(a => {
    if (a.hash === `#${current.id}`) a.setAttribute('aria-current', 'location');
    else a.removeAttribute('aria-current');
  });
};
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(() => { markSection(); ticking = false; }); }
}, {passive:true});
markSection();
