import React, { useState } from 'react';

// ContactForm component with basic validation
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to handle input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
