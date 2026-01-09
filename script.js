// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form message
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! We will contact you soon.');
  e.target.reset();
});
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en', autoDisplay: false },
    'google_translate_element'
  );
}

// Custom language change
document.getElementById('languageSwitcher').addEventListener('change', function () {
  const lang = this.value;
  const frame = document.querySelector('.goog-te-menu-frame');

  if (!frame) return;

  const frameDoc = frame.contentDocument || frame.contentWindow.document;
  const langLinks = frameDoc.querySelectorAll('.goog-te-menu2-item span.text');

  langLinks.forEach(el => {
    if (el.innerHTML.toLowerCase().includes(lang)) {
      el.click();
    }
  });
});
let testimonials = document.querySelectorAll('.testimonial');
let dots = document.querySelectorAll('.dot');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
}

// Auto slide
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 5000);

// Dot click
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    current = index;
    showTestimonial(current);
  });
});
const counters = document.querySelectorAll('.counter');

const startCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const speed = 200;

  const update = () => {
    count += target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

// Run when section visible
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const whatsappNumber = '923396534018'; // YOUR WhatsApp number

  const text =
    `Assalamualaikum,%0A%0A` +
    `*New Quran Class Inquiry*%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Phone: ${phone}%0A` +
    `Message: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;

  window.open(url, '_blank');
});
// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});


