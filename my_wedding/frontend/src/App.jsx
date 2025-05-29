import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgendaSection from './components/AgendaSection';
import GallerySection from './components/GallerySection';
import RSVPSection from './components/RSVPSection';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="agenda">
        <AgendaSection />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="rsvp">
        <RSVPSection />
      </section>
      <section id="gifts">
        <GiftSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
