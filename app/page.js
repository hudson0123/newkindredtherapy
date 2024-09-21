import About from './components/About.js';
import Contact from './components/Contact.js';
import FAQ from './components/FAQ.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import Resources from './components/Resources.js';
import Services from './components/Services.js';
import Testimonials from './components/Testimonials.js';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Resources />
      <FAQ />
      <Contact />
    </div>
  );
}
