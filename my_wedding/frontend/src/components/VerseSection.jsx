import { motion } from "framer-motion";

export default function VerseSection() {
  return (
    <section className="relative py-20 px-6 bg-[#fef9f6] text-center overflow-hidden">
      {/* Flores decorativas esquinas */}
      <img
        src="/img/flor-top-left.png"
        alt="Decoración floral"
        className="absolute top-0 left-0 w-32 opacity-80"
      />
      <img
        src="/img/flor-top-right.png"
        alt="Decoración floral"
        className="absolute top-0 right-0 w-32 opacity-80"
      />

      {/* Texto introductorio 
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm tracking-widest text-gray-500 uppercase"
      >
        Tenemos el honor de invitarte a nuestra boda
      </motion.h2>
      
      */}
      

      {/* Nombres */}
     <motion.h1
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-7xl font-parisienne text-gray-800 mt-2 tracking-wide"
      >
        Andy & Leo
      </motion.h1>

      {/* Fecha central tipo diseño clásico */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-8 flex flex-col items-center justify-center text-gray-700"
      >
        <div className="flex items-center justify-center gap-4 sm:gap-8 text-sm font-medium tracking-wide">
          <span className="uppercase text-gray-500">Sábado</span>
          <div className="text-center">
            <p className="uppercase text-gray-500 text-xs tracking-widest">
              DICIEMBRE
            </p>
            <p className="text-5xl font-light text-gray-800 leading-none">
              27
            </p>
            <p className="uppercase text-gray-500 text-xs tracking-widest mt-1">
              2025
            </p>
          </div>
          <span className="text-gray-600 font-medium">1:00 PM</span>
        </div>
      </motion.div>

      {/* Versículo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="mt-8 max-w-xl mx-auto text-gray-700 italic text-lg"
      >
        "Y nosotros hemos conocido y creído el amor que Dios tiene para con
        nosotros. Dios es amor; y el que permanece en amor, permanece en Dios,
        y Dios en él."
      </motion.p>

      <p className="mt-2 text-sm text-gray-500 font-medium">1 Juan 4:16</p>

      {/* Imagen decorativa pareja */}
      <motion.img
        src="/img/3.webp"
        alt="Pareja"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 mx-auto w-56 md:w-64 rounded-full shadow"
      />
    </section>
  );
}
