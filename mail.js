(function () {
  emailjs.init("ahZ_kevIc3LJz0CHp");
})();

const contactForm = document.getElementById("contactForm");
const emailBtn = document.querySelector(".email-btn");
const emailBtnText = emailBtn.querySelector("span");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("name").value.trim();
  const emailAddress = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phone").value.trim();
  const subjectValue = document.getElementById("subject").value;
  const messageValue = document.getElementById("message").value.trim();

  if (!fullName || !emailAddress || !subjectValue || !messageValue) {
    alert("Please fill in all required fields.");
    return;
  }

  emailBtn.disabled = true;
  emailBtnText.textContent = "Sending...";

  emailjs.send("service_g6xtneb", "template_lcj0qhe", {
    from_name: fullName,
    from_email: emailAddress,
    phone: phoneNumber,
    subject: subjectValue,
    message: messageValue
  })
  .then(function () {
    alert("Message sent successfully!");
    contactForm.reset();
  })
  .catch(function (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again.");
  })
  .finally(function () {
    emailBtn.disabled = false;
    emailBtnText.textContent = "Send Email";
  });
});