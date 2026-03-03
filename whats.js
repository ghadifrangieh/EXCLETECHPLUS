// Example: '9611234567' for +961 1 234 567
const WHATSAPP_NUMBER = '96170174237'; // ← REPLACE WITH YOUR NUMBER

// Get elements
const whatsappBtn = document.getElementById('whatsappBtn');
const contactForm = document.getElementById('contactForm');

// WhatsApp Button Click Handler
whatsappBtn.addEventListener('click', function() {
  // Get form data
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value.trim()
  };
  
  // Validate at least name and message
  if (!formData.name || !formData.message) {
    alert('Please enter your name and message first');
    document.getElementById('name').focus();
    return;
  }
  
  // Build WhatsApp message
  const whatsappMessage = buildWhatsAppMessage(formData);
  
  // Create WhatsApp URL
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappURL, '_blank');
});

// Build formatted WhatsApp message
function buildWhatsAppMessage(data) {
  const subjectText = {
    'general': 'General Inquiry',
    'sales': 'Sales & Products',
    'partnership': 'Partnership',
    'support': 'Customer Support'
  };
  
  let message = `*New Contact from Website*\n\n`;
  message += `*Name:* ${data.name}\n`;
  
  if (data.email) {
    message += `*Email:* ${data.email}\n`;
  }
  
  if (data.phone) {
    message += `*Phone:* ${data.phone}\n`;
  }
  
  message += `*Subject:* ${subjectText[data.subject] || 'General Inquiry'}\n\n`;
  message += `*Message:*\n${data.message}`;
  
  return message;
}