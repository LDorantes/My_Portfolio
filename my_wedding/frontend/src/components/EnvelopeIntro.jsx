import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sealIntact from "../assets/seal-intact.png";
import sealBrokenBottom from "../assets/seal-intact-down.png";
import sealBrokenTop from "../assets/seal-intact-up.png";
import sealBack from "../assets/seal-intact-up-back.png"; // 👈 nueva imagen
import envelopeTexture from "../assets/paper-texture.png";

export default function EnvelopeIntro({ onReveal, guestName }) {
  const [sealIsBroken, setSealIsBroken] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showBack, setShowBack] = useState(false); // 👈 controla la parte trasera del sello

  useEffect(() => {
    setTimeout(() => setSealIsBroken(true), 500);  // Rompe sello
    setTimeout(() => setOpened(true), 1000);       // Abre solapa
    setTimeout(() => setShowCard(true), 2000);     // Muestra tarjeta
  }, []);

  useEffect(() => {
    if (opened) {
      // Espera a que la animación de apertura termine
      setTimeout(() => setShowBack(true), 1000); // 👈 cambia al reverso después de abrir
    }
  }, [opened]);

  useEffect(() => {
    if (expanded) {
      setTimeout(() => onReveal(), 1200);
    }
  }, [expanded, onReveal]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div
        className="relative w-[400px] h-[280px]"
        style={{ perspective: "1000px" }}
      >
        {/* ----------- BASE DEL SOBRE (SVG) ----------- */}
        <svg width="400" height="280" viewBox="0 0 400 280" className="z-0">
          <defs>
            <pattern id="paper" patternUnits="userSpaceOnUse" width="400" height="280">
              <image href={envelopeTexture} x="0" y="0" width="400" height="280" />
            </pattern>
          </defs>

          {/* Base rectangular */}
          <rect x="0" y="0" width="400" height="280" fill="url(#paper)" stroke="#d4d4d4" strokeWidth="2" />
          <polygon points="0,0 200,140 0,280" fill="url(#paper)" stroke="#d4d4d4" strokeWidth="2" />
          <polygon points="400,0 200,140 400,280" fill="url(#paper)" stroke="#d4d4d4" strokeWidth="2" />
          <polygon points="0,280 200,140 400,280" fill="url(#paper)" stroke="#d4d4d4" strokeWidth="2" />
        </svg>

        {/* ----------- SOLAPA SUPERIOR (con mitad del sello) ----------- */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "400px",
            height: "130px",
            overflow: "visible",
            transformOrigin: "50% 0%",
            zIndex: 20,
          }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: opened ? -180 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Solapa visible */}
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "130px",
              backgroundImage: `url(${envelopeTexture})`,
              backgroundSize: "cover",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              border: "2px solid #d4d4d4",
              zIndex: 10,
            }}
          />

          {/* Mitad superior del sello (cambia al reverso al abrir) */}
          {sealIsBroken && (
            <motion.div
              className="absolute w-24 h-12 z-30"
              style={{
                top: "96px",
                left: "38%",
                transform: "translateX(-50%)",
              }}
              animate={{ rotateX: opened ? 180 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img
                src={showBack ? sealBack : sealBrokenTop} // 👈 cambia según el estado
                alt="Sello roto superior"
                className="w-full h-full object-contain"
              />
            </motion.div>
          )}
        </motion.div>

        {/* ----------- TARJETA ----------- */}
        {showCard && (
          <motion.div
            onClick={() => setExpanded(true)}
            initial={{ x: -200, y: 0, opacity: 0, scale: 0.95 }}
            animate={
              expanded
                ? { y: -40, scale: 3.5, opacity: 1 }
                : { y: -100, opacity: 1, scale: 1 }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[180px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-purple-800 cursor-pointer"
            style={{
              bottom: "20px",
              zIndex: opened ? 25 : 5, // 👈 cuando la solapa se abre, sube encima de ella
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              transition: "z-index 0.3s ease",
            }}
          >
            <h2 className="text-lg">¡Bienvenida, {guestName || "invitado"}!</h2>
            <h1 className="text-2xl font-bold mt-2">Andy & Leo</h1>
            {!expanded && (
              <p className="text-xs text-gray-500 mt-2">(Haz clic para abrir)</p>
            )}
          </motion.div>
        )}



        {/* ----------- SELLO INTACTO ----------- */}
        {!sealIsBroken && (
          <div
            className="absolute w-24 h-24 z-40"
            style={{
              top: "96px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img src={sealIntact} alt="Sello intacto" className="w-full h-full object-contain" />
          </div>
        )}

        {/* ----------- MITAD INFERIOR DEL SELLO ----------- */}
        {sealIsBroken && (
          <div
            className="absolute w-24 h-12 z-10"
            style={{
              top: "144px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img src={sealBrokenBottom} alt="Sello roto inferior" className="w-full h-full object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}
