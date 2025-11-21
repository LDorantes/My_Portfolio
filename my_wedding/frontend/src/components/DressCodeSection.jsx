import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import dress1 from "../assets/dress.png";
import dress2 from "../assets/dress2.webp";
import dress3 from "../assets/dress1.webp";
import suit1 from "../assets/suit.png";
import suit2 from "../assets/suit2.webp";
import suit3 from "../assets/chaqueta-de-sport.png";

const bridesmaidBlue = "#B6FFFF";

export default function DressCodeSection() {
  const dressImages = [dress1, dress2, dress3];
  const suitImages = [suit1, suit2, suit3];

  const [currentDress, setCurrentDress] = useState(0);
  const [currentSuit, setCurrentSuit] = useState(0);

  // Cambio automático de imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDress((prev) => (prev + 1) % dressImages.length);
      setCurrentSuit((prev) => (prev + 1) % suitImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-[#fef9f6] text-center" id="dresscode">
      {/* 🌸 Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-gray-800 mb-10 font-[Playfair_Display]"
      >
        Código de Vestimenta
      </motion.h2>

      {/* 👔 Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg uppercase tracking-widest text-gray-700 mb-4"
      >
        Formal
      </motion.p>

      {/* 💬 Descripción breve */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-base text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Elegancia y estilo.  
        Para ellas, vestidos largos o midi de gala, colores neutros o suaves.  
        Para ellos, Vestimenta formal (camisa y pantalon). Queremos que te sientas cómodo y radiante!
      </motion.p>

      {/* 👗 y 🤵 Galería de ejemplos */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-10">
        {/* Vestidos */}
        <div className="relative w-40 h-56 sm:w-48 sm:h-64 overflow-hidden flex items-center justify-center">
          <motion.img
            key={currentDress}
            src={dressImages[currentDress]}
            alt="Ejemplo de vestido formal"
            className="absolute inset-0 w-full h-full object-contain drop-shadow-md"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Trajes */}
        <div className="relative w-40 h-56 sm:w-48 sm:h-64 overflow-hidden flex items-center justify-center">
          <motion.img
            key={currentSuit}
            src={suitImages[currentSuit]}
            alt="Ejemplo de traje formal"
            className="absolute inset-0 w-full h-full object-contain drop-shadow-md"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>

      {/* 🚫 Colores reservados */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex flex-col items-center justify-center space-y-2"
      >
        <p className="text-sm text-gray-700 italic">
          Por favor, no usar blanco o tonos similares.
        </p>
        <p className="text-gray-500 text-[15px] italic">
          (Colores reservados para la novia.)
        </p>

        {/* 💙 Círculo azul reservado */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <span
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              backgroundColor: bridesmaidBlue,
              display: "inline-block",
              boxShadow: "0 0 6px rgba(0,0,0,0.25)",
            }}
          ></span>
          <span className="text-sm text-gray-600 italic">
            Tono reservado para las damas.
          </span>
        </div>
      </motion.div>
    </section>
  );
}