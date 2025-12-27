import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EnvelopeIntro from "./components/EnvelopeIntro";

import CountdownSection from "./components/Countdown";
import VerseSection from "./components/VerseSection";
import BlessingsSection from "./components/BlessingsSection";
import AgendaSection from "./components/AgendaSection";
import GallerySection from "./components/GallerySection";
import RSVPSection from "./components/RSVPSection";
import DressCodeSection from "./components/DressCodeSection";
import GiftSection from "./components/GiftSection";
import BlessingsWall from "./components/BlessingsWall";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

import AdminDashboard from "./pages/AdminDashboard";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./services/firebase";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [guestName, setGuestName] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token === "admin") {
      setIsAdmin(true);
      return;
    }
    if (!token) return;

    const fetchGuest = async () => {
      const guestsRef = collection(db, "guests");
      const q = query(guestsRef, where("token", "==", token));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const guestData = snapshot.docs[0].data();
        setGuestName(guestData.name);
      }
    };

    fetchGuest();
  }, []);

  // 🧠 Aquí está el cambio importante:
  if (isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="scroll-smooth min-h-screen bg-white">
      {!showContent ? (
        <EnvelopeIntro
          onReveal={() => setShowContent(true)}
          guestName={guestName}
        />
      ) : (
        <motion.div
          id="invitation-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
            <DressCodeSection />
            <GiftSection />
          </section>
          <section id="blessings-wall">
            <BlessingsWall />
          </section>
          <MusicPlayer />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
