var typed = new Typed(".text", {
    strings: ["Frontend Developer", "FullStack Developer", "WebDeveloper"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector("#skills");
  if (!skillsSection) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(skillsSection);

  function animateSkills() {
   
    document.querySelectorAll(".progress-line").forEach(pl => {
      const percent = pl.dataset.percent ? Number(pl.dataset.percent) : 0;
      const barSpan = pl.querySelector("span");
      const percentBox = pl.querySelector(".percent");
      if (barSpan) {
 
        barSpan.style.width = percent + "%";
      }
      if (percentBox) percentBox.textContent = percent + "%";
    });

   
    document.querySelectorAll(".radial-bar").forEach(rb => {
      const pct = rb.dataset.percent ? Number(rb.dataset.percent) : 0;
      const path = rb.querySelector(".path");
      if (!path) return;
      
      const r = Number(path.getAttribute("r")) || 80;
      const circumference = 2 * Math.PI * r;  
      path.style.strokeDasharray = circumference;
    
      path.style.strokeDashoffset = circumference;
      
      path.getBoundingClientRect();
 
      const offset = circumference * (1 - pct / 100);
      path.style.strokeDashoffset = offset;
   
      const pctEl = rb.querySelector(".percentage");
      if (pctEl) pctEl.textContent = pct + "%";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  projectCards.forEach(card => observer.observe(card));
});

