import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sealIntact from "../assets/sello.png";
import sealBrokenBottom from "../assets/sello roto.png";
import sealBrokenTop from "../assets/sello roto top.png";
import envelopeTexture from "../assets/paper-texture.png";

export default function EnvelopeIntro({ onReveal, guestName }) {
  const [sealIsBroken, setSealIsBroken] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // 1. Romper sello
    setTimeout(() => setSealIsBroken(true), 500);

    // 2. Abrir solapa
    setTimeout(() => setOpened(true), 1000);

    // 3. Mostrar tarjeta
    setTimeout(() => setShowCard(true), 2000);
  }, []);

  useEffect(() => {
    if (expanded) {
      // cuando la tarjeta se expande → mostrar invitación completa
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

          {/* base rectangular */}
          <rect
            x="0"
            y="0"              // ← antes era 40
            width="400"
            height="280"
            fill="url(#paper)"
            stroke="#d4d4d4"
            strokeWidth="2"
          />

          {/* solapas laterales */}
          <polygon
            points="0,0 200,140 0,280"
            fill="url(#paper)"
            stroke="#d4d4d4"
            strokeWidth="2"
          />
          <polygon
            points="400,0 200,140 400,280"
            fill="url(#paper)"
            stroke="#d4d4d4"
            strokeWidth="2"
          />

          {/* solapa inferior */}
          <polygon
            points="0,280 200,140 400,280"
            fill="url(#paper)"
            stroke="#d4d4d4"
            strokeWidth="2"
          />
        </svg>

        {/* ----------- SOLAPA SUPERIOR COMO DIV ----------- */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,    // pegada al borde superior
            left: 0,
            width: "400px",
            height: "130px",
            backgroundImage: `url(${envelopeTexture})`,
            backgroundSize: "cover",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)", // triángulo invertido clásico
            transformOrigin: "50% 0%", // pliegue en el borde superior
            zIndex: 20,
            border: "2px solid #d4d4d4",
          }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: opened ? -180 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />



        {/* ----------- TARJETA ----------- */}
        {showCard && (
          <motion.div
            onClick={() => setExpanded(true)}
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={
              expanded
                ? { y: -40, scale: 2.5, opacity: 1 }
                : { y: 60, opacity: 1, scale: 1 }
            }
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[180px] bg-white rounded-lg shadow-lg z-10 flex flex-col items-center justify-center text-purple-800 cursor-pointer"
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
              top: "110px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src={sealIntact}
              alt="Sello intacto"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* ----------- SELLO ROTO (dos mitades) ----------- */}
        {sealIsBroken && (
          <>
            {/* Mitad inferior (sobre base) */}
            <div
              className="absolute w-24 h-12 z-10" // mitad de la altura
              style={{
                top: "122px", // ajusta para centrar bien
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={sealBrokenBottom} // mitad inferior
                alt="Sello roto inferior"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mitad superior (pegada a la solapa) */}
            <motion.div
              style={{
                position: "absolute",
                top: 110,
                left: "50%",
                transform: "translateX(-50%)",
                width: "96px",
                height: "48px", // mitad superior
                zIndex: 30,
              }}
            >
              <img
                src={sealBrokenTop} // mitad superior
                alt="Sello roto superior"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </>
        )}


      </div>
    </div>
  );
}
