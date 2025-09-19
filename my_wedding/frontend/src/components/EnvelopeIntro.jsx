import { useState } from "react";
import { motion } from "framer-motion";
import sealIntact from "../assets/seal-intact1.png";
import sealBroken from "../assets/seal-broken1.png";
import envelopeTexture from "../assets/paper-texture.png";

export default function EnvelopeIntro({ onReveal, guestName }) {
  const [broken, setBroken] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setBroken(true);
    setTimeout(() => {
      setOpened(true);
      onReveal();
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
    }, 1800);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="relative w-[400px] h-[260px]">
        <svg width="400" height="260" viewBox="0 0 400 260">
          <defs>
            {/* Textura */}
            <pattern id="paper" patternUnits="userSpaceOnUse" width="400" height="260">
              <image href={envelopeTexture} x="0" y="0" width="400" height="260" />
            </pattern>

            {/* Gradiente para sombra */}
            <linearGradient id="flapShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
          </defs>

          {/* Base rectangular del sobre */}
          <rect x="0" y="0" width="400" height="260" fill="url(#paper)" />

          {/* Solapas laterales */}
          <polygon points="0,0 200,130 0,260" fill="url(#paper)" />
          <polygon points="400,0 200,130 400,260" fill="url(#paper)" />

          {/* Solapa inferior */}
          <polygon points="0,260 200,130 400,260" fill="url(#paper)" />

          {/* Solapa superior animada */}
          <motion.polygon
            points="0,0 200,130 400,0"
            fill="url(#paper)"
            stroke="#c0c0c0"
            strokeWidth="1"
            initial={{ rotateX: 0, transformOrigin: "200px 130px" }}
            animate={{ rotateX: opened ? -180 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Sombra en la solapa */}
          {!opened && (
            <polygon points="0,0 200,130 400,0" fill="url(#flapShade)" />
          )}
        </svg>

        {/* Texto de saludo */}
        {guestName && opened && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-6 w-full text-center text-purple-700 text-lg font-medium z-30"
          >
            ¡Bienvenida, {guestName}!
          </motion.div>
        )}

        {/* Texto de nombres */}
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute top-1/3 w-full text-center"
          >
            <h1 className="text-2xl font-bold text-purple-800">Andy & Leo</h1>
            <p className="text-sm text-purple-600">27 de diciembre, 2025</p>
          </motion.div>
        )}

        {/* Sello */}
        <motion.button
          onClick={handleOpen}
          whileTap={{ scale: 0.95 }}
          disabled={broken}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-24 h-24 rounded-full flex items-center justify-center bg-transparent"
        >
          <motion.img
            key={broken ? "broken" : "intact"}
            src={broken ? sealBroken : sealIntact}
            alt="Sello"
            initial={{ rotate: 0 }}
            animate={{ rotate: broken ? 15 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full object-contain"
          />
        </motion.button>
      </div>
    </div>
  );
}
