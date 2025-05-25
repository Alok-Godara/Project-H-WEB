import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import WhyUs from './sections/WhyUs';
import Privacy from './sections/Privacy';
import BusinessModel from './sections/BusinessModel';
import Market from './sections/Market';
import Strategy from './sections/Strategy';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        {/* <Privacy />
        <BusinessModel />
        <Market />
        <Strategy /> */}
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;