import { useState } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro';

import CountdownSection from './components/Countdown';
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
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="scroll-smooth min-h-screen bg-white">
      {!showContent ? (
        <EnvelopeIntro onOpen={() => setShowContent(true)} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
