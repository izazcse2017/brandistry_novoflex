import React from 'react';

// Banner component with a form
function Banner() {
  return (
    <section id="banner">
      <div>
        <h1>Welcome to Novoflex</h1>
        <p>Leading Manufacturer of Engineered Plastic Components</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Banner;
