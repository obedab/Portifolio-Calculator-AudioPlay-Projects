function openEmail(){
  window.location.href="mailto:obedabiragiye@gmail.com? subject=Hiring Inquiry&body=Hello,I would like to discuss";
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

mobileNavToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the form from submitting

  let name = document.querySelector('input[placeholder="Full Name"]').value;
  let email = document.querySelector('input[placeholder="Email"]').value;
  let phone = document.querySelector('input[placeholder="Phone Number"]').value;
  let subject = document.querySelector('input[placeholder="Subject"]').value;
  let message = document.querySelector('textarea[placeholder="Your Message"]').value;

  if (!name || !email || !phone || !subject || !message) {
      alert('Please fill out all fields.');
      return;
  }

  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // If validation passes, you can proceed to submit the form data.
  alert('Form Submitted Successfully!');
});

// Function to Validate Email Format
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
