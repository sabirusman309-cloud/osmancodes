// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Portfolio images
const images = [
  {
    src: "3.jpg",
    label: "SaaS Dashboard Website",
    desc: "A modern SaaS dashboard web design focused on analytics and user-friendly data visualization."
  },
  {
    src: "4.jpg",
    label: "Digital Agency Landing Page",
    desc: "Landing page for a creative digital agency, featuring bold typography and a clean layout."
  },
  {
    src: "5.jpg",
    label: "Music Streaming App UI",
    desc: "UI design for a music streaming app, emphasizing immersive visuals and easy navigation."
  },
  {
    src: "6.jpg",
    label: "E-Commerce Chocolate Store",
    desc: "A vibrant e-commerce homepage for a chocolate brand, highlighting products and special offers."
  },
  {
    src: "bank.jpg",
    label: "Banking App UI Kit",
    desc: "A mobile banking app interface with a focus on clarity, account management, and financial goals."
  },
  {
    src: "Figma Website Design.jpg",
    label: "Green Energy Website",
    desc: "A website for a green energy company, designed for trust, eco-friendliness, and clear CTAs."
  },
  {
    src: "Mockup1.jpg",
    label: "Social Media App Mockup",
    desc: "Mockup of a social media app with stories, posts, and a clean, familiar user experience."
  },
  {
    src: "music.jpg",
    label: "Music Event Landing Page",
    desc: "Landing page for a music event, using dark mode and vibrant accent colors for impact."
  },
  {
    src: "project2.jpg",
    label: "Super7 Website",
    desc: "A bold, retro-inspired website for the Super7 brand, combining nostalgia with modern web design."
  },
  {
    src: "project11.jpg",
    label: "Instagram-Inspired Social App UI",
    desc: "A mobile UI inspired by Instagram, featuring stories, posts, and profile management."
  }
];

const grid = document.querySelector('.portfolio-grid');
grid.innerHTML = '';
images.forEach(img => {
  const div = document.createElement('div');
  div.className = 'portfolio-item';
  div.innerHTML = `
    <img src="${img.src}" alt="${img.label}" />
    <div class="caption">${img.label}</div>
  `;
  div.addEventListener('click', () => openModal(img.src, img.label, img.desc));
  grid.appendChild(div);
});

// Image Zoom Modal
const modal = document.getElementById('zoomModal');
const modalImg = document.getElementById('zoomImg');
const captionText = document.getElementById('caption');
const closeModal = document.getElementById('closeModal');
const descText = document.getElementById('desc');

function openModal(src, caption, desc) {
  modal.classList.add('open');
  modalImg.src = src;
  captionText.textContent = caption;
  if (descText) descText.textContent = desc || '';
}
closeModal.onclick = function() {
  modal.classList.remove('open');
};
modal.onclick = function(e) {
  if (e.target === modal) modal.classList.remove('open');
};

// Optional: Drag to pan zoomed image
let isDragging = false, startX, startY, scrollLeft, scrollTop;
modalImg.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - modalImg.offsetLeft;
  startY = e.pageY - modalImg.offsetTop;
  modalImg.style.cursor = 'grabbing';
});
window.addEventListener('mouseup', () => {
  isDragging = false;
  modalImg.style.cursor = 'grab';
});
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  modalImg.style.transform = `translate(${e.pageX - startX}px, ${e.pageY - startY}px) scale(1.1)`;
});
modalImg.addEventListener('mouseleave', () => {
  isDragging = false;
  modalImg.style.cursor = 'grab';
  modalImg.style.transform = '';
});
modalImg.addEventListener('mouseup', () => {
  isDragging = false;
  modalImg.style.cursor = 'grab';
  modalImg.style.transform = '';
});

// Smooth scroll for navbar links
const navLinksEls = document.querySelectorAll('.nav-links a');
navLinksEls.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      // Close mobile nav if open
      navLinks.classList.remove('open');
    }
  });
});
