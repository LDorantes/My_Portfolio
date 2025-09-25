import { useState } from "react";
import { motion } from "framer-motion";
import sealIntact from "../assets/seal-intact1.png";
import sealBroken from "../assets/seal-broken1.png";
import envelopeTexture from "../assets/paper-texture.png";

export default function EnvelopeIntro({ onReveal, guestName }) {
  const [broken, setBroken] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setBroken(true);

    // abrir solapa
    setTimeout(() => setOpened(true), 600);

    // levantar hoja
    setTimeout(() => setShowSheet(true), 1200);

    // revelar invitación final
    setTimeout(() => onReveal(), 4000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div
        className="relative w-[400px] h-[280px]"
        style={{ perspective: "1000px" }}
      >
        <svg
          width="400"
          height="280"
          viewBox="0 0 400 280"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            <pattern id="paper" patternUnits="userSpaceOnUse" width="400" height="280">
              <image href={envelopeTexture} x="0" y="0" width="400" height="280" />
            </pattern>
          </defs>

          {/* Base */}
          <rect x="0" y="40" width="400" height="240" fill="url(#paper)" />

          {/* Solapas laterales */}
          <polygon points="0,40 200,160 0,280" fill="url(#paper)" />
          <polygon points="400,40 200,160 400,280" fill="url(#paper)" />

          {/* Solapa inferior */}
          <polygon points="0,280 200,160 400,280" fill="url(#paper)" />

          {/* Solapa superior (animada dentro del mismo SVG) */}
          <motion.polygon
            points="0,40 200,160 400,40"
            fill="url(#paper)"
            stroke="#c0c0c0"
            strokeWidth="1"
            style={{
              transformOrigin: "200px 40px",
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateX: 180 }}      // empieza abierta
            animate={{ rotateX: 0 }}        // baja a cerrado
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />


        </svg>

        {/* Sello */}
        <motion.div
          onClick={handleOpen}
          whileTap={{ scale: .95 }}
          className="absolute w-16 h-16 z-30 cursor-pointer"
          style={{
            top: "140px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "transparent",
          }}
        >
          <motion.img
            key={broken ? "broken" : "intact"}
            src={broken ? sealBroken : sealIntact}
            alt="Sello"
            initial={{ scale: 1 }}
            animate={{ scale: broken ? 0.9 : 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Hoja */}
        {showSheet && (
          <motion.div
            initial={{ y: 160, opacity: 0 }}
            animate={{ y: 100, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[160px] bg-white rounded-lg shadow-md z-20 flex flex-col items-center justify-center text-purple-800"
          >
            <h2 className="text-lg">¡Bienvenida, {guestName || "invitado"}!</h2>
            <h1 className="text-2xl font-bold mt-2">A&L</h1>
          </motion.div>
        )}
      </div>
    </div>
  );
  
}
