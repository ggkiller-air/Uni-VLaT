document.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
  document.querySelectorAll('video').forEach(other => {
    if (other !== video) other.pause();
  });
}));

const dialog = document.getElementById('figure-dialog');
const enlarged = document.getElementById('dialog-image');
document.querySelectorAll('.research-figure img').forEach(img => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'figure-open';
  button.setAttribute('aria-label', `Enlarge figure: ${img.alt}`);
  img.before(button);
  button.append(img);
  button.addEventListener('click', () => {
    enlarged.src = img.src;
    enlarged.alt = img.alt;
    document.getElementById('dialog-caption').textContent = img.alt;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog &&
      (event.clientX < box.left || event.clientX > box.right ||
       event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});

const links = [...document.querySelectorAll('.toc a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const markSection = () => {
  const current = sections.filter(section => section.getBoundingClientRect().top <= 120).at(-1) || sections[0];
  links.forEach(link => {
    if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => { markSection(); ticking = false; });
  }
}, {passive:true});
markSection();
