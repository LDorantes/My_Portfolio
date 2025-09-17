import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sealIntact from "../assets/seal-intact1.png";
import sealBroken from "../assets/seal-broken1.png";
import envelopeTexture from "../assets/paper-texture.png";

export default function EnvelopeIntro({ onReveal, guestName }) {
  const [broken, setBroken] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setBroken(true);

    // Animación de romper sello → abrir solapa
    setTimeout(() => {
      setOpened(true);

      // Mostrar saludo → después revelar invitación
      setTimeout(() => {
        onReveal();
        document
          .getElementById("invitation-wrapper")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 2500); // damos más tiempo antes de mostrar invitación
    }, 800);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-[400px] h-[280px] bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${envelopeTexture})`,
          backgroundSize: "cover",
        }}
      >
        {/* Solapa superior */}
        <motion.div
          initial={false}
          animate={{ rotateX: opened ? -120 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-1/2 bg-white origin-top z-20"
          style={{
            clipPath: 'polygon(70% 0, 100% 0, 50% 100%)', // Triángulo invertido como la solapa real
            transformStyle: 'preserve-3d',
            backgroundImage: `url(${envelopeTexture})`,
            backgroundSize: 'cover',
          }}
        />


        {/* Parte inferior */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-white"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            backgroundImage: `url(${envelopeTexture})`,
            backgroundSize: "cover",
          }}
        />

        {/* Texto: aparece desde dentro */}
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="absolute top-1/3 w-full text-center z-10"
            >
              {guestName ? (
                <p className="text-purple-700 text-lg font-medium mb-2">
                  ¡Bienvenid@, {guestName}!
                </p>
              ) : (
                <p className="text-purple-700 text-lg font-medium mb-2">
                  ¡Bienvenid@ a nuestra boda!
                </p>
              )}
              <h1 className="text-3xl font-bold text-purple-800">Andy & Leo</h1>
              <p className="text-sm text-purple-600 mt-1">
                27 de diciembre, 2025
              </p>
            </motion.div>
          )}
        </AnimatePresence>

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
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: broken ? 15 : 0,
              scale: broken ? 0.8 : 1,
              opacity: broken ? 0 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-contain"
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
