// Toggle menu burger untuk tampilan mobile
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Tutup menu saat salah satu link diklik (khusus mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Set tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Efek navbar berubah warna saat discroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 15, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 10, 15, 0.85)';
  }
});
