import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/Countdown'; // ← esta es la que faltaba
import VerseSection from './components/VerseSection';
import BlessingsSection from './components/BlessingsSection';
import AgendaSection from './components/AgendaSection';
import GallerySection from './components/GallerySection';
import RSVPSection from './components/RSVPSection';
import GiftSection from './components/GiftSection';
import BlessingsWall from './components/BlessingsWall';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="countdown">
        <CountdownSection />
      </section>
      <section id="verse">
        <VerseSection />
      </section>
      <section id="blessings">
        <BlessingsSection />
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
      <section id="blessings-wall">
        <BlessingsWall />
      </section>
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
