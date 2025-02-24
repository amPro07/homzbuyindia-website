document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) {
    console.error("Hamburger or nav-links not found!");
    return;
  }

  // Debug log to confirm event attachment
  console.log("Event listeners attached.");

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the event from bubbling up
    console.log("Hamburger clicked.");
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
    document.body.classList.toggle(
      "no-scroll",
      navLinks.classList.contains("nav-active")
    );
  });

  // Close menu when clicking outside the menu and hamburger
  document.addEventListener("click", function (event) {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove("nav-active");
      hamburger.classList.remove("toggle");
      document.body.classList.remove("no-scroll");
    }
  });

  // Close menu when clicking on any nav link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("nav-active");
      hamburger.classList.remove("toggle");
      document.body.classList.remove("no-scroll");
    });
  });
});

console.log("Checking elements...");
console.log("Hamburger:", document.querySelector(".hamburger"));
console.log("Nav Links:", document.querySelector(".nav-links"));

// 🌟 SMOOTH SCROLL FOR NAVIGATION
document.querySelectorAll(".nav-links a").forEach((link) => {
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

    // Close menu after clicking a link
    navLinks.classList.remove("nav-active");
    hamburger.classList.remove("toggle");
    document.body.style.overflow = "auto";
  });
});

// 🌟 SCROLL EVENT FOR NAVBAR BACKGROUND
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 🌟 TESTIMONIAL SLIDER
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) {
      testimonial.classList.add("active");
    }
  });
}

showTestimonial(currentIndex);

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 5000);

// 🌟 ANIMATE COUNTER NUMBERS ON SCROLL
const counters = document.querySelectorAll(".counter");
let hasAnimated = false;

function startCounter(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const increment = Math.ceil(target / 100);

  function updateCount() {
    if (count < target) {
      count += increment;
      counter.innerText = count;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  }

  updateCount();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        counters.forEach(startCounter);
        hasAnimated = true;
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  observer.observe(statsSection);
}

// 🌟 PARALLAX EFFECT ON HERO IMAGE
document.addEventListener("mousemove", (event) => {
  const houseImage = document.querySelector(".hero-image img");
  if (houseImage) {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 50;
    houseImage.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
  }
});

// 🌟 SOCIAL ICON BOUNCE EFFECT
const socialIcons = document.querySelectorAll(".social-icons a");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.animation = "bounce 0.4s ease-in-out";
  });

  icon.addEventListener("animationend", () => {
    icon.style.animation = "";
  });
});

// 🌟 MARQUEE ANIMATION PAUSE ON HOVER
const marquee = document.querySelector(".logos-track");

if (marquee) {
  marquee.addEventListener("mouseover", () => {
    marquee.style.animationPlayState = "paused";
  });

  marquee.addEventListener("mouseout", () => {
    marquee.style.animationPlayState = "running";
  });
}
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
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }`;
document.head.appendChild(styleSheet);
