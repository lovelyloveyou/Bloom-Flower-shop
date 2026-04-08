document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  if (filterButtons.length && productCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        productCards.forEach((card) => {
          const category = card.dataset.category;
          const showCard = filter === "all" || category === filter;
          card.style.display = showCard ? "" : "none";
        });
      });
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("newsletterEmail");
      const phone = document.getElementById("newsletterPhone");
      const interest = document.getElementById("interest");

      const firstNameError = document.getElementById("firstNameError");
      const lastNameError = document.getElementById("lastNameError");
      const emailError = document.getElementById("newsletterEmailError");
      const phoneError = document.getElementById("newsletterPhoneError");
      const interestError = document.getElementById("interestError");
      const success = document.getElementById("newsletterSuccess");

      let valid = true;
      const namePattern = /^[A-Za-z\s'-]{2,}$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9+\-\s()]{7,}$/;

      [firstNameError, lastNameError, emailError, phoneError, interestError, success].forEach((el) => {
        el.textContent = "";
      });

      if (!firstName.value.trim()) {
        firstNameError.textContent = "Please enter your first name.";
        valid = false;
      } else if (!namePattern.test(firstName.value.trim())) {
        firstNameError.textContent = "Please enter a valid first name.";
        valid = false;
      }

      if (!lastName.value.trim()) {
        lastNameError.textContent = "Please enter your last name.";
        valid = false;
      } else if (!namePattern.test(lastName.value.trim())) {
        lastNameError.textContent = "Please enter a valid last name.";
        valid = false;
      }

      if (!email.value.trim()) {
        emailError.textContent = "Please enter your email address.";
        valid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
      }

      if (phone.value.trim() && !phonePattern.test(phone.value.trim())) {
        phoneError.textContent = "Please enter a valid phone number.";
        valid = false;
      }

      if (!interest.value) {
        interestError.textContent = "Please choose an interest.";
        valid = false;
      }

      if (!valid) return;

      success.textContent = "Thank you for subscribing to Bloom Haven.";
      newsletterForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullName");
      const contactEmail = document.getElementById("contactEmail");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      const fullNameError = document.getElementById("fullNameError");
      const contactEmailError = document.getElementById("contactEmailError");
      const subjectError = document.getElementById("subjectError");
      const messageError = document.getElementById("messageError");
      const success = document.getElementById("contactSuccess");

      let valid = true;
      const namePattern = /^[A-Za-z\s'-]{2,}$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      [fullNameError, contactEmailError, subjectError, messageError, success].forEach((el) => {
        el.textContent = "";
      });

      if (!fullName.value.trim()) {
        fullNameError.textContent = "Please enter your full name.";
        valid = false;
      } else if (!namePattern.test(fullName.value.trim())) {
        fullNameError.textContent = "Please enter a valid name.";
        valid = false;
      }

      if (!contactEmail.value.trim()) {
        contactEmailError.textContent = "Please enter your email address.";
        valid = false;
      } else if (!emailPattern.test(contactEmail.value.trim())) {
        contactEmailError.textContent = "Please enter a valid email address.";
        valid = false;
      }

      if (!subject.value.trim()) {
        subjectError.textContent = "Please enter a subject.";
        valid = false;
      }

      if (!message.value.trim()) {
        messageError.textContent = "Please enter your message.";
        valid = false;
      } else if (message.value.trim().length < 10) {
        messageError.textContent = "Please enter at least 10 characters.";
        valid = false;
      }

      if (!valid) return;

      success.textContent = "Thank you. Your message has been sent.";
      contactForm.reset();
    });
  }
});