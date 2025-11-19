// Lightbox funkcija
const images = document.querySelectorAll('.gal');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
img.addEventListener('click', () => {
lightbox.style.display = 'flex';
lightboxImg.src = img.src;
});
});

lightbox.addEventListener('click', () => {
lightbox.style.display = 'none';
});
document.querySelectorAll('.usluga').forEach(item => {
item.addEventListener('click', () => {

let target = item.getAttribute('data-target');

// sakrij sve sekcije
document.querySelectorAll('.usluga-sekcija').forEach(sec => {
sec.style.display = 'none';
});

// prikaži samo kliknutu
document.getElementById(target).style.display = 'block';

// skrolaj automatski do sekcije
document.getElementById(target).scrollIntoView({
behavior: 'smooth',
block: 'start'
});
document.querySelectorAll('.sekcija-nav button').forEach(btn => {
btn.classList.remove('active');
});
event.target.classList.add('active');
});
});
