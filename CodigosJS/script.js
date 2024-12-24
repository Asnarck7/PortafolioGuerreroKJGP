// Efecto de desvanecimiento y deslizamiento al hacer scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});

// Efecto de luces y bordes brillantes para cada sección
const sectionStyle = document.querySelectorAll('section');
sectionStyle.forEach(section => {
  section.classList.add('border-glowing');
});

// Animación de desplazamiento suave para el menú de navegación
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto
    const targetId = event.target.getAttribute('href').slice(1); // Obtiene el ID de la sección
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
  });
});

// Efecto de partículas flotantes (Fondo de partículas)
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.98;
    this.opacity -= 0.005;
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.opacity <= 0) particles.splice(index, 1);
  });
  
  requestAnimationFrame(animateParticles);
}

canvas.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(e.x, e.y));
  }
});

animateParticles();

// Efecto de parallax para el fondo de la sección
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  document.querySelectorAll('.parallax').forEach(section => {
    section.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  });
});

// Cambio en la posición y animación de elementos según el mouse
const moveElement = document.querySelector('.moveable');
document.addEventListener('mousemove', (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  moveElement.style.transform = `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px)`;
});



