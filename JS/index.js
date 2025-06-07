document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown > a');
    const menu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.toggle('show');
    });
  });


function dropdown(e) {
   e.stopPropagation(); // optional: prevents bubbling if needed

  const content = e.currentTarget;
  const subMenu = content.querySelector('.sub-dropdown-menu');
  const arrow = content.querySelector('.arrow');

  if (subMenu) {
    subMenu.classList.toggle('show');
    arrow.classList.toggle('rotate');
  }
}


   const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-listItems');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
 
  function scrollToCards() {
    const cardSection = document.getElementById("cards");
    cardSection.scrollIntoView({ behavior: "smooth" });
  }




  function scrollTestimonials(direction) {
    const container = document.querySelector('.testimonials-list');
    const scrollAmount = 320; // Adjust based on width of testimonial

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  const checkbox = document.getElementById("checkbox");
  const icon = document.getElementById("theme-icon");

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    icon.textContent = document.body.classList.contains("dark-theme") ? "🌙" : "☀️";
  });

