import { motion } from "framer-motion";
import dress from "../assets/dress.png";
import suit from "../assets/suit.png";
const bridesmaidBlue = "#B6FFFF"; 

export default function DressCodeSection() {
  return (
    <section className="py-20 px-6 bg-[#fef9f6] text-center" id="dresscode">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-gray-800 mb-10 font-[Playfair_Display]"
      >
        Código de Vestimenta
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg uppercase tracking-widest text-gray-700 mb-8"
      >
        Formal
      </motion.p>

      {/* Iconos de vestimenta */}
      <div className="flex items-center justify-center gap-10 mb-8">
        <motion.img
          src={dress}
          alt="Vestido formal"
          className="w-20 sm:w-28 object-contain"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.img
          src={suit}
          alt="Traje formal"
          className="w-20 sm:w-28 object-contain"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>

      {/* Nota sobre colores + círculo azul */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mb-10 flex flex-col items-center justify-center space-y-2"
      >
        <p className="text-sm text-gray-700 italic">
          Por favor, no usar blanco o tonos similares.  
        </p>
        <p className="text-gray-500 text-[15px] italic">
          (Colores reservados para la novia.)
        </p>

        {/* Círculo de color reservado */}
        <div className="mt-3 flex items-center justify-center gap-3">
        {/* Círculo visual */}
        <span
            className="inline-block align-middle"
            style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: bridesmaidBlue,
            display: "inline-block",
            boxShadow: "0 0 4px rgba(0,0,0,0.15)",
            border: "1px solid rgba(0,0,0,0.1)",
            }}
        ></span>

        {/* Texto al lado */}
        <span className="text-sm text-gray-600 italic">
            Tono reservado para las damas.
        </span>
        </div>

      </motion.div>

    </section>
  );
}
