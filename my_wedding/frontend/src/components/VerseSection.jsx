import { motion } from 'framer-motion';

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

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-sm tracking-widest text-gray-500 uppercase"
      >
        Nuestra boda
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl md:text-5xl font-cursive text-gray-800 mt-2"
      >
        Andy & Leo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="mt-6 max-w-xl mx-auto text-gray-700 italic text-lg"
      >
        "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor."
      </motion.p>

      <p className="mt-2 text-sm text-gray-500 font-medium">1 Corintios 13:4-5</p>

      {/* Imagen decorativa pareja opcional */}
      <motion.img
        src="/img/pareja.png"
        alt="Pareja"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 mx-auto w-56 md:w-64 rounded-full shadow"
      />
    </section>
  );
}
