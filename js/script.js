document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', function () {
        document.querySelector('nav').classList.toggle('show');
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            question.nextElementSibling.classList.toggle('show');
        });
    });

    // Recipe Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            document.querySelectorAll('.recipe-card').forEach(card => {
                card.classList.toggle('hidden', !(filter === 'all' || card.dataset.category === filter));
            });
            
        });
    });

    // Wellness Program Enrollment
    document.querySelectorAll('.enroll-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const program = this.parentElement.querySelector('h3').textContent;
            alert(`Thank you for your interest in ${program}! We'll contact you soon.`);
        });
    });

    // Scroll Animation
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.8;
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < triggerBottom) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check
});
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once the animation has triggered
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible
  
    observer.observe(section);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            // Toggle answer visibility
            const isOpen = answer.style.display === "block";
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            
            // Close all other answers
            if (!isOpen) {
                answer.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formStatus = document.getElementById("form-status");

        // Simple validation
        if (name === "" || email === "" || message === "") {
            formStatus.innerText = "Please fill in all fields.";
            formStatus.style.color = "red";
            return;
        }

        // Simulate successful form submission
        formStatus.innerText = "Thank you! Your message has been sent.";
        formStatus.style.color = "green";

        // Reset form fields
        contactForm.reset();
    });
});

  