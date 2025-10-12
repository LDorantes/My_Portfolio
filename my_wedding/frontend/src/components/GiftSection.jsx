import { motion } from "framer-motion";
import { Gift, Heart, Home } from "lucide-react";

export default function GiftSection() {
  const amazonUrl = "https://www.amazon.com.mx/hz/wishlist/ls/2UD3ID7R67JEK?ref_=wl_share";
  const liverpoolUrl = "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51804461";

  return (
    <section id="gifts" className="py-20 px-6 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-purple-800 mb-6"
      >
        Mesa de Regalos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed mb-10"
      >
        Tu presencia es nuestro mejor regalo, pero si deseas ayudarnos a comenzar 
        esta nueva etapa juntos, aquí tienes algunas ideas con mucho cariño.
      </motion.p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Amazon */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-purple-700 text-white px-6 py-3 rounded-full shadow hover:bg-purple-800 transition"
        >
          <Gift size={22} />
          Lista en Amazon
        </motion.a>

        {/* Liverpool */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={liverpoolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-rose-600 text-white px-6 py-3 rounded-full shadow hover:bg-rose-700 transition"
        >
          <Home size={22} />
          Lista en Liverpool
        </motion.a>
      </div>


      {/* Mensaje final */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-12 text-gray-600 italic"
      >
        Agradecemos de corazón tu cariño y tu compañía en este día tan importante ❤️
      </motion.p>
    </section>
  );
}
