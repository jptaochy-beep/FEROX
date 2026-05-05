const sections = [...document.querySelectorAll('.panel')];
const dots = [...document.querySelectorAll('.dot')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.reveal')?.classList.add('visible');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', sections[index] === entry.target);
        });
      }
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => observer.observe(section));
