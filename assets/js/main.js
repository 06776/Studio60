/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  /*   
      The code for sending emails is just an example.

      Create your account at https://www.emailjs.com/ and 
      follow the instructions in the images for sending emails 
      that are in the project folder.
   */

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_jub83x6",
      "template_l9wezgq",
      "#contact-form",
      "RRFSP3MqvY0GVIdbc",
    )

    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Üzenet elküldve ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Az üzenet küldése nem sikerült ❌";
      },
    );
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]",
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== VÉLEMÉNYEK ANIMÁCIÓ ===============*/
let swiperTestimonials = new Swiper(".testimonials__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  autoplay: {
    delay: 5000, // 5 másodpercenként vált
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
});

sr.reveal(`.perfil, .contact__form`);
sr.reveal(`.info`, { origin: "left", delay: 800 });
sr.reveal(".business-card", { origin: "left", delay: 1000 });
sr.reveal(`.about`, { origin: "right", delay: 1200 });
sr.reveal(`.about-us__card`, { origin: "bottom", delay: 600 });
sr.reveal(`.projects__card, .pricing__card, .testimonials__container`, {
  interval: 100,
});
