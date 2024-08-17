import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

// App component that holds all other components
function App() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      {/* Banner component */}
      <Banner />
      {/* About Us component */}
      <About />
      {/* Products component */}
      <Products />
      {/* Why Choose Us component */}
      <WhyChooseUs />
      {/* Contact Form component */}
      <ContactForm />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
