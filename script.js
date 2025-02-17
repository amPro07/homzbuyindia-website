// Function to handle scroll event
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("toggle");
});

// Testimonial Slider Logic
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Function to show the next testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) {
      testimonial.classList.add("active");
    }
  });
}

// Show first testimonial by default
showTestimonial(currentIndex);

// Event Listeners for buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Auto-change testimonials every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 5000);

// Function to animate counter numbers
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let hasAnimated = false; // Prevents re-triggering

  function startCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.ceil(target / 100); // Adjust animation speed

    function updateCount() {
      if (count < target) {
        count += increment;
        counter.innerText = count;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target; // Ensure exact final value
      }
    }

    updateCount();
  }

  // Observer to trigger animation when stats come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          counters.forEach(startCounter);
          hasAnimated = true; // Run only once
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".stats-section"));
});

// Run function on page load
document.addEventListener("DOMContentLoaded", animateCounters);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for fixed navbar height
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll for About Section
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Floating Animation for Image
  const aboutImage = document.querySelector(".about-image img");
  if (aboutImage) {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY / 50;
      aboutImage.style.transform = `translateY(${offset}px)`;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  function fadeInCards() {
    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = "translateY(0)";
        card.style.opacity = "1";
      }, index * 200);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fadeInCards();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".services-container"));
});

document.addEventListener("DOMContentLoaded", function () {
  const heroText = document.querySelector(".hero-overlay");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    heroText.style.transform = `translateY(${scrollY * 0.2}px)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 100;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});

// Parallax Effect for Floating House Image
document.addEventListener("mousemove", (event) => {
  const houseImage = document.querySelector(".hero-image img");
  let xAxis = (window.innerWidth / 2 - event.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 50;
  houseImage.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Change navbar background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const featureCards = document.querySelectorAll(".feature-card");

  function fadeInOnScroll() {
    featureCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run once on page load
});

document.addEventListener("DOMContentLoaded", function () {
  const stepBoxes = document.querySelectorAll(".step-box");

  function fadeInOnScroll() {
    stepBoxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxTop < windowHeight - 100) {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
      } else {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run once on page load
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;
  let interval;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) {
        testimonial.classList.add("active");
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextTestimonial, 5000); // Auto-slide every 5 seconds
  }

  prevBtn.addEventListener("click", () => {
    prevTestimonial();
    clearInterval(interval);
    startAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    nextTestimonial();
    clearInterval(interval);
    startAutoSlide();
  });

  // Initial state
  showTestimonial(currentIndex);
  startAutoSlide();
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input-group input");

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.previousElementSibling.classList.add("active");
    });

    input.addEventListener("blur", () => {
      if (input.value === "") {
        input.previousElementSibling.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".social-icons a");

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.style.animation = "bounce 0.4s ease-in-out";
    });

    icon.addEventListener("animationend", () => {
      icon.style.animation = "";
    });
  });
});

/* CSS Keyframes for bounce effect */
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes bounce {
  0%, 100% {
      transform: translateY(0);
  }
  50% {
      transform: translateY(-5px);
  }
}`;
document.head.appendChild(styleSheet);

document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".logos-track");

  // Pause animation on hover
  marquee.addEventListener("mouseover", () => {
    marquee.style.animationPlayState = "paused";
  });

  // Resume animation when not hovering
  marquee.addEventListener("mouseout", () => {
    marquee.style.animationPlayState = "running";
  });
});
